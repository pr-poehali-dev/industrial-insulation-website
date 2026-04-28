import { useRef, useState, useEffect } from "react";

export const LOGO_IMG = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/45df6c21-6239-4f1c-8904-6639b775df22.png";
export const LOGO_SYMBOL = "https://cdn.poehali.dev/files/53d29d32-74f0-4088-9d14-8c8b870bf4a3.png";

export const IMG_HERO   = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/13ad7087-45ba-4c45-a9d9-f6fac5286d8d.jpg";
export const IMG_BOILER = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/b4f523ee-7f73-4d6e-a86b-a0a81dd4b98b.jpg";
export const IMG_SHIP   = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/e61d4de9-bcc7-4f47-b8a7-0687a3bf4b9e.jpg";
export const IMG_PIPE   = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/6a3cb15e-2c7a-40d3-a075-c99e7ed457f2.jpg";

export const GRAD = "linear-gradient(135deg, #e63012 0%, #f97316 50%, #fbbf24 100%)";
export const GRAD_H = "linear-gradient(90deg, #e63012 0%, #f97316 50%, #fbbf24 100%)";

export const NAV_LINKS = [
  { label: "О компании",   href: "#about" },
  { label: "Услуги",       href: "#services" },
  { label: "Отрасли",      href: "#industries" },
  { label: "Сертификаты",  href: "#certificates" },
  { label: "Этапы работы", href: "#process" },
  { label: "Контакты",     href: "#contacts" },
];

export const STATS = [
  { num: "2022", label: "год основания" },
  { num: "РФ",   label: "поставки по всей России" },
  { num: "B2B",  label: "работаем с организациями" },
  { num: "100%", label: "официальная документация" },
];

export const SERVICES = [
  { icon: "Pipette", title: "Теплоизоляция трубопроводов",      kw: "изоляция трубопроводов",    desc: "Монтаж промышленной теплоизоляции на трубопроводы любого диаметра — от DN15 до DN1400. Работаем с паром, горячей водой, нефтепродуктами и агрессивными средами.",                                   tag: "Ключевая услуга" },

  { icon: "Settings", title: "Теплоизоляция оборудования",      kw: "теплоизоляция оборудования", desc: "Комплексная тепловая изоляция насосов, компрессоров, теплообменников, котлов и реакторов. Сокращаем тепловые потери до 95%.",                                                                       tag: "" },
  { icon: "Database", title: "Изоляция резервуаров",             kw: "",                           desc: "Утепление резервуаров РВС, РГС, ёмкостей для нефтепродуктов и химических веществ. Проектирование и монтаж в полном объёме.",                                                                       tag: "" },
  { icon: "Anchor",   title: "Судовая теплоизоляция",            kw: "судовая теплоизоляция",      desc: "Специализированная изоляция корпусов судов, машинных отделений и трубопроводов. Соответствие Регистру РФ и международным стандартам.",                                                              tag: "Специализация" },
  { icon: "Wind",     title: "Изоляция вентиляции",              kw: "",                           desc: "Теплоизоляция и шумоподавление вентиляционных каналов, воздуховодов промышленных объектов и судов.",                                                                                                 tag: "" },
  { icon: "Shield",   title: "Монтаж кожухов",                   kw: "",                           desc: "Изготовление и монтаж защитных металлических кожухов из оцинкованной стали и алюминия. Долговечная защита изоляции.",                                                                               tag: "" },
  { icon: "Flame",    title: "Огнезащита",                       kw: "",                           desc: "Огнезащитная обработка металлоконструкций, кабелей и инженерных систем. Сертифицированные материалы и бригады.",                                                                                    tag: "" },
  { icon: "Wrench",   title: "Комплексный монтаж теплоизоляции", kw: "монтаж теплоизоляции",       desc: "Полный цикл: проектирование, поставка материалов, монтаж, сдача объекта с документацией. Один подрядчик — ноль лишних согласований.",                                                               tag: "Популярно" },
];

export const WHY_US = [
  { icon: "Users",    title: "200+ аттестованных специалистов",  desc: "Монтажники, инженеры и технадзор — весь штат в штате. Без субподряда на ключевых работах." },
  { icon: "Clock",    title: "Сдача объектов в срок — 98%",      desc: "Строгий производственный контроль и запас бригад для соблюдения дедлайна на любом объекте." },
  { icon: "BookOpen", title: "Работа строго по ГОСТ и СНиП",     desc: "Все технические решения проходят нормоконтроль. Документация готова к проверке любым надзором." },
  { icon: "Package",  title: "Материалы ведущих производителей", desc: "Rockwool, Knauf, Paroc, Изовер — прямые договоры. Оригинальные материалы с сертификатами." },
  { icon: "MapPin",   title: "85 регионов России",                desc: "Собственные бригады, доставка материалов и командировки по всей территории РФ." },
  { icon: "FileText", title: "Смета без скрытых платежей",       desc: "Фиксированная стоимость в договоре. Изменения — только по согласованию с заказчиком." },
];

export const INDUSTRIES = [
  { icon: "Factory",   title: "Заводы и производства",    desc: "Химия, металлургия, пищепром" },
  { icon: "Zap",       title: "Энергетика",               desc: "ТЭЦ, котельные, АЭС" },
  { icon: "Droplets",  title: "Нефтегаз",                 desc: "НПЗ, магистральные трубопроводы" },
  { icon: "Home",      title: "ЖКХ",                      desc: "Тепловые сети, ЦТП" },
  { icon: "Anchor",    title: "Судостроение",              desc: "Верфи, доки, суда" },
  { icon: "Ship",      title: "Порты и терминалы",        desc: "Перегрузочные комплексы" },
  { icon: "Building2", title: "Промышленные предприятия", desc: "Производственные объекты" },
];

export const PROCESS = [
  { num: "01", title: "Заявка",        desc: "Оставьте заявку или позвоните — мы ответим в течение 1 часа в рабочее время.", icon: "MessageSquare" },
  { num: "02", title: "Расчёт",        desc: "Выезжаем на объект, изучаем техзадание и готовим детальную смету.",            icon: "Calculator" },
  { num: "03", title: "Согласование",  desc: "Утверждаем стоимость, сроки и техническое решение. Подписываем договор.",      icon: "FileCheck" },
  { num: "04", title: "Выполнение",    desc: "Монтаж по утверждённому графику с еженедельной отчётностью для заказчика.",    icon: "HardHat" },
  { num: "05", title: "Сдача объекта", desc: "Передаём исполнительную документацию и акты. Выдаём гарантийный паспорт.",     icon: "CheckCircle" },
];

export const CERTIFICATES = [
  { title: "ГОСТ 21.101-2020",  desc: "Основные требования к проектной документации",    category: "ГОСТ" },
  { title: "СП 61.13330.2012",  desc: "Тепловая изоляция оборудования и трубопроводов", category: "СП"   },
  { title: "ISO 9001:2015",     desc: "Система менеджмента качества",                    category: "ISO"  },
  { title: "ГОСТ Р 52541-2006", desc: "Изоляция тепловая. Термины и определения",        category: "ГОСТ" },
  { title: "Свидетельство СРО", desc: "Допуск к работам по строительству и монтажу",     category: "СРО"  },
  { title: "НАКС",              desc: "Национальное агентство контроля и сварки",         category: "НАКС" },
];

export const CONTACTS_INFO = [
  { icon: "Building2", label: "Организация",   value: "ООО «Т1 ИЗОЛЯЦИЯ»",          sub: "ИНН 7810939850",                href: "#" },
  { icon: "Mail",      label: "Email",          value: "teplofabrika@mail.ru",        sub: "Ответим за 1 рабочий день",     href: "mailto:teplofabrika@mail.ru" },
  { icon: "MapPin",    label: "Адрес",          value: "196105, Санкт-Петербург",     sub: "ул. Решетникова, 13А",          href: "#" },
  { icon: "Clock",     label: "Режим работы",   value: "Пн–Пт: 9:00–18:00",          sub: "Сб–Вс — по договорённости",    href: "#" },
];

/* ─── Intersection Observer Hook ────────────────────────────── */
export function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}