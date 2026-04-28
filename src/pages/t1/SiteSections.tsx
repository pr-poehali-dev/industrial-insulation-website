import Icon from "@/components/ui/icon";
import {
  IMG_HERO, IMG_BOILER, IMG_PIPE, IMG_SHIP,
  GRAD, GRAD_H,
  STATS, SERVICES, WHY_US, INDUSTRIES, CERTIFICATES, PROCESS,
  useVisible,
} from "./data";

// Тематические фото для каждой карточки услуг (по порядку SERVICES)
const SERVICE_IMGS = [
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/03841964-0c63-4461-be67-e7e5fe5dd7f1.jpg", // трубопроводы
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/7225b93c-1003-44b7-a36f-76ffd5b8d88e.jpg", // оборудование
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/64c6bebe-8689-4b29-98e0-be7c4a203df3.jpg", // резервуары
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/54225ad3-2b0d-4899-be42-3c5da2e37189.jpg", // судовая
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/40c5740f-7f9e-4d35-8c08-e38e1a2b6b7d.jpg", // вентиляция
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/d0ed56cb-322d-46c3-9571-f0e5a4f43703.jpg", // кожухи
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/62c10ffd-18cb-4f61-a83e-97bfa3120d57.jpg", // огнезащита
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/ea11e02a-fb71-4dc6-9b16-04ad25dd97fa.jpg", // комплексный монтаж
];

/* ─── Hero + Marquee ─────────────────────────────────────────── */
export const HeroSection = () => {
  const heroVis = useVisible(0.1);
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroVis.ref}>
        <div className="absolute inset-0">
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
            poster={IMG_HERO}
          >
            <source src="https://videos.pexels.com/video-files/6997592/6997592-hd_1280_720_25fps.mp4" type="video/mp4" />
            <img src={IMG_HERO} alt="Промышленная теплоизоляция" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
          <div className={`text-center flex flex-col items-center transition-all duration-1000 ${heroVis.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Логотип */}
            <img
              src="https://cdn.poehali.dev/files/53d29d32-74f0-4088-9d14-8c8b870bf4a3.png"
              alt="Т1 Изоляция"
              className="drop-shadow-2xl py-0 px-0 mx-0 my-0 object-fill rounded-xl"
              style={{ height: 180, width: "auto" }}
            />

            <h1 className="sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.05] mb-8 tracking-tight text-center text-7xl">Теплоизоляция для инженерных систем и оборудования </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl text-center">
              Проектирование, поставка и <strong className="text-white">монтаж теплоизоляции</strong> — трубопроводы, оборудование, резервуары и суда. По всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#request"
                className="btn-primary group text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3"
                style={{ background: GRAD }}>
                Получить расчёт
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacts"
                className="border border-white/30 hover:border-white text-white hover:bg-white/5 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 text-center backdrop-blur-sm">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-orange-500" />
        </div>
      </section>

      {/* Marquee */}
      <div className="py-3 overflow-hidden" style={{ background: GRAD_H }}>
        <div className="flex gap-12 animate-[marquee_18s_linear_infinite] whitespace-nowrap w-max">
          {Array(3).fill(["Промышленная теплоизоляция", "Изоляция трубопроводов", "Теплоизоляция оборудования", "Судовая теплоизоляция", "Комплексный монтаж", "Работаем по ГОСТ", "Гарантия качества"]).flat().map((t, i) => (
            <span key={i} className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-4">
              {t} <span className="text-white/40">·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

/* ─── About ──────────────────────────────────────────────────── */
export const AboutSection = () => {
  const aboutVis = useVisible(0.1);
  return (
    <section id="about" className="py-28 bg-white overflow-hidden relative" ref={aboutVis.ref}>
      {/* Subtle background photo */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.04]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`transition-all duration-800 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">О компании</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              Надёжный подрядчик, которому доверяют директора предприятий
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              <strong>Т1 ИЗОЛЯЦИЯ</strong> — специализированный подрядчик в сфере <strong>промышленной теплоизоляции</strong>. Мы выполняем полный цикл работ: от проектирования до сдачи объекта с документацией.
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
          <div className={`relative transition-all duration-800 delay-200 ${aboutVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>
            <div className="relative overflow-hidden">
              <img src={IMG_BOILER} alt="Теплоизоляция оборудования и трубопроводов" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 shadow-xl hidden lg:block">
              <div className="text-4xl font-black leading-none">12+</div>
              <div className="text-xs font-bold uppercase tracking-wide mt-1 text-orange-100">Лет на рынке</div>
            </div>
            <div className="absolute top-0 right-0 w-1 h-full bg-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Catalog ────────────────────────────────────────────────── */
const IMG_TUBES = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/3ddf0ad3-7940-400c-a688-3e907253b23d.jpg";
const IMG_ROLLS = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/51e58607-a24b-44da-948e-737b95e9c9e0.jpg";
const IMG_GLUE  = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/a8546888-733b-4725-826e-b8ddc828706d.jpg";

const CATALOG_SHIP: { name: string; img: string }[] = [
  { name: "Трубки",               img: IMG_TUBES },
  { name: "Рулоны",               img: IMG_ROLLS },
  { name: "Высокоплотные рулоны", img: IMG_ROLLS },
  { name: "Стыковочные ленты",    img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/6a3cb15e-2c7a40d3-a075-c99e7ed457f2.jpg" },
  { name: "Клей и очиститель",    img: IMG_GLUE },
  { name: "Защитные покрытия",    img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/d0ed56cb-322d-46c3-9571-f0e5a4f43703.jpg" },
  { name: "ИТШМИ ПАНЦИРЬ",        img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/62c10ffd-18cb-4f61-a83e-97bfa3120d57.jpg" },
  { name: "ЗМ ПАНЦИРЬ",           img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/ea11e02a-fb71-4dc6-9b16-04ad25dd97fa.jpg" },
];

const CATALOG_INDUSTRY: { name: string; img: string }[] = [
  { name: "Трубки",               img: IMG_TUBES },
  { name: "Рулоны",               img: IMG_ROLLS },
  { name: "Высокоплотные рулоны", img: IMG_ROLLS },
  { name: "Стыковочные ленты",    img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/03841964-0c63-4461-be67-e7e5fe5dd7f1.jpg" },
  { name: "Клей и очиститель",    img: IMG_GLUE },
  { name: "Защитные покрытия",    img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/d0ed56cb-322d-46c3-9571-f0e5a4f43703.jpg" },
];

const CatalogCard = ({ name, img, delay, visible }: { name: string; img: string; delay: number; visible: boolean }) => (
  <div
    className={`group relative overflow-hidden cursor-default rounded-[20px]
      border border-white/[0.05] hover:border-white/[0.10]
      shadow-[0_2px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.8)]
      transition-[border-color,box-shadow] duration-[350ms]
      ${visible ? "animate-fadeInUp" : "opacity-0"}`}
    style={{
      animationDelay: `${delay}ms`,
      background: "linear-gradient(145deg, #141414 0%, #181818 50%, #161210 100%)",
    }}
  >
    {/* Тонкая оранжевая черта слева — единственный акцент */}
    <div className="absolute top-4 left-0 bottom-4 w-[2px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-[350ms]"
      style={{ background: "linear-gradient(to bottom, #e63012, #f97316, #fbbf24)" }} />

    {/* МОБАЙЛ: горизонтальный лейаут */}
    <div className="flex sm:block">

      {/* Контент */}
      <div className="relative z-10 flex items-center
        pl-6 pr-4 py-5 min-h-[80px]
        sm:pl-7 sm:pr-5 sm:py-6 sm:min-h-[110px]
        flex-1 min-w-0">
        <p className="text-gray-100 group-hover:text-white font-medium text-sm sm:text-[15px] leading-snug tracking-wide transition-colors duration-[350ms]">
          {name}
        </p>
      </div>

      {/* Фото — мобайл: всегда справа */}
      <div className="sm:hidden relative flex-shrink-0 w-20 min-h-[80px] overflow-hidden">
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #141414 0%, transparent 60%)" }} />
      </div>

    </div>

    {/* Фото — десктоп: появляется при hover */}
    <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-[40%] overflow-hidden
      opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-out">
      <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, #141414 0%, rgba(20,18,16,0.55) 35%, transparent 100%)" }} />
      <div className="absolute inset-0 bg-black/25" />
    </div>
  </div>
);

export const CatalogSection = () => {
  const catalogVis = useVisible(0.1);
  return (
    <section id="catalog" className="bg-[#0a0a0a] overflow-hidden relative" ref={catalogVis.ref}>

      {/* Заголовок раздела */}
      <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Материалы</span>
            <div className="w-10 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            Каталог изоляционных материалов
          </h2>
        </div>
      </div>

      {/* Судостроение — на фоне видео во всю ширину */}
      <div className="relative">
        {/* Видео фон */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={IMG_SHIP}
        >
          <source src="https://videos.pexels.com/video-files/8968775/8968775-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <img src={IMG_SHIP} alt="Судостроение" className="absolute inset-0 w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/50" />

        {/* Контент поверх */}
        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="text-xl sm:text-2xl font-black text-white">Каталог для судостроения</h3>
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-orange-400/80 text-xs font-bold uppercase tracking-widest">{CATALOG_SHIP.length} позиций</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {CATALOG_SHIP.map((item, i) => (
              <CatalogCard key={item.name} name={item.name} img={item.img} delay={i * 60} visible={catalogVis.visible} />
            ))}
          </div>
        </div>
      </div>

      {/* Промышленность и ПГС */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-200 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h3 className="text-xl sm:text-2xl font-black text-white">Каталог для промышленности и ПГС</h3>
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-orange-500/60 text-xs font-bold uppercase tracking-widest">{CATALOG_INDUSTRY.length} позиций</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CATALOG_INDUSTRY.map((item, i) => (
            <CatalogCard key={item.name} name={item.name} img={item.img} delay={i * 60} visible={catalogVis.visible} />
          ))}
        </div>
      </div>

    </section>
  );
};



/* ─── Industries ─────────────────────────────────────────────── */
export const IndustriesSection = () => {
  const indVis = useVisible(0.1);
  return (
    <section id="industries" className="py-28 bg-gray-950 overflow-hidden noise-bg relative" ref={indVis.ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_SHIP} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.07]" />
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>
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
              className={`group flex flex-col items-center text-center p-8 bg-gray-950/80 hover:bg-orange-500 transition-all duration-400 cursor-default
                ${indVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}>
              <Icon name={ind.icon} size={28} className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-4" />
              <h3 className="text-gray-300 group-hover:text-white font-bold text-sm transition-colors leading-snug mb-1">{ind.title}</h3>
              <p className="text-gray-600 group-hover:text-orange-100 text-xs transition-colors">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Certificates ───────────────────────────────────────────── */
export const CertificatesSection = () => {
  const certVis = useVisible(0.1);
  return (
    <section id="certificates" className="py-28 bg-white overflow-hidden relative" ref={certVis.ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_BOILER} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.03]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="btn-primary text-white px-8 py-3.5 font-black uppercase tracking-widest text-xs transition-all duration-300 hover:opacity-90 whitespace-nowrap flex items-center gap-2 group"
            style={{ background: GRAD }}>
            Запросить документы
            <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── Process ────────────────────────────────────────────────── */
export const ProcessSection = () => {
  const procVis = useVisible(0.1);
  return (
    <section id="process" className="py-28 bg-[#0a0a0a] overflow-hidden noise-bg relative" ref={procVis.ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.05]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
      </div>
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
              className={`group relative bg-[#0a0a0a]/80 p-8 hover:bg-[#111] transition-all duration-300
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
  );
};