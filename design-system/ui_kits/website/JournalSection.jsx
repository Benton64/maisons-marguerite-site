/* global React */
function JournalCard({ kicker, title, date, gradient }) {
  return (
    <a href="#" className="mm-jcard">
      <div className="mm-jcard__photo" style={{ background: gradient }} />
      <div className="mm-jcard__kicker">{kicker}</div>
      <h3 className="mm-jcard__title">{title}</h3>
      <div className="mm-jcard__date">{date}</div>
    </a>
  );
}

function JournalSection() {
  const items = [
    {
      kicker: "Carnet",
      title: "Comment Marguerite a trouvé la longère",
      date: "Mai 2025",
      gradient: "linear-gradient(165deg, #D6C7A8, #8B6F4E)"
    },
    {
      kicker: "Itinéraire",
      title: "Trois villages à voir autour de Sarlat",
      date: "Mars 2025",
      gradient: "linear-gradient(165deg, #C5BFA8, #4F5E48)"
    },
    {
      kicker: "À table",
      title: "Le pain de seigle de Pascale, à Saint-Cyprien",
      date: "Février 2025",
      gradient: "linear-gradient(165deg, #E0D2B8, #9A7E58)"
    }
  ];
  return (
    <section className="mm-section mm-section--alt" id="journal">
      <div className="mm-eyebrow">
        <span className="line" />
        <span className="text">Le journal</span>
        <span className="line" />
      </div>
      <h2 className="mm-section__title">
        Carnets, <em>itinéraires</em>, adresses.
      </h2>
      <div className="mm-journal">
        {items.map((i) => <JournalCard key={i.title} {...i} />)}
      </div>
      <div className="mm-section__after">
        <a href="#" className="mm-btn mm-btn--link">Lire tous les carnets →</a>
      </div>
    </section>
  );
}

window.JournalSection = JournalSection;
