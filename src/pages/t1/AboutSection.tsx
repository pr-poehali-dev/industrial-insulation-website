import Icon from "@/components/ui/icon";
import { IMG_BOILER, IMG_PIPE, STATS, useVisible } from "./data";

const ABOUT_ADVANTAGES = [
  { icon: "BadgeCheck",  text: "Официальный поставщик производителей" },
  { icon: "MapPin",      text: "Работаем по всей России" },
  { icon: "FileText",    text: "Сертификаты и документация" },
  { icon: "Settings",    text: "Подбор решений под объект" },
  { icon: "Lightbulb",   text: "Техническая экспертиза" },
  { icon: "ShieldCheck", text: "Высокое качество материалов" },
];

export const AboutSection = () => {
  const aboutVis = useVisible(0.1);
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0c0c0c] overflow-hidden relative" ref={aboutVis.ref}>

      {/* Фоновая текстура */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.03]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0c0c0c 0%, transparent 30%, transparent 70%, #0c0c0c 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Лейбл */}
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${aboutVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="w-8 h-px bg-orange-500/60" />
          <span className="text-orange-500/80 text-xs font-bold uppercase tracking-[0.25em]">О компании</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Левая колонка: текст ── */}
          <div className={`transition-all duration-700 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-8">
              О компании<br />
              <span style={{ background: "linear-gradient(90deg, #e63012, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Т1 ИЗОЛЯЦИЯ
              </span>
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                <span className="text-gray-200 font-medium">ООО «Т1 ИЗОЛЯЦИЯ»</span> — поставщик профессиональных решений в области теплоизоляции, шумоизоляции и защитных покрытий для судостроения, промышленности и гражданского строительства.
              </p>
              <p>
                С 2022 года компания обеспечивает предприятия, подрядчиков, проектные организации и инжиниринговые компании современными системными материалами для инженерных сетей, оборудования и технических объектов.
              </p>
              <p>
                Мы работаем по всей территории Российской Федерации и предлагаем только проверенные решения от ведущих российских производителей.
              </p>
            </div>

            {/* Фото под текстом */}
            <div className="mt-10 relative overflow-hidden rounded-2xl">
              <img
                src={IMG_BOILER}
                alt="Т1 ИЗОЛЯЦИЯ — теплоизоляция объектов"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #f97316, transparent)" }} />
            </div>
          </div>

          {/* ── Правая колонка: преимущества ── */}
          <div className={`transition-all duration-700 delay-150 ${aboutVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>

            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">Почему выбирают нас</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_ADVANTAGES.map((item, i) => (
                <div
                  key={item.text}
                  className="group flex items-start gap-4 p-5 rounded-[16px] border border-white/[0.05] hover:border-white/[0.10]
                    transition-[border-color,background] duration-300"
                  style={{
                    background: "linear-gradient(145deg, #141414 0%, #181818 100%)",
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, rgba(230,48,18,0.15) 0%, rgba(249,115,22,0.08) 100%)" }}>
                    <Icon name={item.icon as "BadgeCheck"} size={15} className="text-orange-400" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white text-sm leading-snug font-medium transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Разделитель */}
            <div className="mt-8 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

            {/* Цифры */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl border border-white/[0.04]"
                  style={{ background: "linear-gradient(145deg, #111 0%, #161210 100%)" }}>
                  <div className="text-2xl sm:text-3xl font-black mb-1"
                    style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.num}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
