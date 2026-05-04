import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { LOGO_SYMBOL, NAV_LINKS, GRAD } from "./data";

const Logo = ({ size = 44, className = "" }: { size?: number; className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <img
      src={LOGO_SYMBOL}
      alt=""
      aria-hidden
      style={{ height: size, width: "auto" }}
      className="object-contain"
    />
    <div className="flex flex-col leading-none">
      <span
        className="font-black text-white tracking-wider uppercase"
        style={{ fontFamily: "'Oswald', sans-serif", fontSize: size * 0.45, letterSpacing: "0.08em" }}
      >
        Т1
      </span>
      <span
        className="font-bold text-white tracking-widest uppercase"
        style={{ fontFamily: "'Oswald', sans-serif", fontSize: size * 0.28, letterSpacing: "0.12em", color: "#d1d5db" }}
      >
        ИЗОЛЯЦИЯ
      </span>
    </div>
  </div>
);

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/98 shadow-2xl shadow-black/40" : "bg-black/80 backdrop-blur-md"} border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Logo size={40} className="group-hover:opacity-90 transition-opacity duration-300" />
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
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Icon name="MapPin" size={12} className="text-orange-500/60 flex-shrink-0" />
              Санкт-Петербург, Решетникова ул., 13А
            </div>
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