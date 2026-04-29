import Icon from "@/components/ui/icon";
import { IMG_PIPE, STATS, useVisible } from "./data";

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
    <section id="about" className="py-32 lg:py-40 bg-[#f2ede8] overflow-hidden relative" ref={aboutVis.ref}>

      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.10]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(242,237,232,0.94) 0%, rgba(242,237,232,0.82) 50%, rgba(242,237,232,0.90) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Лейбл */}
        <div className={`flex items-center gap-3 mb-14 transition-all duration-700 ${aboutVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="w-8 h-px bg-orange-500/70" />
          <span className="t-label text-orange-600">О нас</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Левая колонка ── */}
          <div className={`transition-all duration-700 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>

            <h2 className="t-h2 text-gray-900">
              Т1{" "}
              <span className="gradient-text">ИЗОЛЯЦИЯ</span>
            </h2>
            <div className="t-underline" />

            <div className="space-y-5">
              <p className="t-lead text-gray-800">
                <span className="font-semibold">ООО «Т1 ИЗОЛЯЦИЯ»</span> — поставщик профессиональных решений в области теплоизоляции, шумоизоляции и защитных покрытий для судостроения, промышленности и инженерных систем.
              </p>
              <p className="t-body text-gray-600">
                Консультируем проектные, инжиниринговые и подрядные организации, подбираем материалы под задачи объекта, выполняем технические расчёты и обеспечиваем комплексные поставки по всей России.
              </p>
              <p className="t-body text-gray-500">
                Работаем только с проверенными производителями — гарантируем качество и наличие необходимой документации.
              </p>
            </div>

            {/* Компетенции */}
            <div className="mt-12">
              <p className="t-label text-gray-400 mb-5">
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

            {/* Видео о компании */}
            <div className="relative overflow-hidden aspect-video min-h-[280px]"
              style={{ borderRadius: 24, boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06)" }}>
              <video
                autoPlay muted loop playsInline preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ willChange: "transform" }}
                src="https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/about-company-harbor-video.mp4"
                disablePictureInPicture
                disableRemotePlayback
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" style={{ borderRadius: 24 }} />
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