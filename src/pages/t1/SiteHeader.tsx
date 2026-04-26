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
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                className="relative text-xs text-gray-400 hover:text-white transition-colors font-semibold uppercase tracking-widest group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+78000000000" className="text-white font-bold text-sm hover:text-orange-400 transition-colors">
              8 800 000 00 00
            </a>
            <a href="#contacts"
              className="btn-primary text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:opacity-90"
              style={{ background: GRAD }}>
              Получить расчёт
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
          <a href="tel:+78000000000" className="block mt-5 text-white font-bold text-lg">8 800 000 00 00</a>
          <a href="#contacts" className="block mt-3 text-white text-center py-3 font-black text-xs uppercase tracking-widest"
            style={{ background: GRAD }}>
            Получить расчёт
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;