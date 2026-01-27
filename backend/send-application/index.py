import json
import os
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pydantic import BaseModel, EmailStr, Field

logger = logging.getLogger()
logger.setLevel(logging.INFO)


class ApplicationRequest(BaseModel):
    """Модель заявки кандидата"""
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    phone: str = Field(..., min_length=1, max_length=50)
    position: str = Field(..., min_length=1, max_length=200)
    experience: str = Field(..., min_length=1, max_length=50)
    message: str = Field(default="", max_length=2000)


def send_email(application: ApplicationRequest) -> bool:
    """Отправляет заявку кандидата на email"""
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    
    if not all([smtp_host, smtp_user, smtp_password]):
        raise ValueError('SMTP settings not configured')
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от кандидата: {application.name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user
    
    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">Новая заявка от кандидата</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Имя:</strong> {application.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Email:</strong> {application.email}</p>
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Телефон:</strong> {application.phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Должность:</strong> {application.position}</p>
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Опыт работы:</strong> {application.experience}</p>
          </div>
          
          {f'<div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;"><strong style="color: #4F46E5;">Сообщение:</strong><p style="margin: 10px 0 0 0;">{application.message}</p></div>' if application.message else ''}
        </div>
      </body>
    </html>
    """
    
    html_part = MIMEText(html_body, 'html')
    msg.attach(html_part)
    
    try:
        logger.info(f'Connecting to SMTP: {smtp_host}:{smtp_port}')
        with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
            server.set_debuglevel(1)
            logger.info('Starting TLS...')
            server.starttls()
            logger.info(f'Logging in as {smtp_user}...')
            server.login(smtp_user, smtp_password)
            logger.info('Sending email...')
            server.send_message(msg)
            logger.info('Email sent successfully!')
    except smtplib.SMTPAuthenticationError as e:
        logger.error(f'SMTP Auth Error: {e}')
        raise ValueError(f'Ошибка аутентификации SMTP. Проверьте пароль приложения в настройках Яндекса')
    except Exception as e:
        logger.error(f'SMTP Error: {type(e).__name__}: {e}')
        raise
    
    return True


def handler(event: dict, context) -> dict:
    """Обрабатывает заявки от кандидатов и отправляет их на email"""
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
        application = ApplicationRequest(**data)
        send_email(application)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            }),
            'isBase64Encoded': False
        }
    except ValueError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': str(e)
            }),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': f'Ошибка: {str(e)}'
            }),
            'isBase64Encoded': False
        }