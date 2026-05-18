/* Maisons Marguerite — Guide pages (hub + 4 sections) */

/* ===== Guide Hub ===== */
function GuideHubPage({ lang, goTo }) {
  const t = window.MM_CONTENT[lang];
  const g = t.guide;

  return (
    <div className="page-transition">
      <section className="guide-hero">
        <div className="container">
          <div className="stay-label">{g.stayLabel}</div>
          <h1>{g.title}</h1>
          <p className="intro">{g.intro}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="tiles">
            {g.tiles.map((tile) => (
              <a key={tile.id}
                 className="tile"
                 href={"#/bienvenue/aubade/" + tile.id}
                 onClick={(e) => { e.preventDefault(); goTo("/bienvenue/aubade/" + tile.id); }}>
                <div className="tile__media" style={{ backgroundImage: `url('${tile.photo}')` }} />
                <div className="tile__body">
                  <span className="tile__icon"><Icon name={lucideName(tile.icon)} size={18} /></span>
                  <h3 className="tile__title">{tile.title}</h3>
                  <div className="tile__desc">{tile.desc}</div>
                  <div className="tile__cta">{tile.cta} <Icon name="arrow-right" size={12} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div style={{ height: 80 }} />
      <a className="sticky-cta" href="#/" onClick={(e) => {
        e.preventDefault();
        goTo("/");
        setTimeout(() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }}>
        <Icon name="phone" size={14} />
        {g.stickyCta}
      </a>
    </div>
  );
}
window.GuideHubPage = GuideHubPage;

/* ===== Common Guide back nav ===== */
function GuideBack({ lang, goTo }) {
  const txt = lang === "fr" ? "Retour au guide" : "Back to guide";
  return (
    <button className="guide-section__back" onClick={() => goTo("/bienvenue/aubade")}>
      <Icon name="arrow-left" size={14} />
      {txt}
    </button>
  );
}

/* ===== Guide — Arrivée ===== */
function GuideArriveePage({ lang, goTo }) {
  const a = window.MM_CONTENT[lang].guideArrivee;
  const stayLabel = window.MM_CONTENT[lang].guide.stayLabel;
  return (
    <div className="page-transition">
      <section className="section guide-section">
        <div className="container">
          <GuideBack lang={lang} goTo={goTo} />
          <div style={{ fontFamily: "var(--mm-font-body)", fontSize: 11, letterSpacing: "var(--mm-allcaps-ls)", textTransform: "uppercase", color: "var(--mm-bronze)", marginBottom: 16 }}>
            {stayLabel}
          </div>
          <h1>{a.title}</h1>
          <p className="intro">{a.intro}</p>

          {/* Address card */}
          <div style={{
            background: "var(--mm-bg-alt)", border: "1px solid var(--mm-border)",
            borderRadius: "var(--mm-radius-md)", padding: "32px 36px", marginBottom: 32,
            display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start",
            maxWidth: 720
          }}>
            <span style={{
              width: 48, height: 48, borderRadius: 24,
              background: "var(--mm-forest)", color: "var(--mm-bronze-soft)",
              display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <Icon name="map-pin" size={22} />
            </span>
            <div>
              <div style={{ fontFamily: "var(--mm-font-body)", fontSize: 11, letterSpacing: "var(--mm-allcaps-ls)", textTransform: "uppercase", color: "var(--mm-bronze)", marginBottom: 6 }}>
                {a.addressLabel}
              </div>
              <div style={{ fontFamily: "var(--mm-font-display)", fontSize: 24, color: "var(--mm-forest)", lineHeight: 1.25, marginBottom: 8 }}>
                {a.address}
              </div>
              <div style={{ fontSize: 13, color: "var(--mm-bronze)", marginBottom: 14, fontFamily: "var(--mm-font-body)" }}>
                GPS · {a.gps}
              </div>
              <div style={{ fontSize: 15, color: "var(--mm-ink)", lineHeight: 1.6, marginBottom: 14 }}>
                {a.access}
              </div>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(a.address)}`} target="_blank" rel="noreferrer"
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--mm-forest)", fontFamily: "var(--mm-font-body)", fontSize: 12, letterSpacing: "var(--mm-allcaps-ls)", textTransform: "uppercase", borderBottom: "1px solid var(--mm-forest)", paddingBottom: 2 }}>
                {window.MM_CONTENT[lang].common.seeOnMaps}
                <Icon name="external-link" size={12} />
              </a>
            </div>
          </div>

          <h2>{a.keyLabel}</h2>
          <p>{a.keyDetails}</p>

          <h2>{a.hoursLabel}</h2>
          <p style={{ fontSize: 17 }}>{a.hours}</p>
          <p style={{ fontFamily: "var(--mm-font-italic)", fontStyle: "italic", color: "var(--mm-bronze)" }}>{a.hoursNote}</p>

          <h2>{a.teamTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 720 }}>
            {a.team.map(([name, role], i) => (
              <div key={i} style={{ padding: "20px 0", borderTop: "1px solid var(--mm-border)" }}>
                <div style={{ fontFamily: "var(--mm-font-display)", fontSize: 22, color: "var(--mm-forest)" }}>{name}</div>
                <div style={{ fontSize: 14, color: "var(--mm-ink)", marginTop: 6, lineHeight: 1.5 }}>{role}</div>
              </div>
            ))}
          </div>

          <h2>{a.emergencyTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, maxWidth: 720 }}>
            {a.emergency.map(([label, num], i) => (
              <div key={i} style={{ padding: "16px 0", borderTop: "1px solid var(--mm-border)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "var(--mm-font-body)", fontSize: 13, color: "var(--mm-ink)" }}>{label}</span>
                <a href={"tel:" + num.replace(/\s/g, "")} style={{ fontFamily: "var(--mm-font-display)", fontStyle: "italic", fontSize: 18, color: "var(--mm-forest)" }}>{num}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.GuideArriveePage = GuideArriveePage;

/* ===== Guide — Maison ===== */
function GuideMaisonPage({ lang, goTo }) {
  const m = window.MM_CONTENT[lang].guideMaison;
  return (
    <div className="page-transition">
      <section className="section guide-section">
        <div className="container">
          <GuideBack lang={lang} goTo={goTo} />
          <h1>{m.title}</h1>
          <p className="intro">{m.intro}</p>

          <div className="wifi-card">
            <span className="icon"><Icon name="wifi" size={28} /></span>
            <dl>
              <dt>{m.wifiNetworkLabel}</dt>
              <dd>{m.wifiNetwork}</dd>
              <dt>{m.wifiPasswordLabel}</dt>
              <dd>{m.wifiPassword}</dd>
            </dl>
          </div>

          <h2>{m.sonosTitle}</h2>
          <p>{m.sonosText}</p>

          <h2>{m.poolTitle}</h2>
          <p>{m.poolText}</p>
          <div className="placeholder-video">
            <Icon name="play-circle" size={28} />
            <span>{m.poolVideo}</span>
          </div>

          <h2>{m.acTitle}</h2>
          <p>{m.acText}</p>

          <h2>{m.bbqTitle}</h2>
          <p>{m.bbqText}</p>
          <div className="placeholder-video">
            <Icon name="play-circle" size={28} />
            <span>{m.bbqVideo}</span>
          </div>

          <h2>{m.fireplaceTitle}</h2>
          <ol className="steps">
            {m.fireplaceSteps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
          <div className="placeholder-video">
            <Icon name="play-circle" size={28} />
            <span>{m.fireplaceVideo}</span>
          </div>

          <h2>{lang === "fr" ? "Divers" : "Other"}</h2>
          <div style={{ maxWidth: 720 }}>
            {m.misc.map(([label, val], i) => (
              <div key={i} style={{ padding: "18px 0", borderTop: "1px solid var(--mm-border)" }}>
                <div style={{ fontFamily: "var(--mm-font-body)", fontSize: 11, letterSpacing: "var(--mm-allcaps-ls)", textTransform: "uppercase", color: "var(--mm-bronze)", marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.GuideMaisonPage = GuideMaisonPage;

/* ===== Guide — Carnet de Val ===== */
function GuideCarnetPage({ lang, goTo }) {
  const c = window.MM_CONTENT[lang].guideCarnet;
  return (
    <div className="page-transition">
      <section className="section guide-section">
        <div className="container">
          <GuideBack lang={lang} goTo={goTo} />
          <h1>{c.title}</h1>
          <p className="intro">{c.intro}</p>

          {c.groups.map((group, gi) => (
            <div className="carnet-group" key={gi}>
              <h2>{group.eyebrow}</h2>
              {group.items.map((it, i) => (
                <div className="carnet-item" key={i}>
                  <div className="carnet-item__main">
                    <div className="carnet-item__meta">{it.meta}</div>
                    <div className="carnet-item__name">{it.name}</div>
                    {it.quote && <div className="carnet-item__quote">« {it.quote} »</div>}
                  </div>
                  {it.quote && (
                    <a className="carnet-item__link" href={`https://maps.google.com/?q=${encodeURIComponent(it.name + " " + (it.meta || ""))}`} target="_blank" rel="noreferrer">
                      Maps <Icon name="external-link" size={11} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.GuideCarnetPage = GuideCarnetPage;

/* ===== Guide — Départ ===== */
function GuideDepartPage({ lang, goTo }) {
  const d = window.MM_CONTENT[lang].guideDepart;
  const [checked, setChecked] = React.useState(new Set());
  const toggle = (i) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div className="page-transition">
      <section className="section guide-section">
        <div className="container">
          <GuideBack lang={lang} goTo={goTo} />
          <h1>{d.title}</h1>
          <p className="intro">{d.intro}</p>

          <p style={{ fontSize: 17 }}>{d.hours}</p>

          <h2>{d.checklistTitle}</h2>
          <ul className="checklist">
            {d.checklist.map((item, i) => (
              <li key={i} className={checked.has(i) ? "is-checked" : ""} onClick={() => toggle(i)}>
                <span className="box">
                  <Icon name="check" size={14} />
                </span>
                <span className="label-txt">{item}</span>
              </li>
            ))}
          </ul>

          <h2>{d.keysTitle}</h2>
          <p>{d.keysText}</p>

          <h2>{d.wordTitle}</h2>
          <p style={{
            fontFamily: "var(--mm-font-italic)", fontStyle: "italic",
            fontSize: 20, lineHeight: 1.6, color: "var(--mm-forest)",
            maxWidth: 640, marginTop: 8,
          }}>{d.wordText}</p>
          <p style={{ fontFamily: "var(--mm-font-italic)", fontStyle: "italic", color: "var(--mm-bronze)", fontSize: 17 }}>{d.signature}</p>
        </div>
      </section>
    </div>
  );
}
window.GuideDepartPage = GuideDepartPage;
