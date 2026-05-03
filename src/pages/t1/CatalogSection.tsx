
import { IMG_SHIP, IMG_BOILER, useVisible } from "./data";

const SHIPYARD_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/shipyard-video.mp4";
const PGS_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/industrial-pgs-section-video.mp4";

const IMG_TUBES = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/3ddf0ad3-7940-400c-a688-3e907253b23d.jpg";
const IMG_ROLLS = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/51e58607-a24b-44da-948e-737b95e9c9e0.jpg";
const IMG_GLUE  = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/a8546888-733b-4725-826e-b8ddc828706d.jpg";

const CATALOG_SHIP: { name: string; sub: string; img: string }[] = [
  { name: "Трубная изоляция",          sub: "Вспененный каучук для трубопроводов",    img: IMG_TUBES },
  { name: "Рулонная изоляция",         sub: "Вспененный каучук для поверхностей",     img: IMG_ROLLS },
  { name: "Монтажные материалы",       sub: "Ленты, клеи, очистители",               img: IMG_GLUE },
  { name: "Защитные покрытия",         sub: "Металл и полимерные решения",            img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/d0ed56cb-322d-46c3-9571-f0e5a4f43703.jpg" },
  { name: "Термочехлы",                sub: "Для оборудования и трубопроводов",       img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/6a3cb15e-2c7a40d3-a075-c99e7ed457f2.jpg" },
  { name: "Антиконденсатные покрытия", sub: "Тепло- и влагозащита поверхностей",     img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/62c10ffd-18cb-4f61-a83e-97bfa3120d57.jpg" },
];

const CATALOG_INDUSTRY: { name: string; sub: string; img: string }[] = [
  { name: "Трубная изоляция",          sub: "Вспененный каучук для трубопроводов",      img: IMG_TUBES },
  { name: "Рулонная изоляция",         sub: "Вспененный каучук для поверхностей",       img: IMG_ROLLS },
  { name: "Монтажные материалы",       sub: "Ленты, клеи, очистители",                 img: IMG_GLUE },
  { name: "Защитные покрытия",         sub: "Металл и полимерные решения",              img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/d0ed56cb-322d-46c3-9571-f0e5a4f43703.jpg" },
  { name: "Термочехлы",                sub: "Для оборудования и трубопроводов",         img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/03841964-0c63-4461-be67-e7e5fe5dd7f1.jpg" },
  { name: "Каменная вата",             sub: "Теплоизоляция для инженерных систем",      img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/62c10ffd-18cb-4f61-a83e-97bfa3120d57.jpg" },
  { name: "Шумоизоляция",              sub: "Снижение шума оборудования и систем",      img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/ea11e02a-fb71-4dc6-9b16-04ad25dd97fa.jpg" },
  { name: "Опоры и подвесы",           sub: "Крепление трубопроводов и систем",         img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/6a3cb15e-2c7a40d3-a075-c99e7ed457f2.jpg" },
];

const CatalogCard = ({ name, sub, img, delay, visible }: {
  name: string; sub: string; img: string; delay: number; visible: boolean;
}) => (
  <div
    className={`catalog-card group relative overflow-hidden rounded-[18px] cursor-default select-none
      ${visible ? "animate-fadeInUp" : "opacity-0"}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Фоновое фото — всегда рендерится, плавно появляется */}
    <div className="absolute inset-0">
      <img
        src={img}
        alt=""
        aria-hidden
        className="w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out
          opacity-20 scale-[1.06] group-hover:opacity-100 group-hover:scale-100"
        loading="lazy"
      />
      {/* Базовый тёмный фон под фото */}
      <div className="absolute inset-0 bg-[#131210]" style={{ mixBlendMode: "multiply" }} />
      {/* Overlay: на hover — затемняет левую часть для читаемости текста */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: "linear-gradient(100deg, rgba(12,11,10,0.96) 0%, rgba(12,11,10,0.82) 45%, rgba(12,11,10,0.45) 100%)",
          opacity: 1,
        }}
      />
      {/* Дополнительный overlay исчезает при hover, открывая фото */}
      <div
        className="absolute inset-0 bg-[#131210]/60 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
      />
    </div>

    {/* Фирменная полоска слева */}
    <div
      className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full transition-opacity duration-500 opacity-40 group-hover:opacity-100"
      style={{ background: "linear-gradient(to bottom, #e63012, #f97316, #fbbf24)" }}
    />

    {/* Контент */}
    <div className="relative z-10 flex items-center gap-0 h-full">
      {/* Текст */}
      <div className="flex-1 px-7 py-6">
        <p className="text-white font-semibold text-[14px] leading-snug tracking-wide">
          {name}
        </p>
        <p className="text-gray-400 group-hover:text-gray-300 text-[12px] leading-snug mt-1 transition-colors duration-500">
          {sub}
        </p>
      </div>

      {/* Мобайл: превью справа */}
      <div className="sm:hidden flex-shrink-0 w-16 h-full relative overflow-hidden">
        <img src={img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #131210 0%, transparent 70%)" }} />
      </div>
    </div>
  </div>
);

export const CatalogSection = () => {
  const catalogVis = useVisible(0.1);

  return (
    <section id="catalog" className="bg-[#f4f0eb] overflow-hidden relative" ref={catalogVis.ref}>

      {/* Заголовок раздела */}
      <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-600">Продукция</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="text-orange-500" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
            Каталог изоляционных материалов
          </h2>
          <div className="t-underline mx-auto justify-center" />
        </div>
      </div>

      {/* ── Судостроение ── */}
      <div className="relative min-h-[480px]">
        <video
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
          poster={IMG_SHIP}
          src={SHIPYARD_VIDEO}
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-transparent to-[#0a0a0a]/50" />

        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Подзаголовок */}
          <div className={`flex items-center gap-5 mb-8 transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="t-h3 text-white whitespace-nowrap">Для судостроения</h3>
            <div className="flex-1 h-px bg-white/15" />
            <span className="t-label text-orange-400/70 whitespace-nowrap">{CATALOG_SHIP.length} позиций</span>
          </div>
          {/* Сетка — фиксированная высота карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CATALOG_SHIP.map((item, i) => (
              <div key={item.name} className="h-[100px] sm:h-[110px]">
                <CatalogCard name={item.name} sub={item.sub} img={item.img} delay={i * 55} visible={catalogVis.visible} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Промежуток между каталогами */}
      <div className="h-12 bg-[#f4f0eb]" />

      {/* ── Промышленность и ПГС ── */}
      <div className="relative min-h-[480px]">
        <video
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
          poster={IMG_BOILER}
          src={PGS_VIDEO}
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]/65" />

        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-5 mb-8 transition-all duration-700 delay-200 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="t-h3 text-white whitespace-nowrap">Для промышленности и ПГС</h3>
            <div className="flex-1 h-px bg-white/10" />
            <span className="t-label text-orange-500/55 whitespace-nowrap">{CATALOG_INDUSTRY.length} позиций</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {CATALOG_INDUSTRY.map((item, i) => (
              <div key={item.name} className="h-[100px] sm:h-[110px]">
                <CatalogCard name={item.name} sub={item.sub} img={item.img} delay={i * 55} visible={catalogVis.visible} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 bg-[#f4f0eb]" />

    </section>
  );
};