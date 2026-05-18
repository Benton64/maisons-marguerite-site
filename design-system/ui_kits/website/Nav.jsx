/* global React */
const { useState } = React;

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Nos maisons", href: "#maisons" },
    { label: "L'Aubade", href: "#aubade" },
    { label: "Le journal", href: "#journal" },
    { label: "Contact", href: "#contact" }
  ];
  return (
    <header className="mm-nav">
      <div className="mm-nav__inner">
        <a href="#top" className="mm-nav__brand" aria-label="Les Maisons de Marguerite">
          <img src="../../assets/logo-onecolor.svg" alt="" />
        </a>
        <nav className="mm-nav__links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="mm-nav__link">{l.label}</a>
          ))}
        </nav>
        <div className="mm-nav__right">
          <div className="mm-nav__lang">
            <span className="is-active">FR</span><span className="sep">·</span><span>EN</span>
          </div>
          <a href="#reserver" className="mm-btn mm-btn--primary mm-nav__cta">Réserver</a>
          <button className="mm-nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
      {open && (
        <div className="mm-nav__mobile">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

window.Nav = Nav;
