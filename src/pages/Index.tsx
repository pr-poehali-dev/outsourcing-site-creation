import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">IT Staff</div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">
                Кейсы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')}>Связаться</Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Комплектуем IT-команды под ваши проекты
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Подбираем и предоставляем опытных специалистов для усиления вашей команды разработки
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('contact')}>
                    Начать проект
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                    Смотреть кейсы
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
                  <img 
                    src="/placeholder.svg" 
                    alt="IT Team" 
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Users",
                  title: "Опытные специалисты",
                  description: "Более 500 проверенных IT-профессионалов в нашей базе"
                },
                {
                  icon: "Zap",
                  title: "Быстрый подбор",
                  description: "Формируем команду под ваш проект за 5-7 дней"
                },
                {
                  icon: "Shield",
                  title: "Гарантия качества",
                  description: "Замена специалиста в течение 2 недель при необходимости"
                }
              ].map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            <div className="space-y-8 text-lg text-muted-foreground">
              <p className="animate-slide-in-left">
                IT Staff — это команда профессионалов с 8-летним опытом в сфере аутстаффинга IT-специалистов. 
                Мы помогаем компаниям масштабировать разработку, предоставляя проверенных разработчиков, 
                тестировщиков, аналитиков и других специалистов.
              </p>
              <p className="animate-slide-in-left">
                Наш подход основан на глубоком понимании потребностей бизнеса. Мы не просто поставляем ресурсы — 
                мы становимся партнёром в достижении ваших целей, тщательно подбирая специалистов под 
                технологический стек и культуру вашей команды.
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                {[
                  { number: "500+", label: "Специалистов" },
                  { number: "120+", label: "Реализованных проектов" },
                  { number: "8 лет", label: "На рынке" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши кейсы</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Примеры успешных проектов, где мы помогли компаниям усилить команды разработки
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Финтех-платформа",
                  company: "FinanceFlow",
                  description: "Усилили команду разработки мобильного банкинга 5 разработчиками React Native и 2 QA-инженерами",
                  result: "Запуск нового продукта в срок, рост MAU на 40%",
                  tech: ["React Native", "Node.js", "PostgreSQL"]
                },
                {
                  title: "E-commerce решение",
                  company: "ShopMaster",
                  description: "Предоставили команду из 8 специалистов для масштабирования платформы онлайн-торговли",
                  result: "Увеличение производительности на 3x, обработка 10M+ транзакций/мес",
                  tech: ["Vue.js", "Python", "Redis", "Kubernetes"]
                },
                {
                  title: "Медицинская платформа",
                  company: "HealthTech Pro",
                  description: "Сформировали полноценную команду разработки для создания телемедицинского сервиса с нуля",
                  result: "MVP за 4 месяца, 50K+ активных пользователей",
                  tech: ["React", "Django", "WebRTC", "AWS"]
                },
                {
                  title: "Логистическая система",
                  company: "LogiTrack",
                  description: "Комплектовали команду аналитиков и разработчиков для системы управления грузоперевозками",
                  result: "Автоматизация 80% процессов, экономия $2M/год",
                  tech: ["Angular", "Java", "MongoDB", "Kafka"]
                }
              ].map((caseItem, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-primary mb-2">{caseItem.company}</div>
                    <h3 className="text-2xl font-bold mb-3">{caseItem.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <div className="text-sm font-semibold mb-1">Результат:</div>
                    <div className="text-sm">{caseItem.result}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground">
                Расскажите о вашем проекте — подберём команду специалистов
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="ivan@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Какие специалисты нужны, сроки проекта, технологический стек..."
                  />
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-12 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@itstaff.ru</div>
                </div>
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
                <div>
                  <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-sm font-medium mb-1">Офис</div>
                  <div className="text-sm text-muted-foreground">Москва, ул. Примерная, 10</div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">IT Staff</div>
              <p className="text-sm opacity-80">
                Аутстаффинг IT-специалистов для вашего бизнеса
              </p>
            </div>
            <div>
              <div className="font-semibold mb-4">Компания</div>
              <div className="space-y-2 text-sm opacity-80">
                <div>О нас</div>
                <div>Кейсы</div>
                <div>Контакты</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Услуги</div>
              <div className="space-y-2 text-sm opacity-80">
                <div>Аутстаффинг</div>
                <div>Подбор команд</div>
                <div>Консалтинг</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Контакты</div>
              <div className="space-y-2 text-sm opacity-80">
                <div>info@itstaff.ru</div>
                <div>+7 (495) 123-45-67</div>
                <div>Москва</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60">
            © 2026 IT Staff. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
