/* global React */
function PropertyCard({ name, city, badge, kicker, meta, season, gradient }) {
  return (
    <a href="#" className="mm-prop">
      <div className="mm-prop__photo" style={{ background: gradient }}>
        <div className="mm-prop__badge">{city}</div>
        <div className="mm-prop__overlay">
          <div className="mm-prop__overlay-name">{name}</div>
        </div>
        <div className="mm-prop__protect" />
      </div>
      <div className="mm-prop__meta">
        <div className="mm-prop__kicker">{kicker}</div>
        <div className="mm-prop__row">
          <span>{meta}</span>
          <span className="mm-prop__season">{season}</span>
        </div>
      </div>
    </a>
  );
}

function PropertiesSection() {
  const props = [
    {
      name: "Maison Périgord",
      city: "Périgord",
      badge: "Périgord",
      kicker: "Une longère sous les tilleuls",
      meta: "6 invités · 4 chambres",
      season: "À partir de mai",
      gradient:
        "radial-gradient(110% 70% at 30% 28%, rgba(255,236,200,0.55), transparent 60%), linear-gradient(165deg, #C7B89E 0%, #6A5236 55%, #2D4A3E 100%)"
    },
    {
      name: "Appartement Biarritz",
      city: "Biarritz",
      badge: "Biarritz",
      kicker: "Le balcon, la baie, le sel",
      meta: "4 invités · 2 chambres",
      season: "Toute l'année",
      gradient:
        "radial-gradient(120% 80% at 60% 30%, rgba(220,228,232,0.7), transparent 60%), linear-gradient(170deg, #D4D8D2 0%, #8FA4A2 50%, #4E6463 100%)"
    },
    {
      name: "Duplex Paris 16e",
      city: "Paris 16e",
      badge: "Paris",
      kicker: "Sous les moulures haussmanniennes",
      meta: "4 invités · 2 chambres",
      season: "Toute l'année",
      gradient:
        "radial-gradient(110% 75% at 40% 25%, rgba(255,243,220,0.5), transparent 60%), linear-gradient(160deg, #B8A88B 0%, #6F5840 50%, #2D2218 100%)"
    }
  ];
  return (
    <section className="mm-section" id="maisons">
      <div className="mm-eyebrow">
        <span className="line" />
        <span className="text">Nos maisons</span>
        <span className="line" />
      </div>
      <h2 className="mm-section__title">
        Trois adresses choisies, <em>une même intention</em>.
      </h2>
      <div className="mm-props">
        {props.map((p) => <PropertyCard key={p.name} {...p} />)}
      </div>
    </section>
  );
}

window.PropertyCard = PropertyCard;
window.PropertiesSection = PropertiesSection;
