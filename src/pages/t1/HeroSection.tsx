import Icon from "@/components/ui/icon";
import { IMG_HERO, GRAD, GRAD_H, useVisible } from "./data";

const HERO_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/hero-video.mp4";

export const HeroSection = () => {
  const heroVis = useVisible(0.1);
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroVis.ref}>
        {/* Видео фон */}
        <div className="absolute inset-0">
          <video
            autoPlay muted loop playsInline preload="auto"
            className="w-full h-full object-cover"
            style={{ willChange: "transform" }}
            poster={IMG_HERO}
            src={HERO_VIDEO}
            disablePictureInPicture
            disableRemotePlayback
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* Тонкая сетка */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        {/* Контент */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className={`flex flex-col items-center text-center transition-all duration-1000 ${heroVis.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Логотип */}
            <div className="mb-8 sm:mb-10">
              <img
                src="https://cdn.poehali.dev/files/53d29d32-74f0-4088-9d14-8c8b870bf4a3.png"
                alt="Т1 Изоляция"
                className="drop-shadow-2xl object-contain rounded-xl"
                style={{ height: "clamp(120px, 18vw, 180px)", width: "auto" }}
              />
            </div>

            {/* H1 */}
            <h1 className="t-h1 text-white mb-5 max-w-4xl">
              Теплоизоляция для инженерных систем и оборудования
            </h1>

            {/* Подзаголовок */}
            <p className="t-lead mb-10 max-w-xl text-[#ffffff]">
              Проектирование, поставка и монтаж теплоизоляции — трубопроводы, оборудование, резервуары и суда. По всей России.
            </p>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
              <a
                href="#request"
                className="btn-primary group text-white px-8 py-4 font-bold uppercase tracking-widest text-[13px] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity duration-300"
                style={{ background: GRAD }}
              >
                Получить расчёт
                <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contacts"
                className="btn-outline border border-white/35 hover:border-white/70 text-white hover:bg-white/8 px-8 py-4 font-bold uppercase tracking-widest text-[13px] text-center backdrop-blur-sm"
              >
                Оставить заявку
              </a>
            </div>

          </div>
        </div>

        {/* Скролл-индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-orange-500" />
        </div>
      </section>

      {/* Marquee */}
      <div className="py-3.5 overflow-hidden" style={{ background: GRAD_H }}>
        <div className="flex gap-12 animate-[marquee_22s_linear_infinite] whitespace-nowrap w-max">
          {Array(3).fill([
            "Промышленная теплоизоляция",
            "Изоляция трубопроводов",
            "Теплоизоляция оборудования",
            "Судовая теплоизоляция",
            "Комплексный монтаж",
            "Работаем по ГОСТ",
            "Гарантия качества",
          ]).flat().map((t, i) => (
            <span key={i} className="text-white/90 text-[11px] font-bold uppercase tracking-[0.18em] flex items-center gap-4">
              {t} <span className="text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};