import Icon from "@/components/ui/icon";
import { IMG_HERO, GRAD, GRAD_H, useVisible } from "./data";

const HERO_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/hero-video.mp4";

export const HeroSection = () => {
  const heroVis = useVisible(0.1);
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroVis.ref}>
        <div className="absolute inset-0">
          <video
            autoPlay muted loop playsInline preload="auto"
            className="w-full h-full object-cover"
            poster={IMG_HERO}
            src={HERO_VIDEO}
          />
          <div className="absolute inset-0 bg-black/45" />
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

            <h1 className="t-h1 text-white mb-6 text-center max-w-4xl">
              Теплоизоляция для инженерных систем и оборудования
            </h1>
            <p className="t-lead text-white mb-10 max-w-2xl text-center">
              Проектирование, поставка и <strong className="text-white font-semibold">монтаж теплоизоляции</strong> — трубопроводы, оборудование, резервуары и суда. По всей России.
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