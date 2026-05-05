import { useState } from "react";
import Icon from "@/components/ui/icon";
import { LOGO_SYMBOL, IMG_SHIP, IMG_PIPE, IMG_BOILER, GRAD, NAV_LINKS, SERVICES, CONTACTS_INFO, useVisible } from "./data";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <img
      src={LOGO_SYMBOL}
      alt=""
      aria-hidden
      className="object-contain flex-shrink-0 h-14 lg:h-[72px] w-auto"
    />
    <span
      className="text-white whitespace-nowrap leading-none uppercase text-lg lg:text-xl"
      style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
    >
      Т1 ИЗОЛЯЦИЯ
    </span>
  </div>
);

const inputCls = (dark: boolean) =>
  `w-full border rounded-lg px-4 py-3.5 outline-none text-[14px] font-medium transition-all duration-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
    dark
      ? "bg-[#0f0f0f] border-white/10 text-white placeholder-gray-600"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-300"
  }`;

const labelCls = "block t-label text-gray-400 mb-2";

/* ─── CTA / Request ──────────────────────────────────────────── */
export const CtaSection = () => {
  const ctaVis = useVisible(0.1);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="request" className="overflow-hidden relative" ref={ctaVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-gray-950/65" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">

          {/* Левая — тёмная */}
          <div className={`relative bg-[#111] p-10 lg:p-14 overflow-hidden ${ctaVis.visible ? "animate-fadeInLeft" : "opacity-0"}`}>
            {/* Фирменная полоска */}
            <div className="absolute left-0 top-0 w-[3px] h-full" style={{ background: "linear-gradient(to bottom, #e63012, #f97316, #fbbf24)" }} />
            {/* Паттерн */}
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-orange-500/60" />
                <span className="t-label text-orange-500">Коммерческое предложение</span>
              </div>
              <h2 className="t-h2 text-orange-400 mb-2">
                Нужен расчёт<br />теплоизоляции?
              </h2>
              <div className="t-underline" />
              <p className="t-lead text-gray-400 mb-10 text-[15px]">
                Подготовим предложение под ваш объект в короткий срок. Бесплатно, без обязательств.
              </p>
              <ul className="space-y-3.5 mb-auto">
                {[
                  "Бесплатный выезд специалиста на объект",
                  "Расчёт за 1–2 рабочих дня",
                  "Фиксированная стоимость в договоре",
                  "Гарантийный паспорт на работы",
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #e63012, #f97316)" }}>
                      <Icon name="Check" size={10} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-[14px] leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/8 flex items-center gap-4">
                <img src={IMG_SHIP} alt="" aria-hidden className="w-20 h-14 object-cover rounded-lg opacity-60 flex-shrink-0" />
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Судостроение, НПЗ, энергетика —<br />
                  <span className="text-gray-300">опыт на объектах любой сложности</span>
                </p>
              </div>
            </div>
          </div>

          {/* Правая — форма */}
          <div className={`bg-white p-10 lg:p-14 ${ctaVis.visible ? "animate-fadeInRight" : "opacity-0"}`}>
            <h3 className="t-h3 text-gray-900 mb-1.5">Получить коммерческое предложение</h3>
            <p className="t-body text-gray-400 mb-8 text-[14px]">Ответим в течение 1 рабочего дня</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #e63012, #f97316)" }}>
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h4 className="text-gray-900 font-bold text-xl mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Заявка отправлена!</h4>
                <p className="text-gray-400 text-[14px]">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className={labelCls}>Ваше имя *</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Петров"
                    className={inputCls(false)} />
                </div>
                <div>
                  <label className={labelCls}>Телефон *</label>
                  <input type="tel" required value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className={inputCls(false)} />
                </div>
                <div>
                  <label className={labelCls}>Комментарий</label>
                  <textarea value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите объект, тип изоляции, объём работ..."
                    rows={3}
                    className={`${inputCls(false)} resize-none`} />
                </div>
                <button type="submit"
                  className="btn-primary w-full text-white py-4 font-bold uppercase tracking-widest text-[12px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2.5 group"
                  style={{ background: GRAD }}>
                  Получить коммерческое предложение
                  <Icon name="ArrowRight" size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-gray-400 text-[12px] text-center">
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

/* ─── Contacts ───────────────────────────────────────────────── */
export const ContactsSection = () => {
  const contVis = useVisible(0.1);
  const [submitted2, setSubmitted2] = useState(false);
  const [form2Data, setForm2Data] = useState({ name: "", phone: "", message: "" });

  return (
    <section id="contacts" className="section-pad bg-white overflow-hidden relative" ref={contVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_BOILER} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.03]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-14 transition-all duration-700 ${contVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Контакты</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-orange-500">Как с нами связаться</h2>
          <div className="t-underline mx-auto justify-center" />
        </div>

        {/* Контакты-плитки */}
        <div className={`mb-12 rounded-2xl border border-gray-100 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-gray-100 grid sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${contVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          {CONTACTS_INFO.map((item) => (
            <a key={item.label} href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-start gap-4 p-6 sm:p-7 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300 mt-0.5">
                <Icon name={item.icon} size={15} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="min-w-0">
                <div className="t-label text-gray-400 mb-1">{item.label}</div>
                <div className="font-semibold text-gray-900 text-[14px] leading-snug break-all">{item.value}</div>
                <div className="text-gray-400 text-[12px] mt-0.5">{item.sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Форма */}
        <div className={`max-w-2xl mx-auto rounded-2xl overflow-hidden ${contVis.visible ? "animate-fadeInUp delay-500" : "opacity-0"}`}>
          <div className="bg-gray-950 px-10 lg:px-14 py-10 lg:py-12">
            <h3 className="t-h3 text-white mb-1.5 text-center">Оставьте заявку</h3>
            <p className="t-body text-gray-400 mb-8 text-center text-[14px]">Свяжемся в течение 1 рабочего дня</p>

            {submitted2 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, #e63012, #f97316)" }}>
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Заявка принята!</h4>
                <p className="text-gray-400 text-[14px]">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted2(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Имя *</label>
                    <input type="text" required value={form2Data.name}
                      onChange={(e) => setForm2Data({ ...form2Data, name: e.target.value })}
                      placeholder="Иван Петров"
                      className={inputCls(true)} />
                  </div>
                  <div>
                    <label className={labelCls}>Телефон *</label>
                    <input type="tel" required value={form2Data.phone}
                      onChange={(e) => setForm2Data({ ...form2Data, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className={inputCls(true)} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Комментарий</label>
                  <textarea value={form2Data.message}
                    onChange={(e) => setForm2Data({ ...form2Data, message: e.target.value })}
                    placeholder="Опишите объект, тип изоляции, объём работ..."
                    rows={3}
                    className={`${inputCls(true)} resize-none`} />
                </div>
                <button type="submit"
                  className="btn-primary w-full text-white py-4 font-bold uppercase tracking-widest text-[12px] hover:opacity-90 transition-opacity"
                  style={{ background: GRAD }}>
                  Отправить заявку
                </button>
                <p className="text-gray-600 text-[12px] text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#privacy" className="underline hover:text-orange-400 transition-colors">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ─────────────────────────────────────────────────── */
export const SiteFooter = () => (
  <footer id="privacy" className="bg-[#060606] border-t border-white/[0.06]">
    {/* Фирменная полоска сверху */}
    <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #e63012, #f97316, #fbbf24)" }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

        {/* Brand */}
        <div>
          <a href="#" className="inline-block mb-6">
            <Logo />
          </a>
          <p className="text-gray-600 text-[13px] leading-relaxed mb-5">
            Промышленная теплоизоляция. Поставка и монтаж изоляции трубопроводов, оборудования и судов. По всей России.
          </p>
          <a href="mailto:teplofabrika@mail.ru"
            className="text-gray-400 hover:text-orange-400 transition-colors text-[13px] font-medium">
            teplofabrika@mail.ru
          </a>
        </div>

        {/* Nav */}
        <div>
          <h4 className="t-label text-gray-500 mb-5">Навигация</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-gray-500 hover:text-orange-400 text-[13px] transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-orange-500 group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="t-label text-gray-500 mb-5">Услуги</h4>
          <ul className="space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#request" className="text-gray-500 hover:text-orange-400 text-[13px] transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-orange-500 group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="t-label text-gray-500 mb-5">Контакты</h4>
          <ul className="space-y-4">
            {CONTACTS_INFO.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="flex items-start gap-3 group">
                  <Icon name={c.icon} size={13} className="text-orange-500/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 group-hover:text-gray-200 text-[13px] transition-colors leading-snug">{c.value}</div>
                    <div className="text-gray-700 text-[11px] mt-0.5">{c.sub}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-[12px]">
          © {new Date().getFullYear()} Т1 ИЗОЛЯЦИЯ. Все права защищены.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#privacy" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors">Политика конфиденциальности</a>
          <a href="#privacy" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors">Обработка персональных данных</a>
        </div>
      </div>
    </div>
  </footer>
);