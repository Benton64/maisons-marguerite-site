/* global React */
function AubadeSection() {
  return (
    <section className="mm-aubade mm-wood" id="aubade">
      <div className="mm-aubade__inner">
        <div className="mm-aubade__copy">
          <div className="mm-eyebrow mm-eyebrow--left">
            <span className="text">L'Aubade</span>
            <span className="line" />
          </div>
          <h2 className="mm-section__title">
            <em>L'heure bleue,</em><br />avant la maison.
          </h2>
          <p className="mm-aubade__body">
            Chaque matin, Marguerite dresse une table sous les tilleuls. Pain de seigle d'un boulanger
            de Saint-Cyprien, miel de châtaignier, œufs de la ferme voisine, confitures saisonnières.
            Une heure, peut-être deux. On ne se presse pas.
          </p>
          <div className="mm-aubade__features">
            <div className="mm-feat">
              <i data-lucide="utensils"></i>
              <div>
                <div className="lbl">Produits</div>
                <div className="val">100 % locaux, AB</div>
              </div>
            </div>
            <div className="mm-feat">
              <i data-lucide="calendar"></i>
              <div>
                <div className="lbl">Horaire</div>
                <div className="val">7h30 — 10h30</div>
              </div>
            </div>
            <div className="mm-feat">
              <i data-lucide="trees"></i>
              <div>
                <div className="lbl">Cadre</div>
                <div className="val">Sous les tilleuls</div>
              </div>
            </div>
          </div>
          <a href="#" className="mm-btn mm-btn--ghost">En savoir plus</a>
        </div>
        <div className="mm-aubade__visual">
          <div className="mm-aubade__photo" />
          <figure className="mm-aubade__quote">
            <blockquote>
              « Un pain encore tiède, du beurre demi-sel, une lumière oblique sur la nappe — on
              s'asseyait pour dix minutes, on y restait deux heures. »
            </blockquote>
            <figcaption>— Le Figaro Magazine</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

window.AubadeSection = AubadeSection;
