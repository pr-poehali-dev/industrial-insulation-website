import Icon from "@/components/ui/icon";
import { IMG_BOILER, IMG_PIPE, STATS, useVisible } from "./data";

const ABOUT_ADVANTAGES = [
  { icon: "MapPin",        text: "Поставки по всей России" },
  { icon: "Settings2",     text: "Подбор под объект" },
  { icon: "Calculator",    text: "Технические расчёты" },
  { icon: "PackageCheck",  text: "Официальные поставки" },
  { icon: "BadgeCheck",    text: "Сертификаты качества" },
  { icon: "Anchor",        text: "Судостроение и промышленность" },
];

const Underline = () => (
  <div className="mt-4 mb-10 flex items-center gap-2">
    <div className="h-[3px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #e63012, #f97316)" }} />
    <div className="h-[3px] w-4 rounded-full bg-orange-300/40" />
    <div className="h-[3px] w-2 rounded-full bg-orange-200/20" />
  </div>
);

export const AboutSection = () => {
  const aboutVis = useVisible(0.1);
  return (
    <section id="about" className="py-32 lg:py-40 bg-[#f2ede8] overflow-hidden relative" ref={aboutVis.ref}>

      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.10]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(242,237,232,0.94) 0%, rgba(242,237,232,0.82) 50%, rgba(242,237,232,0.90) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Лейбл */}
        <div className={`flex items-center gap-3 mb-14 transition-all duration-700 ${aboutVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="w-8 h-px bg-orange-500/70" />
          <span className="text-orange-600 text-[11px] font-bold uppercase tracking-[0.3em]">О компании</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Левая колонка ── */}
          <div className={`transition-all duration-700 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>

            <h2
              className="text-5xl sm:text-6xl lg:text-[3.75rem] font-black text-gray-900 leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Т1{" "}
              <span style={{ background: "linear-gradient(90deg, #e63012, #f97316, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                ИЗОЛЯЦИЯ
              </span>
            </h2>

            <Underline />

            <div className="space-y-5">
              <p className="text-[17px] text-gray-800 leading-[1.8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="font-semibold">ООО «Т1 ИЗОЛЯЦИЯ»</span> — поставщик профессиональных решений в области теплоизоляции, шумоизоляции и защитных покрытий для судостроения, промышленности и инженерных систем.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.85]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Консультируем проектные, инжиниринговые и подрядные организации, подбираем материалы под задачи объекта, выполняем технические расчёты и обеспечиваем комплексные поставки по всей России.
              </p>
              <p className="text-[15px] text-gray-500 leading-[1.8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Работаем только с проверенными производителями — гарантируем качество и наличие необходимой документации.
              </p>
            </div>

            {/* Компетенции */}
            <div className="mt-12">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">
                Ключевые компетенции
              </p>
              <div className="grid grid-cols-3 gap-3">
                {ABOUT_ADVANTAGES.map((item, i) => (
                  <div
                    key={item.text}
                    className="group flex flex-col gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(230,48,18,0.10) 0%, rgba(249,115,22,0.05) 100%)" }}>
                      <Icon name={item.icon as "MapPin"} size={13} className="text-orange-500/70 group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    <p className="text-gray-500 group-hover:text-gray-800 text-[12px] leading-snug font-medium tracking-wide transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Правая колонка ── */}
          <div className={`flex flex-col gap-4 transition-all duration-700 delay-150 ${aboutVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>

            {/* Видео-заглушка */}
            <div className="relative flex-1 rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 aspect-video flex items-center justify-center min-h-[280px]">
              <img src={IMG_BOILER} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center px-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/30 bg-white/10 backdrop-blur-sm">
                  <Icon name="Play" size={22} className="text-white/80 ml-1" />
                </div>
                <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] font-semibold">Видео о компании</p>
              </div>
            </div>

            {/* Цифры */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5 p-5 rounded-2xl bg-white border border-gray-100">
                  <div
                    className="text-3xl font-black tracking-tight leading-none"
                    style={{ fontFamily: "'Oswald', sans-serif", background: "linear-gradient(90deg, #e63012, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-gray-400 text-[11px] uppercase tracking-widest leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
