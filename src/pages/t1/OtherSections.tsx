import Icon from "@/components/ui/icon";
import { IMG_BOILER, IMG_PIPE, IMG_SHIP, GRAD, INDUSTRIES, CERTIFICATES, PROCESS, useVisible } from "./data";

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
            <span className="t-label text-orange-500">Отрасли</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="t-h2 text-white">
                Работаем в каждой<br />промышленной отрасли
              </h2>
              <div className="t-underline" />
            </div>
            <p className="t-body text-gray-400 max-w-xs">
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
              <h3 className="t-body text-gray-300 group-hover:text-white font-semibold transition-colors leading-snug mb-1">{ind.title}</h3>
              <p className="t-body text-gray-600 group-hover:text-orange-100 text-xs transition-colors">{ind.desc}</p>
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
            <span className="t-label text-orange-500">Документы</span>
            <div className="w-10 h-px bg-orange-500" />
          </div>
          <h2 className="t-h2 text-gray-900">
            Сертификаты, лицензии<br />и соответствие стандартам
          </h2>
          <div className="t-underline mx-auto justify-center" />
          <p className="t-body text-gray-500 max-w-lg mx-auto">
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
              <h3 className="t-h3 text-gray-900 mb-2">{cert.title}</h3>
              <p className="t-body text-gray-500 mb-4">{cert.desc}</p>
              <div className="flex items-center gap-2 text-green-600">
                <Icon name="CheckCircle2" size={15} />
                <span className="text-xs font-bold">Действующий документ</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-12 bg-gray-950 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 ${certVis.visible ? "animate-fadeInUp delay-700" : "opacity-0"}`}>
          <div>
            <p className="t-h3 text-white">Нужны копии документов?</p>
            <p className="t-body text-gray-400 mt-1">Направим полный пакет по запросу в течение 1 рабочего дня</p>
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
            <span className="t-label text-orange-500">Как мы работаем</span>
            <div className="w-10 h-px bg-orange-500" />
          </div>
          <h2 className="t-h2 text-white">
            5 этапов — от заявки до гарантии
          </h2>
          <div className="t-underline mx-auto justify-center" />
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
              <h3 className="t-h3 text-white mb-3">{step.title}</h3>
              <p className="t-body text-gray-500 group-hover:text-gray-400 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};