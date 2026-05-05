import Icon from "@/components/ui/icon";
import { IMG_BOILER, IMG_PIPE, IMG_SHIP, IMG_HERO, GRAD, INDUSTRIES, CERTIFICATES, PROCESS, useVisible } from "./data";

/* ─── Industries ─────────────────────────────────────────────── */
export const IndustriesSection = () => {
  const indVis = useVisible(0.1);
  return (
    <section id="industries" className="section-pad bg-gray-950 overflow-hidden noise-bg relative" ref={indVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_SHIP} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-14 transition-all duration-700 ${indVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Отрасли применения</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-orange-400">
            Работаем в каждой<br />промышленной отрасли
          </h2>
          <div className="t-underline mx-auto justify-center" />
          <p className="t-body max-w-sm mx-auto mt-4 !text-white">Опыт поставок на объекты — от районной котельной до нефтеперерабатывающих заводов  и судостроительных верфей</p>
        </div>

        {/* Сетка отраслей */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.title}
              className={`group relative flex flex-col items-center text-center p-6 sm:p-8 overflow-hidden cursor-default bg-gray-950
                ${indVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}
              style={{ transition: "transform 0.35s ease, box-shadow 0.35s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLDivElement).style.zIndex = "10"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; (e.currentTarget as HTMLDivElement).style.zIndex = ""; }}
            >
              {/* Фото — появляется при hover */}
              <img
                src={ind.img}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-[1.06] group-hover:scale-100 transition-[opacity,transform] duration-[380ms] ease-out"
              />
              {/* Overlay для читаемости текста */}
              <div className="absolute inset-0 bg-gray-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-[380ms]" />
              {/* Контент */}
              <div className="relative z-10 flex flex-col items-center">
                <Icon name={ind.icon} size={26} className="text-gray-500 group-hover:text-orange-400 transition-colors duration-300 mb-3" />
                <h3 className="text-gray-300 group-hover:text-white font-semibold text-[13px] transition-colors leading-snug mb-1">{ind.title}</h3>
                <p className="text-gray-600 group-hover:text-orange-100/80 text-[11px] transition-colors leading-snug">{ind.desc}</p>
              </div>
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
    <section id="certificates" className="section-pad overflow-hidden relative bg-[#0a0a0a]" ref={certVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/97f3a39f-8642-429a-b959-c1bb797f681e.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/85 to-[#0a0a0a]/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-16 transition-all duration-700 ${certVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Документация</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-orange-400">
            Сертификаты, лицензии<br />и соответствие стандартам
          </h2>
          <div className="t-underline mx-auto justify-center" />
          <p className="t-body text-gray-400 max-w-lg mx-auto">Полный комплект документов к каждому объекту</p>
        </div>

        {/* Карточки */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <div
              key={cert.title}
              className={`group relative overflow-hidden border border-white/10 rounded-2xl p-8 hover:border-orange-400/40 hover:shadow-2xl transition-all duration-400 card-hover bg-white/[0.04]
                ${certVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}
              style={{ backdropFilter: "blur(8px)" }}
            >
              {/* Линия сверху */}
              <div className="absolute top-0 left-0 w-0 h-[3px] rounded-full group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #e63012, #f97316)" }} />

              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
                  <Icon name="Award" size={18} className="text-orange-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="t-label text-gray-400 group-hover:text-orange-400 transition-colors bg-white/[0.05] group-hover:bg-orange-500/15 px-3 py-1.5 rounded-lg">
                  {cert.category}
                </span>
              </div>

              <h3 className="font-bold text-[17px] text-white mb-2 leading-snug" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}>
                {cert.title}
              </h3>
              <p className="t-body text-gray-400 mb-5 text-[14px]">{cert.desc}</p>

              <div className="flex items-center gap-2 text-green-400">
                <Icon name="CheckCircle2" size={14} />
                <span className="text-[12px] font-semibold">Действующий документ</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA полоса */}
        <div className={`mt-10 rounded-2xl overflow-hidden ${certVis.visible ? "animate-fadeInUp delay-700" : "opacity-0"}`}>
          <div className="bg-gray-950 px-8 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="t-h3 text-white mb-1">Нужны копии документов?</p>
              <p className="t-body text-gray-400 text-[14px]">Направим полный пакет по запросу в течение 1 рабочего дня</p>
            </div>
            <a
              href="#contacts"
              className="btn-primary text-white px-8 py-3.5 font-bold uppercase tracking-widest text-[12px] hover:opacity-90 transition-opacity whitespace-nowrap flex items-center gap-2.5 group flex-shrink-0"
              style={{ background: GRAD }}
            >
              Запросить документы
              <Icon name="ArrowRight" size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ─── Process ────────────────────────────────────────────────── */
export const ProcessSection = () => {
  const procVis = useVisible(0.1);
  return (
    <section id="process" className="section-pad bg-[#0a0a0a] overflow-hidden noise-bg relative" ref={procVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-16 transition-all duration-700 ${procVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Как мы работаем</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-orange-400">
            5 этапов — от заявки до гарантии
          </h2>
          <div className="t-underline mx-auto justify-center" />
        </div>

        {/* Шаги */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {PROCESS.map((step, i) => (
            <div
              key={step.num}
              className={`group relative bg-[#0f0f0f] p-8 hover:bg-[#141414] transition-all duration-300
                ${procVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}
            >
              {/* Линия сверху на hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(90deg, #e63012, #f97316)" }} />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl border border-orange-500/25 group-hover:border-orange-500/60 flex items-center justify-center transition-all duration-300">
                  <span className="text-orange-500 font-black text-[13px]" style={{ fontFamily: "'Oswald', sans-serif" }}>{step.num}</span>
                </div>
                <Icon name={step.icon} size={15} className="text-gray-700 group-hover:text-orange-400 transition-colors duration-300" />
              </div>

              <h3 className="t-h3 text-white mb-3">{step.title}</h3>
              <p className="t-body text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-[14px]">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};