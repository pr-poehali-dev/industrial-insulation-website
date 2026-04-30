import Icon from "@/components/ui/icon";
import { IMG_PIPE, STATS, useVisible } from "./data";

const ABOUT_ADVANTAGES = [
  { icon: "SlidersHorizontal", text: "Подбор материалов под объект" },
  { icon: "Calculator",        text: "Технические расчёты" },
  { icon: "Factory",           text: "Прямые поставки от производителей" },
  { icon: "BadgeCheck",        text: "Сертификаты и полный комплект документации" },
];

const EXTRA_STATS = [
  { icon: "Truck",      num: "Доставка", label: "всеми видами транспорта" },
  { icon: "TrendingUp", num: "87%",      label: "побед в тендерах" },
];

export const AboutSection = () => {
  const aboutVis = useVisible(0.1);
  return (
    <section id="about" className="py-32 lg:py-44 overflow-hidden relative" ref={aboutVis.ref}>

      {/* Фоновое видео */}
      <video
        autoPlay muted loop playsInline preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: "transform" }}
        src="https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/about-company-harbor-video.mp4"
        disablePictureInPicture
        disableRemotePlayback
      />
      {/* Затемнение поверх видео */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Фирменная полоска снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #e63012, #f97316, #fbbf24)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Лейбл */}
        <div className={`flex items-center gap-3 mb-16 transition-all duration-700 ${aboutVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="w-10 h-px bg-orange-500/60" />
          <span className="t-label text-orange-400">О нас</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

          {/* ── Левая колонка: текст + преимущества ── */}
          <div className={`transition-all duration-700 ${aboutVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>

            <h2 className="t-h2 text-white">
              Т1{" "}
              <span className="gradient-text">ИЗОЛЯЦИЯ</span>
            </h2>
            <div className="t-underline" />

            {/* Текстовые блоки */}
            <div className="space-y-6">
              <p className="t-lead text-white/90 leading-[1.9]">Профессиональный поставщик решений в области теплоизоляции, шумоизоляции и защитных покрытий для судостроения, промышленности и инженерных систем.</p>
              <p className="t-body text-white/70 leading-[1.85]">
                Консультируем проектные, инжиниринговые и подрядные организации, подбираем материалы под задачи объекта, выполняем технические расчёты и обеспечиваем комплексные поставки по всей России.
              </p>
              <p className="t-body text-white/60 leading-[1.8]">
                Работаем только с проверенными производителями — гарантируем качество и наличие полной сопроводительной документации.
              </p>
            </div>

            {/* Разделитель */}
            <div className="mt-12 mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/20" />
              <span className="t-label text-white/40">Почему выбирают нас</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>

            {/* Плитки преимуществ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ABOUT_ADVANTAGES.map((item, i) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/15 hover:border-orange-400/50 hover:bg-white/15 hover:shadow-md hover:-translate-y-px transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 50}ms`, backdropFilter: "blur(8px)" }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(230,48,18,0.3) 0%, rgba(249,115,22,0.2) 100%)" }}
                  >
                    <Icon name={item.icon as "MapPin"} size={14} className="text-orange-400" />
                  </div>
                  <p className="text-white/70 group-hover:text-white text-[13px] leading-snug font-medium transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* ── Правая колонка: цифры ── */}
          <div className={`transition-all duration-700 delay-200 ${aboutVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="group flex flex-col gap-2.5 p-6 rounded-2xl bg-white/10 border border-white/15 hover:border-orange-400/50 hover:bg-white/15 hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div
                    className="text-4xl font-black tracking-tight leading-none"
                    style={{ fontFamily: "'Oswald', sans-serif", background: "linear-gradient(90deg, #e63012, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {s.num}
                  </div>
                  <div className="t-label text-white/50">{s.label}</div>
                </div>
              ))}

              {EXTRA_STATS.map((s) => (
                <div
                  key={s.num}
                  className="group flex flex-col gap-2.5 p-6 rounded-2xl bg-white/10 border border-white/15 hover:border-orange-400/50 hover:bg-white/15 hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(230,48,18,0.3) 0%, rgba(249,115,22,0.2) 100%)" }}>
                      <Icon name={s.icon as "Truck"} size={14} className="text-orange-400" />
                    </div>
                    <div
                      className="text-3xl font-black tracking-tight leading-none"
                      style={{ fontFamily: "'Oswald', sans-serif", background: "linear-gradient(90deg, #e63012, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {s.num}
                    </div>
                  </div>
                  <div className="t-label text-white/50">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};