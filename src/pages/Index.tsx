import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Отрасли", href: "#industries" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "Этапы работы", href: "#process" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Pipette", title: "Теплоизоляция трубопроводов", desc: "Монтаж теплоизоляции на трубопроводы любого диаметра и назначения." },
  { icon: "Settings", title: "Изоляция оборудования", desc: "Комплексная изоляция промышленного оборудования: насосы, компрессоры, теплообменники." },
  { icon: "Database", title: "Изоляция резервуаров", desc: "Утепление резервуаров для хранения жидкостей, нефтепродуктов, химических веществ." },
  { icon: "Anchor", title: "Судовая теплоизоляция", desc: "Специализированная изоляция для судов и морских объектов любого класса." },
  { icon: "Wind", title: "Изоляция вентиляции", desc: "Теплоизоляция и звукоизоляция вентиляционных каналов и воздуховодов." },
  { icon: "Shield", title: "Монтаж кожухов", desc: "Изготовление и монтаж защитных металлических кожухов из оцинкованной стали и алюминия." },
  { icon: "Flame", title: "Огнезащита", desc: "Огнезащитная обработка конструкций, металла и инженерных систем." },
  { icon: "Wrench", title: "Работы под ключ", desc: "Полный цикл: от проектирования и подбора материалов до сдачи объекта." },
];

const WHY_US = [
  { icon: "Users", title: "Опытные специалисты", desc: "Аттестованные монтажники с опытом на объектах любой сложности" },
  { icon: "Clock", title: "Соблюдение сроков", desc: "Строгий контроль сроков на каждом этапе выполнения работ" },
  { icon: "BookOpen", title: "Работа по ГОСТ", desc: "Все работы выполняются в соответствии с действующими ГОСТами и СНиПами" },
  { icon: "Package", title: "Современные материалы", desc: "Используем материалы ведущих производителей с гарантией качества" },
  { icon: "MapPin", title: "Работаем по всей России", desc: "Выезжаем на объекты в любой регион Российской Федерации" },
  { icon: "FileText", title: "Прозрачная смета", desc: "Детальный расчёт стоимости без скрытых платежей и дополнительных расходов" },
];

const INDUSTRIES = [
  { icon: "Factory", title: "Заводы" },
  { icon: "Zap", title: "Энергетика" },
  { icon: "Droplets", title: "Нефтегаз" },
  { icon: "Home", title: "ЖКХ" },
  { icon: "Anchor", title: "Судостроение" },
  { icon: "Ship", title: "Порты" },
  { icon: "Building2", title: "Производственные предприятия" },
];

const PROCESS = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку — мы свяжемся с вами в течение 1 рабочего дня" },
  { num: "02", title: "Расчёт", desc: "Проводим обследование объекта и готовим детальный расчёт стоимости" },
  { num: "03", title: "Согласование", desc: "Согласовываем смету, сроки и все технические детали проекта" },
  { num: "04", title: "Выполнение работ", desc: "Проводим монтаж в установленные сроки с контролем качества на каждом этапе" },
  { num: "05", title: "Сдача объекта", desc: "Принимаете готовый объект с полным пакетом документов и гарантией" },
];

const CERTIFICATES = [
  { title: "ГОСТ 21.101-2020", desc: "Основные требования к проектной документации", category: "ГОСТ" },
  { title: "СП 61.13330", desc: "Тепловая изоляция оборудования и трубопроводов", category: "СП" },
  { title: "ISO 9001:2015", desc: "Система менеджмента качества", category: "ISO" },
  { title: "ГОСТ 10.18-85", desc: "Теплоизоляционные конструкции промышленных объектов", category: "ГОСТ" },
  { title: "Свидетельство СРО", desc: "Допуск к работам по строительству и монтажу", category: "СРО" },
  { title: "НАКС", desc: "Национальное агентство контроля сварки", category: "НАКС" },
];

const HERO_IMG = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/4569b9aa-ab86-4541-9596-09a5fdad6061.jpg";
const SHIP_IMG = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/06e8ae54-9add-479b-987c-68d7055ba66e.jpg";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter',sans-serif]">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black text-white tracking-tight">Т1</span>
                <div className="w-1.5 h-6 bg-orange-500 mx-1" />
                <span className="text-2xl font-black text-white tracking-tight">ИЗОЛЯЦИЯ</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-orange-400 transition-colors font-medium uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+78001234567" className="text-white font-semibold text-sm hover:text-orange-400 transition-colors">
                8 800 000 00 00
              </a>
              <a
                href="#contacts"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors"
              >
                Связаться
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-black border-t border-white/10 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-orange-400 transition-colors font-medium uppercase text-sm tracking-wide border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+78001234567" className="block mt-4 text-white font-semibold">
              8 800 000 00 00
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Промышленная теплоизоляция"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
                Промышленная теплоизоляция
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Промышленная теплоизоляция под ключ для предприятий и судостроения
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Проектирование, поставка и монтаж теплоизоляции любой сложности по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacts"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-wide text-sm transition-colors text-center"
              >
                Получить расчёт
              </a>
              <a
                href="#contacts"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase tracking-wide text-sm transition-colors text-center"
              >
                Оставить заявку
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/20">
              {[
                { num: "12+", label: "лет на рынке" },
                { num: "500+", label: "объектов сдано" },
                { num: "85", label: "регионов России" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-orange-500">{stat.num}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-orange-500" />
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">О компании</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Т1 ИЗОЛЯЦИЯ — надёжный партнёр в промышленности
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Т1 ИЗОЛЯЦИЯ — надёжный подрядчик в сфере промышленной теплоизоляции. Работаем качественно, в срок и по стандартам.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Мы специализируемся на комплексной тепловой изоляции трубопроводов, оборудования, резервуаров и судовых конструкций. Наша команда — опытные инженеры и монтажники, которые гарантируют результат на каждом объекте.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "12+", label: "Лет опыта" },
                  { num: "500+", label: "Объектов" },
                  { num: "85", label: "Регионов" },
                  { num: "100%", label: "Гарантия" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-orange-500 pl-4">
                    <div className="text-2xl font-black text-gray-900">{item.num}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={SHIP_IMG}
                alt="Судостроение"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 hidden lg:block">
                <div className="text-3xl font-black">2012</div>
                <div className="text-sm font-medium mt-1">год основания</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Услуги</span>
              <div className="w-12 h-0.5 bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white">Наши услуги</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-gray-950 p-8 hover:bg-gray-900 transition-colors group border-b border-white/5"
              >
                <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Icon name={service.icon} size={22} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold mb-3 text-lg leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Преимущества</span>
              <div className="w-12 h-0.5 bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Почему выбирают нас</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Icon name={item.icon} size={24} className="text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Отрасли</span>
              <div className="w-12 h-0.5 bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white">Работаем в отраслях</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className="flex flex-col items-center gap-4 p-6 border border-white/10 hover:border-orange-500 hover:bg-orange-500/5 transition-all group cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon name={industry.icon} size={28} className="text-gray-400 group-hover:text-orange-400 transition-colors" />
                </div>
                <span className="text-gray-300 text-sm font-medium text-center leading-tight group-hover:text-white transition-colors">
                  {industry.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Документы</span>
              <div className="w-12 h-0.5 bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Сертификаты и лицензии</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Работаем в строгом соответствии с нормами и стандартами. Вся документация в порядке.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.title}
                className="border border-gray-200 p-8 hover:border-orange-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Icon name="Award" size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2.5 py-1 uppercase tracking-wide">
                    {cert.category}
                  </span>
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                <div className="flex items-center gap-2 mt-4 text-orange-500">
                  <Icon name="CheckCircle" size={16} />
                  <span className="text-sm font-medium">Действующий</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-950 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-lg">Нужны копии документов?</p>
              <p className="text-gray-400 text-sm mt-1">Направим полный пакет по запросу в течение 1 рабочего дня</p>
            </div>
            <a
              href="#contacts"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-wide text-sm transition-colors whitespace-nowrap"
            >
              Запросить документы
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Процесс</span>
              <div className="w-12 h-0.5 bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white">Этапы работы</h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {PROCESS.map((step, idx) => (
                <div key={step.num} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 bg-gray-950 border-2 border-orange-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-orange-500 font-black text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  {idx < PROCESS.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <Icon name="ChevronDown" size={20} className="text-orange-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Оставьте заявку — наш специалист свяжется с вами и бесплатно проконсультирует по вашей задаче.
          </p>
          <a
            href="#contacts"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-10 py-4 font-black uppercase tracking-wide text-sm transition-colors"
          >
            Получить бесплатный расчёт
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-orange-500" />
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Контакты</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">Свяжитесь с нами</h2>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "8 800 000 00 00" },
                  { icon: "Mail", label: "Email", value: "info@t1izol.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Санкт-Петербург, ул. Промышленная, 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 18:00" },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">{contact.label}</div>
                      <div className="font-semibold text-gray-900">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-950 p-8 lg:p-10">
              <h3 className="text-white font-black text-2xl mb-2">Оставьте заявку</h3>
              <p className="text-gray-400 text-sm mb-8">Ответим в течение 1 рабочего дня</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Заявка отправлена!</h4>
                  <p className="text-gray-400">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wide font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wide font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wide font-medium mb-2">Описание задачи</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите объект, тип изоляции, объём работ..."
                      rows={4}
                      className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 font-bold uppercase tracking-wide text-sm transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-gray-600 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-white tracking-tight">Т1</span>
              <div className="w-1 h-5 bg-orange-500 mx-1" />
              <span className="text-xl font-black text-white tracking-tight">ИЗОЛЯЦИЯ</span>
            </div>
            <p className="text-gray-600 text-sm text-center">
              © {new Date().getFullYear()} Т1 ИЗОЛЯЦИЯ. Все права защищены.
            </p>
            <div className="flex gap-6">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-orange-400 text-xs uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;