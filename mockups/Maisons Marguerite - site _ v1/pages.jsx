/* Maisons Marguerite — Homepage + Property pages */

const { useState: _us, useEffect: _ue } = React;

/* ===== Homepage ===== */
function HomePage({ lang, setLang, parallaxIntensity, cardVariant, isMobileViewport, goTo }) {
  const t = window.MM_CONTENT[lang];
  const h = t.home;

  return (
    <div className="page-transition">
      <Hero photo={h.heroPhoto} variant="home" parallaxIntensity={parallaxIntensity} isMobileViewport={isMobileViewport}>
        <img className="hero__logo" src="assets/logo-reversed.svg" alt="Les Maisons de Marguerite" />
        <div className="hero__tagline">{h.tagline}</div>
        <div className="hero__subtagline">{h.subtagline}</div>
        <button className="btn-on-dark" onClick={() => {
          const el = document.getElementById("maisons");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
          {h.heroCta}
          <Icon name="arrow-down" size={14} />
        </button>
      </Hero>

      {/* Brand section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <div className="eyebrow">{h.brandEyebrow}</div>
            <h2>{h.brandTitle}</h2>
          </div>
          <div className="brand-prose">
            <p>{h.brandP1}</p>
            <span className="ornament" aria-hidden="true" />
            <p>{h.brandP2}</p>
            <p>{h.brandP3}</p>
          </div>
        </div>
      </section>

      {/* Three properties */}
      <section className="section" id="maisons">
        <div className="container">
          <div className="section__head">
            <div className="eyebrow">{h.propertiesEyebrow}</div>
            <h2>{h.propertiesTitle}</h2>
          </div>
          <div className={"cards variant--" + cardVariant}>
            <PropertyCard slug="aubade" lang={lang} onOpen={goTo} />
            <PropertyCard slug="iena" lang={lang} onOpen={goTo} />
            <PropertyCard slug="jaulerry" lang={lang} onOpen={goTo} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--alt" id="contact">
        <div className="container">
          <div className="section__head">
            <div className="eyebrow">{h.contactEyebrow}</div>
            <h2>{h.contactTitle}</h2>
            <p className="lede" style={{ fontStyle: "italic", fontFamily: "var(--mm-font-italic)", color: "var(--mm-bronze)" }}>
              {h.contactSubtitle}
            </p>
          </div>
          <ContactForm lang={lang} />
        </div>
      </section>
    </div>
  );
}
window.HomePage = HomePage;

/* ===== Property page (Aubade / Jaulerry / Iéna) =====
   slug controls all content + photos */
function PropertyPage({ slug, lang, parallaxIntensity, isMobileViewport, goTo }) {
  const t = window.MM_CONTENT[lang];
  const p = t[slug];
  const photos = window.MM_CONTENT.properties[slug];

  return (
    <div className="page-transition">
      <Hero photo={photos.heroPhoto} variant="property" parallaxIntensity={parallaxIntensity} isMobileViewport={isMobileViewport}>
        <img className="hero__logo" src="assets/logo-reversed.svg" alt="Les Maisons de Marguerite" />
        <div style={{
          fontFamily: "var(--mm-font-body)", fontSize: 12,
          letterSpacing: "var(--mm-allcaps-ls)", textTransform: "uppercase",
          color: "rgba(255,255,255,0.78)", marginTop: 6,
        }}>{p.title}</div>
        <div className="hero__tagline">{p.heroTagline}</div>
      </Hero>

      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="container">
          <div className="prop-keyinfo">
            <div>
              <div className="location-label">{p.keyInfo[0][1]}</div>
              <h1>{p.title}</h1>
              <p className="lede">{p.lede}</p>
            </div>
            <dl>
              {p.keyInfo.map(([k, v], i) => (
                <React.Fragment key={i}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>

          {/* Practical info icons */}
          <div className="infos">
            {p.infos.map((info, i) => (
              <div className="infos__item" key={i}>
                <Icon name={lucideName(info.icon)} size={22} />
                <div>
                  <div className="label">{info.label}</div>
                  <div className="value">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description with alt sections */}
      <section className="section section--alt">
        <div className="container">
          <div className="alt-section">
            <div className="alt-section__media" style={{ backgroundImage: `url('${photos.altPhoto1}')` }} />
            <div className="alt-section__body">
              <div className="label">{p.descTitle}</div>
              <h3>{p.title}</h3>
              <p>{p.descP1}</p>
              <p>{p.descP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment (only Aubade has full list) */}
      {p.equip && (
        <section className="section">
          <div className="container">
            <div className="section__head">
              <div className="eyebrow">{lang === "fr" ? "L'essentiel" : "What's inside"}</div>
              <h2>{p.equipTitle}</h2>
            </div>
            <ul className="equip" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {p.equip.map((line, i) => (
                <li className="equip__item" key={i}>
                  <Icon name="check" size={18} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Second alt section for non-Aubade */}
      {!p.equip && (
        <section className="section">
          <div className="container">
            <div className="alt-section alt-section--rev">
              <div className="alt-section__media" style={{ backgroundImage: `url('${photos.altPhoto2}')` }} />
              <div className="alt-section__body">
                <div className="label">{lang === "fr" ? "Le détail" : "The detail"}</div>
                <h3>{lang === "fr" ? "Pensé pour rester" : "Made to stay in"}</h3>
                <p>{lang === "fr"
                  ? "Chaque mètre carré a été pensé pour des séjours longs, et pas pour une nuit. Les matériaux résistent à l'usage, le mobilier ne sert pas qu'à être beau, le confort est sérieux."
                  : "Every square metre is built for long stays, not single nights. The materials hold up, the furniture earns its space, the comfort is serious."
                }</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <div className="eyebrow">FAQ</div>
            <h2>{p.faqTitle}</h2>
          </div>
          <FAQ items={p.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip" id="contact">
        <div className="container">
          <h2>{p.ctaTitle}</h2>
          <p>{p.ctaText}</p>
          <button className="btn btn--lg" onClick={() => {
            goTo("/");
            setTimeout(() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 80);
          }}>
            {p.ctaBtn}
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </section>

      {/* Guide link — only Aubade has guide in this batch */}
      {p.guideLinkLede && (
        <section className="section">
          <div className="container">
            <div className="guest-link">
              <div className="guest-link__txt">
                <span>{p.guideLinkLede}</span>
                {p.guideLinkText}
              </div>
              <button className="btn btn--ghost" onClick={() => goTo("/bienvenue/aubade")}>
                {t.common.bookGuideCta}
                <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
window.PropertyPage = PropertyPage;

/* Map our icon names to actual lucide kebab-case names */
function lucideName(name) {
  const map = {
    Waves: "waves",
    BedDouble: "bed-double",
    Flame: "flame",
    Wifi: "wifi",
    KeyRound: "key-round",
    Mountain: "mountain",
    Monitor: "monitor",
    Car: "car",
    Bath: "bath",
    MapPin: "map-pin",
    Trees: "trees",
    Layers: "layers",
    Thermometer: "thermometer",
    Home: "home",
    BookOpen: "book-open",
    CheckSquare: "check-square",
    Phone: "phone",
  };
  return map[name] || name.toLowerCase();
}
window.lucideName = lucideName;
