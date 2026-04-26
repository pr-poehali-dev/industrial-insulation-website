import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

/* ─── Images ────────────────────────────────────────────────── */
const IMG_HERO    = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/13ad7087-45ba-4c45-a9d9-f6fac5286d8d.jpg";
const IMG_BOILER  = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/b4f523ee-7f73-4d6e-a86b-a0a81dd4b98b.jpg";
const IMG_SHIP    = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/e61d4de9-bcc7-4f47-b8a7-0687a3bf4b9e.jpg";
const IMG_PIPE    = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/6a3cb15e-2c7a-40d3-a075-c99e7ed457f2.jpg";

/* ─── Data ───────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "О компании",   href: "#about" },
  { label: "Услуги",       href: "#services" },
  { label: "Отрасли",      href: "#industries" },
  { label: "Сертификаты",  href: "#certificates" },
  { label: "Этапы работы", href: "#process" },
  { label: "Контакты",     href: "#contacts" },
];

const STATS = [
  { num: "12+",  label: "лет на рынке" },
  { num: "500+", label: "объектов сдано" },
  { num: "85",   label: "регионов России" },
  { num: "100%", label: "гарантия результата" },
];

const SERVICES = [
  {
    icon: "Pipette",
    title: "Теплоизоляция трубопроводов",
    kw: "изоляция трубопроводов",
    desc: "Монтаж промышленной теплоизоляции на трубопроводы любого диаметра — от DN15 до DN1400. Работаем с паром, горячей водой, нефтепродуктами и агрессивными средами.",
    tag: "Ключевая услуга",
  },
  {
    icon: "Settings",
    title: "Теплоизоляция оборудования",
    kw: "теплоизоляция оборудования",
    desc: "Комплексная тепловая изоляция насосов, компрессоров, теплообменников, котлов и реакторов. Сокращаем тепловые потери до 95%.",
    tag: "",
  },
  {
    icon: "Database",
    title: "Изоляция резервуаров",
    kw: "",
    desc: "Утепление резервуаров РВС, РГС, ёмкостей для нефтепродуктов и химических веществ. Проектирование и монтаж под ключ.",
    tag: "",
  },
  {
    icon: "Anchor",
    title: "Судовая теплоизоляция",
    kw: "судовая теплоизоляция",
    desc: "Специализированная изоляция корпусов судов, машинных отделений и трубопроводов. Соответствие Регистру РФ и международным стандартам.",
    tag: "Специализация",
  },
  {
    icon: "Wind",
    title: "Изоляция вентиляции",
    kw: "",
    desc: "Теплоизоляция и шумоподавление вентиляционных каналов, воздуховодов промышленных объектов и судов.",
    tag: "",
  },
  {
    icon: "Shield",
    title: "Монтаж кожухов",
    kw: "",
    desc: "Изготовление и монтаж защитных металлических кожухов из оцинкованной стали и алюминия. Долговечная защита изоляции.",
    tag: "",
  },
  {
    icon: "Flame",
    title: "Огнезащита",
    kw: "",
    desc: "Огнезащитная обработка металлоконструкций, кабелей и инженерных систем. Сертифицированные материалы и бригады.",
    tag: "",
  },
  {
    icon: "Wrench",
    title: "Монтаж теплоизоляции под ключ",
    kw: "монтаж теплоизоляции",
    desc: "Полный цикл: проектирование, поставка материалов, монтаж, сдача объекта с документацией. Один подрядчик — ноль лишних согласований.",
    tag: "Популярно",
  },
];

const WHY_US = [
  { icon: "Users",    title: "200+ аттестованных специалистов", desc: "Монтажники, инженеры и технадзор — весь штат в штате. Без субподряда на ключевых работах." },
  { icon: "Clock",    title: "Сдача объектов в срок — 98%",    desc: "Строгий производственный контроль и запас бригад для соблюдения дедлайна на любом объекте." },
  { icon: "BookOpen", title: "Работа строго по ГОСТ и СНиП",   desc: "Все технические решения проходят нормоконтроль. Документация готова к проверке любым надзором." },
  { icon: "Package",  title: "Материалы ведущих производителей", desc: "Rockwool, Knauf, Paroc, Изовер — прямые договоры. Оригинальные материалы с сертификатами." },
  { icon: "MapPin",   title: "85 регионов России",              desc: "Собственные бригады, доставка материалов и командировки по всей территории РФ." },
  { icon: "FileText", title: "Смета без скрытых платежей",     desc: "Фиксированная стоимость в договоре. Изменения — только по согласованию с заказчиком." },
];

const INDUSTRIES = [
  { icon: "Factory",   title: "Заводы и производства",     desc: "Химия, металлургия, пищепром" },
  { icon: "Zap",       title: "Энергетика",                desc: "ТЭЦ, котельные, АЭС" },
  { icon: "Droplets",  title: "Нефтегаз",                  desc: "НПЗ, магистральные трубопроводы" },
  { icon: "Home",      title: "ЖКХ",                       desc: "Тепловые сети, ЦТП" },
  { icon: "Anchor",    title: "Судостроение",               desc: "Верфи, доки, суда" },
  { icon: "Ship",      title: "Порты и терминалы",         desc: "Перегрузочные комплексы" },
  { icon: "Building2", title: "Промышленные предприятия",  desc: "Производственные объекты" },
];

const PROCESS = [
  { num: "01", title: "Заявка",          desc: "Оставьте заявку или позвоните — мы ответим в течение 1 часа в рабочее время.", icon: "MessageSquare" },
  { num: "02", title: "Расчёт",          desc: "Выезжаем на объект, изучаем техзадание и готовим детальную смету.", icon: "Calculator" },
  { num: "03", title: "Согласование",    desc: "Утверждаем стоимость, сроки и техническое решение. Подписываем договор.", icon: "FileCheck" },
  { num: "04", title: "Выполнение",      desc: "Монтаж по утверждённому графику с еженедельной отчётностью для заказчика.", icon: "HardHat" },
  { num: "05", title: "Сдача объекта",   desc: "Передаём исполнительную документацию и акты. Выдаём гарантийный паспорт.", icon: "CheckCircle" },
];

const CERTIFICATES = [
  { title: "ГОСТ 21.101-2020",    desc: "Основные требования к проектной документации",       category: "ГОСТ" },
  { title: "СП 61.13330.2012",    desc: "Тепловая изоляция оборудования и трубопроводов",      category: "СП"   },
  { title: "ISO 9001:2015",       desc: "Система менеджмента качества",                        category: "ISO"  },
  { title: "ГОСТ Р 52541-2006",   desc: "Изоляция тепловая. Термины и определения",            category: "ГОСТ" },
  { title: "Свидетельство СРО",   desc: "Допуск к работам по строительству и монтажу",         category: "СРО"  },
  { title: "НАКС",                desc: "Национальное агентство контроля и сварки",             category: "НАКС" },
];

const CONTACTS_INFO = [
  { icon: "Phone",  label: "Телефон",       value: "8 800 000 00 00",                  sub: "Бесплатно по России",    href: "tel:+78000000000" },
  { icon: "Mail",   label: "Email",         value: "info@t1izol.ru",                   sub: "Ответим за 1 рабочий день", href: "mailto:info@t1izol.ru" },
  { icon: "MapPin", label: "Адрес",         value: "Санкт-Петербург",                  sub: "ул. Промышленная, 1",    href: "#" },
  { icon: "Clock",  label: "Режим работы",  value: "Пн–Пт: 9:00–18:00",               sub: "Сб–Вс — по договорённости", href: "#" },
];

/* ─── Intersection Observer Hook ────────────────────────────── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Component ─────────────────────────────────────────────── */
const Index = () => {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [formData,   setFormData]   = useState({ name: "", phone: "", message: "" });
  const [submitted,  setSubmitted]  = useState(false);
  const [submitted2, setSubmitted2] = useState(false);
  const [form2Data,  setForm2Data]  = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroVis     = useVisible(0.1);
  const aboutVis    = useVisible(0.1);
  const servicesVis = useVisible(0.1);
  const whyVis      = useVisible(0.1);
  const indVis      = useVisible(0.1);
  const certVis     = useVisible(0.1);
  const procVis     = useVisible(0.1);
  const ctaVis      = useVisible(0.1);
  const contVis     = useVisible(0.1);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/98 shadow-2xl shadow-black/40" : "bg-black/80 backdrop-blur-md"} border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="flex items-center">
                <span className="text-2xl font-black text-white tracking-tighter leading-none">Т1</span>
                <div className="w-[3px] h-7 bg-orange-500 mx-2 group-hover:h-8 transition-all duration-300" />
                <span className="text-2xl font-black text-white tracking-tighter leading-none">ИЗОЛЯЦИЯ</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}
                  className="relative text-xs text-gray-400 hover:text-white transition-colors font-semibold uppercase tracking-widest group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a href="tel:+78000000000" className="text-white font-bold text-sm hover:text-orange-400 transition-colors">
                8 800 000 00 00
              </a>
              <a href="#contacts"
                className="btn-primary bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-colors">
                Получить расчёт
              </a>
            </div>

            {/* Mobile burger */}
            <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-black/98 border-t border-white/5 px-4 py-4 animate-fadeInUp">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="block py-3.5 text-gray-300 hover:text-orange-400 transition-colors font-semibold uppercase text-xs tracking-widest border-b border-white/5 last:border-0">
                {link.label}
              </a>
            ))}
            <a href="tel:+78000000000" className="block mt-5 text-white font-bold text-lg">8 800 000 00 00</a>
            <a href="#contacts" className="block mt-3 bg-orange-500 text-white text-center py-3 font-black text-xs uppercase tracking-widest">
              Получить расчёт
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroVis.ref}>
        {/* Background */}
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Промышленная теплоизоляция под ключ" className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
          <div className={`max-w-3xl transition-all duration-1000 ${heroVis.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em]">
                Промышленная теплоизоляция · Монтаж под ключ
              </span>
            </div>

            {/* H1 — SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.05] mb-8 tracking-tight">
              Промышленная<br />
              <span className="gradient-text">теплоизоляция</span><br />
              под ключ
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl">
              Проектирование, поставка и <strong className="text-white">монтаж теплоизоляции</strong> любой сложности — трубопроводы, оборудование, резервуары и суда. По всей России.
            </p>
            <p className="text-gray-400 text-sm mb-10">
              Ключевые запросы: изоляция трубопроводов · теплоизоляция оборудования · судовая теплоизоляция · монтаж теплоизоляции
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#request"
                className="btn-primary group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3">
                Получить расчёт
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacts"
                className="border border-white/30 hover:border-white text-white hover:bg-white/5 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 text-center backdrop-blur-sm">
                Оставить заявку
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {STATS.map((s, i) => (
                <div key={s.label} className={`transition-all duration-700 delay-${(i + 1) * 100} ${heroVis.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <div className="text-3xl lg:text-4xl font-black text-orange-500 leading-none">{s.num}</div>
                  <div className="text-xs text-gray-400 mt-1.5 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-orange-500" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ──────────────────────────────────────── */}
      <div className="bg-orange-500 py-3 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_18s_linear_infinite] whitespace-nowrap w-max">
          {Array(3).fill(["Промышленная теплоизоляция", "Изоляция трубопроводов", "Теплоизоляция оборудования", "Судовая теплоизоляция", "Монтаж теплоизоляции под ключ", "Работаем по ГОСТ", "Гарантия качества"]).flat().map((t, i) => (
            <span key={i} className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-4">
              {t} <span className="text-white/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ──────────────────────────────────────────────── */}
      <section id="about" className="py-28 bg-white overflow-hidden" ref={aboutVis.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div className={`transition-all duration-800 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">О компании</span>
              </div>
              {/* H2 */}
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                Надёжный подрядчик, которому доверяют директора предприятий
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                <strong>Т1 ИЗОЛЯЦИЯ</strong> — специализированный подрядчик в сфере <strong>промышленной теплоизоляции</strong>. С 2012 года мы выполняем полный цикл работ: от проектирования до сдачи объекта с документацией.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Наши заказчики — руководители крупных предприятий, главные инженеры и технические директора, для которых важны сроки, качество и бумаги в порядке. Мы работаем именно с такими задачами.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {STATS.map((s) => (
                  <div key={s.label} className="group bg-gray-50 hover:bg-orange-50 border border-transparent hover:border-orange-200 p-5 transition-all duration-300 card-hover">
                    <div className="text-3xl font-black text-orange-500 mb-1">{s.num}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`relative transition-all duration-800 delay-200 ${aboutVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>
              <div className="relative overflow-hidden">
                <img src={IMG_BOILER} alt="Теплоизоляция оборудования и трубопроводов" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 shadow-xl hidden lg:block">
                <div className="text-4xl font-black leading-none">2012</div>
                <div className="text-xs font-bold uppercase tracking-wide mt-1 text-orange-100">Год основания</div>
              </div>
              {/* Accent line */}
              <div className="absolute top-0 right-0 w-1 h-full bg-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-[#0a0a0a] overflow-hidden noise-bg" ref={servicesVis.ref}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Услуги</span>
              <div className="w-10 h-px bg-orange-500" />
            </div>
            {/* H2 */}
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Полный спектр услуг<br />по теплоизоляции
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              От технической консультации до сдачи объекта — один подрядчик, полная ответственность.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {SERVICES.map((s, i) => (
              <div key={s.title}
                className={`group relative bg-[#0a0a0a] p-8 hover:bg-[#111] transition-all duration-300 cursor-default overflow-hidden
                  ${servicesVis.visible ? `animate-fadeInUp delay-${Math.min((i + 1) * 100, 800)}` : "opacity-0"}`}>
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500" />

                {s.tag && (
                  <span className="inline-block mb-4 text-[10px] font-bold uppercase tracking-widest text-orange-500 border border-orange-500/30 px-2 py-0.5">
                    {s.tag}
                  </span>
                )}

                <div className="w-11 h-11 bg-orange-500/10 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-all duration-300">
                  <Icon name={s.icon} size={20} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* H3 */}
                <h3 className="text-white font-bold text-base mb-3 leading-snug group-hover:text-orange-50 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{s.desc}</p>

                <div className="mt-5 flex items-center gap-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-bold uppercase tracking-wide">Подробнее</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section id="why" className="py-28 bg-white overflow-hidden" ref={whyVis.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div className={`transition-all duration-700 ${whyVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Почему нас выбирают</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                То, что важно для технического директора
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                Мы знаем: вам нужен подрядчик, который не подведёт. Поэтому выстраиваем работу так, чтобы вы могли нам доверять.
              </p>

              <div className="relative overflow-hidden rounded-none">
                <img src={IMG_PIPE} alt="Монтаж теплоизоляции трубопроводов" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4">
                  <p className="text-white text-xs leading-relaxed">
                    <strong className="text-orange-400">Каждый объект</strong> — именной. Назначаем персонального прораба и инженера технадзора.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-4">
              {WHY_US.map((item, i) => (
                <div key={item.title}
                  className={`group flex gap-5 p-5 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 transition-all duration-300 card-hover
                    ${whyVis.visible ? `animate-fadeInRight delay-${(i + 1) * 100}` : "opacity-0"}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
                    <Icon name={item.icon} size={20} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────────── */}
      <section id="industries" className="py-28 bg-gray-950 overflow-hidden noise-bg" ref={indVis.ref}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-16 transition-all duration-700 ${indVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Отрасли</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Работаем в каждой<br />промышленной отрасли
              </h2>
              <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
                Опыт на объектах разного масштаба — от районной котельной до НПЗ.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-white/5">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.title}
                className={`group flex flex-col items-center text-center p-8 bg-gray-950 hover:bg-orange-500 transition-all duration-400 cursor-default
                  ${indVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}>
                <Icon name={ind.icon} size={28} className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-4" />
                <h3 className="text-gray-300 group-hover:text-white font-bold text-sm transition-colors leading-snug mb-1">{ind.title}</h3>
                <p className="text-gray-600 group-hover:text-orange-100 text-xs transition-colors">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ───────────────────────────────────────── */}
      <section id="certificates" className="py-28 bg-white overflow-hidden" ref={certVis.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${certVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Документы</span>
              <div className="w-10 h-px bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Сертификаты, лицензии<br />и соответствие стандартам
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              Все работы ведутся в строгом соответствии с нормами. Комплект документов — к каждому объекту.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert, i) => (
              <div key={cert.title}
                className={`group relative overflow-hidden border border-gray-100 p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-400 card-hover
                  ${certVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}>
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
                    <Icon name="Award" size={18} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] font-black bg-gray-100 group-hover:bg-orange-50 text-gray-500 group-hover:text-orange-600 px-2.5 py-1 uppercase tracking-widest transition-all">
                    {cert.category}
                  </span>
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cert.desc}</p>
                <div className="flex items-center gap-2 text-green-600">
                  <Icon name="CheckCircle2" size={15} />
                  <span className="text-xs font-bold">Действующий документ</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 bg-gray-950 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 ${certVis.visible ? "animate-fadeInUp delay-700" : "opacity-0"}`}>
            <div>
              <p className="text-white font-black text-lg">Нужны копии документов?</p>
              <p className="text-gray-400 text-sm mt-1">Направим полный пакет по запросу в течение 1 рабочего дня</p>
            </div>
            <a href="#contacts"
              className="btn-primary bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 font-black uppercase tracking-widest text-xs transition-all duration-300 whitespace-nowrap flex items-center gap-2 group">
              Запросить документы
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" className="py-28 bg-[#0a0a0a] overflow-hidden noise-bg" ref={procVis.ref}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${procVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Как мы работаем</span>
              <div className="w-10 h-px bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              5 этапов — от заявки до гарантии
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
            {PROCESS.map((step, i) => (
              <div key={step.num}
                className={`group relative bg-[#0a0a0a] p-8 hover:bg-[#111] transition-all duration-300
                  ${procVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}>
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 border-2 border-orange-500/30 group-hover:border-orange-500 flex items-center justify-center transition-all duration-300">
                    <span className="text-orange-500 font-black text-sm">{step.num}</span>
                  </div>
                  <Icon name={step.icon} size={16} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / REQUEST ──────────────────────────────────────── */}
      <section id="request" className="overflow-hidden" ref={ctaVis.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2">

            {/* Left dark */}
            <div className={`relative bg-gray-950 p-12 lg:p-16 overflow-hidden ${ctaVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-500" />
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-px bg-orange-500" />
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Коммерческое предложение</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6 tracking-tight">
                  Нужен расчёт стоимости<br />теплоизоляции?
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-10">
                  Подготовим предложение под ваш объект в короткий срок. Бесплатно, без обязательств.
                </p>

                <ul className="space-y-4">
                  {[
                    "Бесплатный выезд специалиста на объект",
                    "Расчёт за 1–2 рабочих дня",
                    "Фиксированная стоимость в договоре",
                    "Гарантийный паспорт на работы",
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={11} className="text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                  <img src={IMG_SHIP} alt="Судовая теплоизоляция" className="w-20 h-14 object-cover opacity-70" />
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Судовая теплоизоляция, НПЗ, энергетика —<br />
                    <span className="text-gray-300">опыт на объектах любой отрасли</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className={`bg-white p-12 lg:p-16 border border-gray-100 ${ctaVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>
              <h3 className="text-2xl font-black text-gray-900 mb-1">Получить коммерческое предложение</h3>
              <p className="text-gray-400 text-sm mb-8">Ответим в течение 1 рабочего дня</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h4 className="text-gray-900 font-black text-xl mb-2">Заявка отправлена!</h4>
                  <p className="text-gray-400 text-sm">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Ваше имя *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full border border-gray-200 focus:border-orange-500 text-gray-900 placeholder-gray-300 px-4 py-3.5 outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Телефон *</label>
                    <input type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-gray-200 focus:border-orange-500 text-gray-900 placeholder-gray-300 px-4 py-3.5 outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Комментарий</label>
                    <textarea value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите объект, тип изоляции, объём работ..."
                      rows={3}
                      className="w-full border border-gray-200 focus:border-orange-500 text-gray-900 placeholder-gray-300 px-4 py-3.5 outline-none transition-colors text-sm resize-none" />
                  </div>
                  <button type="submit"
                    className="btn-primary w-full bg-orange-500 hover:bg-orange-600 text-white py-4 font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group">
                    Получить коммерческое предложение
                    <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-gray-300 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#privacy" className="underline hover:text-orange-500 transition-colors">политикой конфиденциальности</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ───────────────────────────────────────────── */}
      <section id="contacts" className="py-28 bg-white overflow-hidden" ref={contVis.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${contVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Контакты</span>
              <div className="w-10 h-px bg-orange-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Как с нами связаться
            </h2>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {CONTACTS_INFO.map((item, i) => (
              <a key={item.label} href={item.href}
                className={`group border border-gray-100 p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 card-hover flex flex-col items-center text-center
                  ${contVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}>
                <div className="w-14 h-14 bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon name={item.icon} size={22} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">{item.label}</div>
                <div className="font-black text-gray-900 mb-1">{item.value}</div>
                <div className="text-gray-400 text-xs">{item.sub}</div>
              </a>
            ))}
          </div>

          {/* Second form */}
          <div className={`max-w-2xl mx-auto bg-gray-950 p-10 lg:p-14 ${contVis.visible ? "animate-fadeInUp delay-500" : "opacity-0"}`}>
            <h3 className="text-white font-black text-2xl mb-1 text-center">Оставьте заявку</h3>
            <p className="text-gray-400 text-sm mb-8 text-center">Свяжемся в течение 1 рабочего дня</p>

            {submitted2 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-5">
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h4 className="text-white font-black text-xl mb-2">Заявка принята!</h4>
                <p className="text-gray-400 text-sm">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted2(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Имя *</label>
                    <input type="text" required value={form2Data.name}
                      onChange={(e) => setForm2Data({ ...form2Data, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3.5 outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Телефон *</label>
                    <input type="tel" required value={form2Data.phone}
                      onChange={(e) => setForm2Data({ ...form2Data, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3.5 outline-none transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Комментарий</label>
                  <textarea value={form2Data.message}
                    onChange={(e) => setForm2Data({ ...form2Data, message: e.target.value })}
                    placeholder="Опишите объект, тип изоляции, объём работ..."
                    rows={3}
                    className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3.5 outline-none transition-colors text-sm resize-none" />
                </div>
                <button type="submit"
                  className="btn-primary w-full bg-orange-500 hover:bg-orange-600 text-white py-4 font-black uppercase tracking-widest text-xs transition-all duration-300">
                  Отправить заявку
                </button>
                <p className="text-gray-600 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#privacy" className="underline hover:text-orange-400 transition-colors">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer id="privacy" className="bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 mb-5">
                <span className="text-xl font-black text-white tracking-tighter">Т1</span>
                <div className="w-[3px] h-6 bg-orange-500 mx-1.5" />
                <span className="text-xl font-black text-white tracking-tighter">ИЗОЛЯЦИЯ</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Промышленная теплоизоляция под ключ. Изоляция трубопроводов, оборудования и судов. Работаем по всей России с 2012 года.
              </p>
              <a href="tel:+78000000000" className="text-white font-bold hover:text-orange-400 transition-colors text-sm">
                8 800 000 00 00
              </a>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Навигация</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-orange-500 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Услуги</h4>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="text-gray-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-orange-500 group-hover:w-3 transition-all duration-300" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Контакты</h4>
              <ul className="space-y-4">
                {CONTACTS_INFO.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="flex items-start gap-3 group">
                      <Icon name={c.icon} size={13} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors leading-snug">{c.value}</div>
                        <div className="text-gray-700 text-xs">{c.sub}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 text-xs">
              © {new Date().getFullYear()} Т1 ИЗОЛЯЦИЯ. Все права защищены. Промышленная теплоизоляция под ключ.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#privacy" className="text-gray-700 hover:text-gray-400 text-xs transition-colors">Политика конфиденциальности</a>
              <a href="#privacy" className="text-gray-700 hover:text-gray-400 text-xs transition-colors">Обработка персональных данных</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
