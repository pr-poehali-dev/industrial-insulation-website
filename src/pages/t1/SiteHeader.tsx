import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { LOGO_SYMBOL, NAV_LINKS, GRAD } from "./data";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img
      src="https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/f2c7dc5a-0b3d-4793-ac51-fe07c6fad3cc.png"
      alt=""
      aria-hidden
      className="object-contain flex-shrink-0 h-14 lg:h-[72px] w-auto"
    />
    <span
      className="text-white whitespace-nowrap leading-none tracking-wide text-lg lg:text-xl"
      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.06em" }}
    >
      Т1 ИЗОЛЯЦИЯ
    </span>
  </div>
);

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/98 shadow-2xl shadow-black/40" : "bg-black/80 backdrop-blur-md"} border-b border-white/5 ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center">
            <Logo className="hover:opacity-90 transition-opacity duration-300" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                className="relative text-[11px] text-gray-400 hover:text-white transition-colors duration-300 font-semibold uppercase tracking-widest group whitespace-nowrap">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="flex flex-col gap-1 border-r border-white/10 pr-4">
              <a href="tel:+78126426742" className="flex items-center gap-1.5 group">
                <Icon name="Phone" size={13} className="text-orange-500/70 group-hover:text-orange-400 flex-shrink-0 transition-colors duration-300" />
                <div className="flex flex-col leading-none">
                  <span className=""></span>
                  <span className="text-[11px] text-gray-400 group-hover:text-orange-400 font-medium transition-colors duration-300 whitespace-nowrap">+7 812 642 67 42</span>
                </div>
              </a>
              <a href="mailto:teplofabrika@mail.ru" className="flex items-center gap-1.5 group">
                <Icon name="Mail" size={13} className="text-orange-500/70 group-hover:text-orange-400 flex-shrink-0 transition-colors duration-300" />
                <span className="text-[11px] text-gray-400 group-hover:text-orange-400 font-medium transition-colors duration-300 leading-none whitespace-nowrap">teplofabrika@mail.ru</span>
              </a>
            </div>
            <a href="#contacts"
              className="btn-primary text-white px-5 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:opacity-90 whitespace-nowrap"
              style={{ background: GRAD }}>
              Связаться с нами
            </a>
          </div>

          {/* Планшет (md..lg) */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <div className="flex flex-col gap-0.5">
              <a href="tel:+78126426742" className="flex items-center gap-1.5 group">
                <Icon name="Phone" size={14} className="text-orange-500" />
                <span className="text-gray-400 text-xs group-hover:text-orange-400 transition-colors duration-300">+7 812 642 67 42</span>
              </a>
              <a href="mailto:teplofabrika@mail.ru" className="flex items-center gap-1.5 group">
                <Icon name="Mail" size={14} className="text-orange-500" />
                <span className="text-gray-400 text-xs group-hover:text-orange-400 transition-colors duration-300">teplofabrika@mail.ru</span>
              </a>
            </div>
            <a href="#contacts"
              className="btn-primary text-white px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:opacity-90"
              style={{ background: GRAD }}>
              Связаться
            </a>
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-white/5 px-4 py-4 animate-fadeInUp">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-gray-300 hover:text-orange-400 transition-colors font-semibold uppercase text-xs tracking-widest border-b border-white/5 last:border-0">
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
            <a href="https://yandex.ru/maps/?text=Санкт-Петербург%2C+ул.+Решетникова%2C+13А" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 text-xs hover:text-orange-400 transition-colors">
              <Icon name="MapPin" size={12} className="text-orange-500/60 flex-shrink-0" />
              Санкт-Петербург, Решетникова ул., 13А
            </a>
            <a href="tel:+78126426742" className="flex items-center gap-2 text-gray-400 text-xs">
              <Icon name="Phone" size={12} className="text-orange-500/60 flex-shrink-0" />
              +7 812 642 67 42
            </a>
            <a href="mailto:teplofabrika@mail.ru" className="flex items-center gap-2 text-gray-400 text-xs">
              <Icon name="Mail" size={12} className="text-orange-500/60 flex-shrink-0" />
              teplofabrika@mail.ru
            </a>
          </div>
          <a href="#contacts" className="block mt-4 text-white text-center py-3 font-black text-xs uppercase tracking-widest"
            style={{ background: GRAD }}>
            Связаться с нами
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;