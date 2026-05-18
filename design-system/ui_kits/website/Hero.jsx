/* global React */
function Hero() {
  return (
    <section className="mm-hero" id="top">
      <div className="mm-hero__photo" role="img" aria-label="Vue d'une longère du Périgord au crépuscule">
        <div className="mm-hero__photo-fill" />
        <div className="mm-hero__photo-gradient" />
      </div>
      <div className="mm-hero__content">
        <div className="mm-hero__kicker">
          <span className="line" /> <em>Bienvenue chez Marguerite</em> <span className="line" />
        </div>
        <h1 className="mm-hero__title">
          Trois maisons,<br />trois saisons.
        </h1>
        <p className="mm-hero__sub">
          Une longère en Périgord, un appartement en bord d'Atlantique, un duplex au cœur du seizième.
          Trois manières d'habiter la France, le temps d'un séjour.
        </p>
        <div className="mm-hero__ctas">
          <a href="#maisons" className="mm-btn mm-btn--primary">Découvrir nos maisons</a>
          <a href="#aubade" className="mm-btn mm-btn--link">L'Aubade, table d'hôte →</a>
        </div>
      </div>
      <div className="mm-hero__scroll">
        <span>Faites défiler</span>
        <i data-lucide="arrow-down"></i>
      </div>
    </section>
  );
}

window.Hero = Hero;
