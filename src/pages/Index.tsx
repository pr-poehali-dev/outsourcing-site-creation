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
            <img 
              src="https://cdn.poehali.dev/files/photo_2025-12-15_12-15-25.png" 
              alt="ПТК - Подбор трудовых кадров" 
              className="h-12 object-contain"
            />
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
                  Подбор линейного персонала для производства
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Обеспечиваем предприятия квалифицированными рабочими и специалистами производственных участков
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
                    src="https://cdn.poehali.dev/files/Аутстафф.png" 
                    alt="Подбор линейного персонала" 
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
                  title: "Проверенные кадры",
                  description: "Более 2000 квалифицированных рабочих в нашей базе"
                },
                {
                  icon: "Clock",
                  title: "Оперативный подбор",
                  description: "Комплектуем смены и участки за 3-5 дней"
                },
                {
                  icon: "Shield",
                  title: "Гарантия качества",
                  description: "Замена работника в течение 1 недели при необходимости"
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
                ПТК (Подбор Трудовых Кадров) — это команда профессионалов с 5-летним опытом в сфере подбора линейного персонала. 
                Мы помогаем производственным предприятиям найти квалифицированных рабочих: 
                операторов станков, сборщиков, слесарей, контролёров качества и других специалистов.
              </p>
              <p className="animate-slide-in-left">
                Наш подход основан на глубоком понимании потребностей производства. Мы не просто поставляем рабочую силу — 
                мы становимся партнёром в достижении ваших производственных показателей, тщательно отбирая кадры под 
                специфику вашего производства и корпоративной культуры.
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                {[
                  { number: "2000+", label: "Рабочих в базе" },
                  { number: "300+", label: "Предприятий-клиентов" },
                  { number: "5 лет", label: "На рынке" }
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
                Примеры успешных проектов, где мы помогли предприятиям закрыть потребность в персонале
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Камский завод металлоконструкций",
                  company: "АО «КЗМК ТЭМПО»",
                  description: "Плодотворное и профессиональное сотрудничество в области подбора и предоставления персонала",
                  result: "Благодарственное письмо за оперативность, гибкость и глубокое понимание потребностей",
                  tech: ["Кадровые задачи", "Производственный персонал"],
                  image: "https://cdn.poehali.dev/projects/758ebfc9-aa6d-4a81-b8af-37dcb486f962/bucket/7377381a-ebda-426a-9804-b4aa4ebcff3e.png"
                },
                {
                  title: "Машиностроительный завод",
                  company: "АО Металлпром",
                  description: "Подобрали 30 операторов станков с ЧПУ и 15 сборщиков механических узлов для запуска новой линии",
                  result: "Запуск производства в срок, +40% к плановой мощности",
                  tech: ["Операторы ЧПУ", "Сборщики", "Контролёры"]
                },
                {
                  title: "Пищевое производство",
                  company: "ООО АгроПродукт",
                  description: "Комплектовали 3 смены (по 25 человек) для упаковочной линии с обучением на месте",
                  result: "Выполнение плана на 120%, снижение брака до 2%",
                  tech: ["Упаковщики", "Сортировщики", "Контроль качества"]
                },
                {
                  title: "Логистический центр",
                  company: "Логистик Про",
                  description: "Подбор 40 грузчиков, 10 кладовщиков и 5 операторов погрузчиков для расширения склада",
                  result: "Увеличение оборота на 60%, сокращение времени обработки",
                  tech: ["Грузчики", "Кладовщики", "Операторы"]
                }
              ].map((caseItem, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  {caseItem.image && (
                    <div className="mb-6 -mx-8 -mt-8">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title}
                        className="w-full h-auto object-contain rounded-t-lg"
                      />
                    </div>
                  )}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={32} />
                <div className="text-lg font-semibold mb-2">Email</div>
                <a href="mailto:ptk.staffing@yandex.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  ptk.staffing@yandex.ru
                </a>
              </Card>
              <Card className="p-8 text-center">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <div className="text-lg font-semibold mb-2">Телефон</div>
                <a href="tel:+79991645830" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (999) 164-58-30
                </a>
              </Card>
              <Card className="p-8 text-center">
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={32} />
                <div className="text-lg font-semibold mb-2">Офис</div>
                <div className="text-muted-foreground">
                  Набережные Челны, ул. Академика Рубаненко, 4, оф. 455
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/photo_2025-12-15_12-15-25.png" 
                alt="ПТК" 
                className="h-16 mb-4 object-contain"
              />
              <p className="text-sm opacity-80">
                Подбор линейного персонала для производства
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
                <div>Подбор персонала</div>
                <div>Комплектация смен</div>
                <div>Обучение кадров</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Контакты</div>
              <div className="space-y-2 text-sm opacity-80">
                <div>ptk.staffing@yandex.ru</div>
                <div>+7 (996) 845-32-12</div>
                <div>Набережные Челны, РТ</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60">
            © 2026 ПТК - Подбор Трудовых Кадров. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;