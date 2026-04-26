import { useState } from "react";
import Icon from "@/components/ui/icon";
import { LOGO_IMG, IMG_SHIP, GRAD, NAV_LINKS, SERVICES, CONTACTS_INFO, useVisible } from "./data";

const Logo = ({ size = 44, className = "" }: { size?: number; className?: string }) => (
  <img src={LOGO_IMG} alt="Т1 ИЗОЛЯЦИЯ" height={size} style={{ height: size }} className={`w-auto object-contain ${className}`} />
);

/* ─── CTA / Request section ──────────────────────────────────── */
export const CtaSection = () => {
  const ctaVis = useVisible(0.1);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="request" className="overflow-hidden" ref={ctaVis.ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2">

          {/* Left dark */}
          <div className={`relative bg-gray-950 p-12 lg:p-16 overflow-hidden ${ctaVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>
            <div className="absolute left-0 top-0 w-1 h-full bg-orange-500" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Коммерческое предложение</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6 tracking-tight">
                Нужен расчёт стоимости<br />теплоизоляции?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                Подготовим предложение под ваш объект в короткий срок. Бесплатно, без обязательств.
              </p>
              <ul className="space-y-4">
                {[
                  "Бесплатный выезд специалиста на объект",
                  "Расчёт за 1–2 рабочих дня",
                  "Фиксированная стоимость в договоре",
                  "Гарантийный паспорт на работы",
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                <img src={IMG_SHIP} alt="Судовая теплоизоляция" className="w-20 h-14 object-cover opacity-70" />
                <p className="text-gray-500 text-xs leading-relaxed">
                  Судовая теплоизоляция, НПЗ, энергетика —<br />
                  <span className="text-gray-300">опыт на объектах любой отрасли</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className={`bg-white p-12 lg:p-16 border border-gray-100 ${ctaVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>
            <h3 className="text-2xl font-black text-gray-900 mb-1">Получить коммерческое предложение</h3>
            <p className="text-gray-400 text-sm mb-8">Ответим в течение 1 рабочего дня</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: GRAD }}>
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h4 className="text-gray-900 font-black text-xl mb-2">Заявка отправлена!</h4>
                <p className="text-gray-400 text-sm">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Ваше имя *</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="w-full border border-gray-200 focus:border-orange-500 text-gray-900 placeholder-gray-300 px-4 py-3.5 outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Телефон *</label>
                  <input type="tel" required value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 focus:border-orange-500 text-gray-900 placeholder-gray-300 px-4 py-3.5 outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Комментарий</label>
                  <textarea value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите объект, тип изоляции, объём работ..."
                    rows={3}
                    className="w-full border border-gray-200 focus:border-orange-500 text-gray-900 placeholder-gray-300 px-4 py-3.5 outline-none transition-colors text-sm resize-none" />
                </div>
                <button type="submit"
                  className="btn-primary w-full text-white py-4 font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group hover:opacity-90"
                  style={{ background: GRAD }}>
                  Получить коммерческое предложение
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-gray-300 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#privacy" className="underline hover:text-orange-500 transition-colors">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Contacts section ───────────────────────────────────────── */
export const ContactsSection = () => {
  const contVis = useVisible(0.1);
  const [submitted2, setSubmitted2] = useState(false);
  const [form2Data, setForm2Data] = useState({ name: "", phone: "", message: "" });

  return (
    <section id="contacts" className="py-28 bg-white overflow-hidden" ref={contVis.ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${contVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Контакты</span>
            <div className="w-10 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Как с нами связаться
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CONTACTS_INFO.map((item, i) => (
            <a key={item.label} href={item.href}
              className={`group border border-gray-100 p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 card-hover flex flex-col items-center text-center
                ${contVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}>
              <div className="w-14 h-14 bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center mb-5 transition-all duration-300">
                <Icon name={item.icon} size={22} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">{item.label}</div>
              <div className="font-black text-gray-900 mb-1">{item.value}</div>
              <div className="text-gray-400 text-xs">{item.sub}</div>
            </a>
          ))}
        </div>

        <div className={`max-w-2xl mx-auto bg-gray-950 p-10 lg:p-14 ${contVis.visible ? "animate-fadeInUp delay-500" : "opacity-0"}`}>
          <h3 className="text-white font-black text-2xl mb-1 text-center">Оставьте заявку</h3>
          <p className="text-gray-400 text-sm mb-8 text-center">Свяжемся в течение 1 рабочего дня</p>

          {submitted2 ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-5" style={{ background: GRAD }}>
                <Icon name="Check" size={28} className="text-white" />
              </div>
              <h4 className="text-white font-black text-xl mb-2">Заявка принята!</h4>
              <p className="text-gray-400 text-sm">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted2(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Имя *</label>
                  <input type="text" required value={form2Data.name}
                    onChange={(e) => setForm2Data({ ...form2Data, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3.5 outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Телефон *</label>
                  <input type="tel" required value={form2Data.phone}
                    onChange={(e) => setForm2Data({ ...form2Data, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3.5 outline-none transition-colors text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Комментарий</label>
                <textarea value={form2Data.message}
                  onChange={(e) => setForm2Data({ ...form2Data, message: e.target.value })}
                  placeholder="Опишите объект, тип изоляции, объём работ..."
                  rows={3}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3.5 outline-none transition-colors text-sm resize-none" />
              </div>
              <button type="submit"
                className="btn-primary w-full text-white py-4 font-black uppercase tracking-widest text-xs transition-all duration-300 hover:opacity-90"
                style={{ background: GRAD }}>
                Отправить заявку
              </button>
              <p className="text-gray-600 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#privacy" className="underline hover:text-orange-400 transition-colors">политикой конфиденциальности</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ─────────────────────────────────────────────────── */
export const SiteFooter = () => (
  <footer id="privacy" className="bg-[#050505] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div>
          <a href="#" className="inline-block mb-5">
            <Logo size={36} />
          </a>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Промышленная теплоизоляция под ключ. Изоляция трубопроводов, оборудования и судов. Работаем по всей России с 2012 года.
          </p>
          <a href="tel:+78000000000" className="text-white font-bold hover:text-orange-400 transition-colors text-sm">
            8 800 000 00 00
          </a>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Навигация</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-gray-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-orange-500 group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Услуги</h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-gray-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-orange-500 group-hover:w-3 transition-all duration-300" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Контакты</h4>
          <ul className="space-y-4">
            {CONTACTS_INFO.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="flex items-start gap-3 group">
                  <Icon name={c.icon} size={13} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors leading-snug">{c.value}</div>
                    <div className="text-gray-700 text-xs">{c.sub}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Т1 ИЗОЛЯЦИЯ. Все права защищены. Промышленная теплоизоляция под ключ.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#privacy" className="text-gray-700 hover:text-gray-400 text-xs transition-colors">Политика конфиденциальности</a>
          <a href="#privacy" className="text-gray-700 hover:text-gray-400 text-xs transition-colors">Обработка персональных данных</a>
        </div>
      </div>
    </div>
  </footer>
);
