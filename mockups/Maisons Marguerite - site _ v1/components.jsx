/* Maisons Marguerite — shared components.
   Globals: React, ReactDOM, lucide, MM_CONTENT, mmGo, useTweaks, etc. */

const { useState, useEffect, useRef, useCallback } = React;

/* ----------- Lucide helper (renders an inline SVG) ----------- */
function Icon({ name, size = 20, strokeWidth = 1.5, className = "" }) {
  // lucide.icons[name] gives [tag, attrs, children]
  const ic = window.lucide && window.lucide.icons && window.lucide.icons[name];
  if (!ic) return null;
  const [, attrs, children] = ic;
  const props = {
    ...attrs,
    width: size,
    height: size,
    strokeWidth,
    className,
    "aria-hidden": "true",
  };
  return React.createElement(
    "svg",
    props,
    (children || []).map(([t, a], i) =>
      React.createElement(t, { key: i, ...a })
    )
  );
}
window.Icon = Icon;

/* ----------- Navigation ----------- */
function Nav({ route, lang, setLang, isMobileViewport }) {
  const t = window.MM_CONTENT[lang];
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [route]);

  const links = [
    { label: t.nav.maisons, to: "/" },
    { label: t.nav.aubade, to: "/aubade" },
    { label: t.nav.jaulerry, to: "/jaulerry" },
    { label: t.nav.iena, to: "/iena" },
    { label: t.nav.contact, to: "/#contact" },
  ];

  const isActive = (to) => {
    if (to === "/") return route === "/";
    if (to.includes("#")) return false;
    return route.startsWith(to);
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#/" onClick={(e) => { e.preventDefault(); mmGo("/"); }} aria-label="Les Maisons de Marguerite">
          <img src="assets/logo-onecolor.svg" alt="Les Maisons de Marguerite" />
        </a>
        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.label}
               className={"nav__link" + (isActive(l.to) ? " is-active" : "")}
               href={"#" + l.to}
               onClick={(e) => {
                 if (l.to.includes("#")) {
                   e.preventDefault();
                   mmGo("/");
                   setTimeout(() => {
                     const el = document.getElementById("contact");
                     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                   }, 60);
                   return;
                 }
                 e.preventDefault();
                 mmGo(l.to);
               }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__right">
          <div className="nav__lang" role="group" aria-label="Langue">
            <button className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")}>FR</button>
            <span className="sep">·</span>
            <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <Icon name={open ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <div className={"nav__mobile" + (open ? " is-open" : "")}>
        {links.map((l) => (
          <a key={l.label}
             className={isActive(l.to) ? "is-active" : ""}
             href={"#" + l.to}
             onClick={(e) => {
               e.preventDefault();
               setOpen(false);
               if (l.to.includes("#")) {
                 mmGo("/");
                 setTimeout(() => {
                   const el = document.getElementById("contact");
                   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                 }, 80);
               } else {
                 mmGo(l.to);
               }
             }}>
            {l.label}
          </a>
        ))}
        <div className="nav__mobile-lang">
          <button className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")}>FR</button>
          <span>/</span>
          <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;

/* ----------- Footer ----------- */
function Footer({ lang, setLang }) {
  const t = window.MM_CONTENT[lang].footer;
  const navT = window.MM_CONTENT[lang].nav;
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="assets/logo-reversed.svg" alt="Les Maisons de Marguerite" />
          <p className="footer__promise">{t.promise}</p>
        </div>
        <div className="footer__col">
          <h4>{t.explore}</h4>
          <ul>
            <li><a href="#/aubade" onClick={(e) => { e.preventDefault(); mmGo("/aubade"); }}>{navT.aubade}</a></li>
            <li><a href="#/jaulerry" onClick={(e) => { e.preventDefault(); mmGo("/jaulerry"); }}>{navT.jaulerry}</a></li>
            <li><a href="#/iena" onClick={(e) => { e.preventDefault(); mmGo("/iena"); }}>{navT.iena}</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>{t.practical}</h4>
          <ul>
            <li><a href="#contact">{t.contact}</a></li>
            <li><a href="#legal">{t.legal}</a></li>
            <li><a href="#privacy">{t.privacy}</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">{t.instagram}</a></li>
          </ul>
        </div>
        <div className="footer__newsletter">
          <h4>{t.newsletter}</h4>
          <p>{t.newsletterText}</p>
          {submitted ? (
            <p style={{ color: "var(--mm-paper)", fontFamily: "var(--mm-font-italic)", fontStyle: "italic", fontSize: 15 }}>
              {lang === "fr" ? "Merci. La prochaine lettre vous attend." : "Thank you. The next letter will find you."}
            </p>
          ) : (
            <form className="footer__nl-form" onSubmit={onSubmit}>
              <input type="email" required placeholder={t.placeholder} aria-label={t.placeholder} />
              <button type="submit">{t.newsletterCta}</button>
            </form>
          )}
        </div>
      </div>
      <div className="footer__bottom">
        <div>{t.copy}</div>
        <div className="footer__bottom-lang">
          <button className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")}>FR</button>
          <span>·</span>
          <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

/* ----------- Hero (parallax bg, dark overlay) ----------- */
function Hero({ photo, variant = "home", parallaxIntensity = 0.2, children, isMobileViewport = false }) {
  const bgRef = useRef(null);
  useEffect(() => {
    if (isMobileViewport || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          const y = window.scrollY * parallaxIntensity;
          bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
        }
        raf = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallaxIntensity, isMobileViewport]);

  return (
    <section className={"hero" + (variant === "property" ? " hero--property" : "")}>
      <div className="hero__bg" ref={bgRef}
           style={{ backgroundImage: `url('${photo}')`, transform: "scale(1.08)" }} />
      <div className="hero__overlay" />
      <div className="hero__content fade-up">
        {children}
      </div>
      <div className="hero__scroll-cue" aria-hidden="true">
        <span>{/* dot */}</span>
        <span className="line" />
      </div>
    </section>
  );
}
window.Hero = Hero;

/* ----------- FAQ accordion ----------- */
function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={i} className={"faq__item" + (open === i ? " is-open" : "")}>
          <button className="faq__btn" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span>
            <span className="faq__icon"><Icon name="plus" size={20} /></span>
          </button>
          <div className="faq__body">
            <div className="faq__body-inner">{a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
window.FAQ = FAQ;

/* ----------- Contact form ----------- */
function ContactForm({ lang, defaultProperty = "" }) {
  const t = window.MM_CONTENT[lang].home;
  const propT = window.MM_CONTENT[lang].cards;
  const [vals, setVals] = useState({ firstName: "", email: "", message: "", property: defaultProperty });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const upd = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!vals.firstName.trim()) e.firstName = t.errFirstName;
    if (!/^\S+@\S+\.\S+$/.test(vals.email)) e.email = t.errEmail;
    if (!vals.message.trim() || vals.message.trim().length < 4) e.message = t.errMessage;
    if (!vals.property) e.property = t.errProperty;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success fade-up">
        <Icon name="check-circle-2" size={40} />
        <h3>{t.thanksTitle}</h3>
        <p>{t.thanksText}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className={errors.firstName ? "field-error" : ""}>
        <label>{t.firstName}</label>
        <input type="text" value={vals.firstName} onChange={upd("firstName")} autoComplete="given-name" />
        {errors.firstName && <div className="err">{errors.firstName}</div>}
      </div>
      <div className={errors.email ? "field-error" : ""}>
        <label>{t.email}</label>
        <input type="email" value={vals.email} onChange={upd("email")} autoComplete="email" />
        {errors.email && <div className="err">{errors.email}</div>}
      </div>
      <div className={"full " + (errors.property ? "field-error" : "")}>
        <label>{t.property}</label>
        <select value={vals.property} onChange={upd("property")}>
          <option value="">{t.propertyChoose}</option>
          <option value="aubade">{propT.aubade.title} — {propT.aubade.location}</option>
          <option value="jaulerry">{propT.jaulerry.title} — {propT.jaulerry.location}</option>
          <option value="iena">{propT.iena.title} — {propT.iena.location}</option>
          <option value="autre">{t.propertyOther}</option>
        </select>
        {errors.property && <div className="err">{errors.property}</div>}
      </div>
      <div className={"full " + (errors.message ? "field-error" : "")}>
        <label>{t.message}</label>
        <textarea value={vals.message} onChange={upd("message")} />
        {errors.message && <div className="err">{errors.message}</div>}
      </div>
      <div className="submit-row">
        <button type="submit" className="btn btn--lg">
          {t.send}
          <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </form>
  );
}
window.ContactForm = ContactForm;

/* ----------- Property card ----------- */
function PropertyCard({ slug, lang, onOpen }) {
  const c = window.MM_CONTENT[lang].cards[slug];
  const photo = window.MM_CONTENT.properties[slug].photo;
  const cardCta = window.MM_CONTENT[lang].home.cardCta;
  return (
    <a className="card" href={"#/" + slug} onClick={(e) => { e.preventDefault(); onOpen(slug); }}>
      <div className="card__media">
        <img src={photo} alt={c.title} loading="lazy" />
      </div>
      <div className="card__body">
        <div className="card__location">{c.location}</div>
        <h3 className="card__title">{c.title}</h3>
        <div className="card__info">
          {c.info.map((line, i) => <div key={i}>{line}</div>)}
        </div>
        <div className="card__divider" />
        <div className="card__price">{c.price} <small>{c.priceUnit}</small></div>
        <div className="card__cta">
          {cardCta} <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </a>
  );
}
window.PropertyCard = PropertyCard;
