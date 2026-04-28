import Icon from "@/components/ui/icon";
import { IMG_BOILER, IMG_PIPE, LOGO_SYMBOL, STATS, useVisible } from "./data";

const ABOUT_ADVANTAGES = [
  { icon: "MapPin",        text: "Поставки по всей России" },
  { icon: "Settings2",     text: "Подбор под объект" },
  { icon: "Calculator",    text: "Технические расчёты" },
  { icon: "PackageCheck",  text: "Официальные поставки" },
  { icon: "BadgeCheck",    text: "Сертификаты качества" },
  { icon: "Anchor",        text: "Судостроение и промышленность" },
];

export const AboutSection = () => {
  const aboutVis = useVisible(0.1);
  return (
    <section id="about" className="py-32 lg:py-40 bg-[#f8f7f5] overflow-hidden relative" ref={aboutVis.ref}>

      {/* Полупрозрачное фото фоном */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_BOILER} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.055]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f5] via-[#f8f7f5]/80 to-[#f8f7f5]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f7f5]/50 via-transparent to-[#f8f7f5]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Лейбл */}
        <div className={`flex items-center gap-3 mb-16 transition-all duration-700 ${aboutVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="w-8 h-px bg-orange-500/70" />
          <span className="text-orange-600 text-[11px] font-bold uppercase tracking-[0.3em]">О компании</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Левая колонка: текст ── */}
          <div className={`transition-all duration-700 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-12">
              О компании{" "}
              <span style={{ background: "linear-gradient(90deg, #e63012, #f97316, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Т1 ИЗОЛЯЦИЯ
              </span>
            </h2>

            <div className="space-y-8">
              <p className="text-[17px] text-gray-700 leading-[1.8] font-light">
                <span className="font-semibold text-gray-900">ООО «Т1 ИЗОЛЯЦИЯ»</span> — поставщик профессиональных решений в области теплоизоляции, шумоизоляции и защитных покрытий для судостроения, промышленности и инженерных систем.
              </p>

              <div className="w-10 h-px" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />

              <p className="text-[15px] text-gray-500 leading-[1.85]">
                Мы консультируем проектные, инжиниринговые и подрядные организации, подбираем материалы под задачи объекта, выполняем технические расчёты и обеспечиваем комплексные поставки по всей России.
              </p>
              <p className="text-[14px] text-gray-400 leading-[1.8]">
                Работаем только с проверенными производителями, гарантируем качество продукции и наличие необходимой документации.
              </p>
            </div>

            {/* Логотип вместо фото */}
            <div className="mt-14 flex items-center">
              <img
                src={LOGO_SYMBOL}
                alt="Т1 ИЗОЛЯЦИЯ — логотип"
                className="h-20 sm:h-24 w-auto object-contain opacity-90"
              />
            </div>
          </div>

          {/* ── Правая колонка: компетенции + цифры ── */}
          <div className={`transition-all duration-700 delay-150 ${aboutVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>

            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Ключевые компетенции</p>

            <div className="grid grid-cols-2 gap-3">
              {ABOUT_ADVANTAGES.map((item, i) => (
                <div
                  key={item.text}
                  className="group flex flex-col gap-4 p-5 rounded-2xl bg-white border border-gray-100
                    hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(230,48,18,0.10) 0%, rgba(249,115,22,0.05) 100%)" }}>
                    <Icon name={item.icon as "MapPin"} size={14} className="text-orange-500/70 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-800 text-[13px] leading-snug font-medium tracking-wide transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Разделитель */}
            <div className="mt-10 mb-10 h-px w-full bg-gray-200" />

            {/* Цифры */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 p-5 rounded-2xl bg-white border border-gray-100">
                  <div className="text-3xl font-black tracking-tight"
                    style={{ background: "linear-gradient(90deg, #e63012, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.num}
                  </div>
                  <div className="text-gray-400 text-[11px] uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};