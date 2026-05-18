/* global React */
function Footer() {
  return (
    <footer className="mm-footer" id="contact">
      <div className="mm-footer__inner">
        <div className="mm-footer__brand">
          <img className="mm-footer__logo" src="../../assets/logo-reversed.svg" alt="Les Maisons de Marguerite" />
          <p className="mm-footer__tag">
            <em>Trois maisons, trois saisons.</em> Pour celles et ceux qui aiment rester un peu plus longtemps.
          </p>
        </div>
        <div className="mm-footer__cols">
          <div>
            <div className="mm-footer__title">Les maisons</div>
            <ul>
              <li><a href="#">Maison Périgord</a></li>
              <li><a href="#">Appartement Biarritz</a></li>
              <li><a href="#">Duplex Paris 16<sup>e</sup></a></li>
            </ul>
          </div>
          <div>
            <div className="mm-footer__title">À table</div>
            <ul>
              <li><a href="#">L'Aubade</a></li>
              <li><a href="#">Table d'hôte</a></li>
              <li><a href="#">Le carnet d'adresses</a></li>
            </ul>
          </div>
          <div>
            <div className="mm-footer__title">Contact</div>
            <ul>
              <li><a href="mailto:marguerite@maisons-marguerite.fr">marguerite@maisons-marguerite.fr</a></li>
              <li>+33 (0)5 53 00 00 00</li>
              <li>Périgord · Biarritz · Paris</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mm-footer__rule" />
      <div className="mm-footer__base">
        <div>© 2026 Les Maisons de Marguerite</div>
        <div className="mm-footer__legal">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
          <a href="#">CGV</a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
