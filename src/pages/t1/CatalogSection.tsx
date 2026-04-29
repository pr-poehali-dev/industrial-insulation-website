import { IMG_SHIP, useVisible } from "./data";

const SHIPYARD_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/shipyard-video.mp4";
const PGS_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/industrial-pgs-section-video.mp4";

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
      border border-white/[0.05] hover:border-white/[0.12]
      transition-[border-color,box-shadow,background] duration-500
      ${visible ? "animate-fadeInUp" : "opacity-0"}`}
    style={{
      animationDelay: `${delay}ms`,
      background: "linear-gradient(145deg, #141414 0%, #181818 50%, #161210 100%)",
      boxShadow: "0 2px 16px rgba(0,0,0,0.6)",
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.07)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.6)"; }}
  >
    {/* Оранжевая черта слева */}
    <div className="absolute top-4 left-0 bottom-4 w-[2px] rounded-full opacity-35 group-hover:opacity-70 transition-opacity duration-500"
      style={{ background: "linear-gradient(to bottom, #e63012, #f97316, #fbbf24)" }} />

    {/* Фото — десктоп: fade + slide справа почти на всю карточку */}
    <div className="hidden sm:block absolute inset-0 overflow-hidden rounded-[20px]">
      <img
        src={img} alt={name}
        className="absolute inset-0 w-full h-full object-cover
          opacity-0 translate-x-6 scale-[1.04]
          group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
          transition-[opacity,transform] duration-500 ease-out"
      />
      {/* Тёмный overlay поверх фото — слева плотнее, справа прозрачнее */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(to right, rgba(18,17,15,0.92) 0%, rgba(18,17,15,0.7) 40%, rgba(18,17,15,0.35) 100%)" }} />
    </div>

    {/* МОБАЙЛ: горизонтальный лейаут */}
    <div className="flex sm:block">

      {/* Контент */}
      <div className="relative z-10 flex items-center
        pl-6 pr-4 py-5 min-h-[80px]
        sm:pl-7 sm:pr-6 sm:py-7 sm:min-h-[110px]
        flex-1 min-w-0">
        <p className="t-body text-gray-300 group-hover:text-white font-medium transition-colors duration-500">
          {name}
        </p>
      </div>

      {/* Фото — мобайл: всегда справа, тихо */}
      <div className="sm:hidden relative flex-shrink-0 w-20 min-h-[80px] overflow-hidden">
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #141414 0%, transparent 65%)" }} />
      </div>

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
            <span className="t-label text-orange-500">Продукция</span>
            <div className="w-10 h-px bg-orange-500" />
          </div>
          <h2 className="t-h2 text-white">
            Каталог изоляционных материалов
          </h2>
        </div>
      </div>

      {/* Судостроение — на фоне видео во всю ширину */}
      <div className="relative min-h-[400px]">
        {/* Видео фон */}
        <video
          autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
          poster={IMG_SHIP}
          src={SHIPYARD_VIDEO}
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/60" />

        {/* Контент поверх */}
        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="t-h3 text-white">Каталог для судостроения</h3>
            <div className="flex-1 h-px bg-white/20" />
            <span className="t-label text-orange-400/80">{CATALOG_SHIP.length} позиций</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {CATALOG_SHIP.map((item, i) => (
              <CatalogCard key={item.name} name={item.name} img={item.img} delay={i * 60} visible={catalogVis.visible} />
            ))}
          </div>
        </div>
      </div>

      {/* Промышленность и ПГС */}
      <div className="relative min-h-[400px]">
        <video
          autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
          src={PGS_VIDEO}
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/60" />

        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-200 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="t-h3 text-white">Каталог для промышленности и ПГС</h3>
            <div className="flex-1 h-px bg-white/10" />
            <span className="t-label text-orange-500/60">{CATALOG_INDUSTRY.length} позиций</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {CATALOG_INDUSTRY.map((item, i) => (
              <CatalogCard key={item.name} name={item.name} img={item.img} delay={i * 60} visible={catalogVis.visible} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};