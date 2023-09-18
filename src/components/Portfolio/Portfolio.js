import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
      <li className="portfolio__project"><a target="_blank" rel="noopener noreferrer" className="portfolio__link" href="https://github.com/ksenia-gal/how-to-learn">Статичный сайт</a></li>
      <li className="portfolio__project"><a target="_blank" rel="noopener noreferrer" className="portfolio__link" href="https://github.com/ksenia-gal/russian-traveln">Адаптивный сайт</a></li>
      <li className="portfolio__project"><a target="_blank" rel="noopener noreferrer" className="portfolio__link" href="https://github.com/ksenia-gal/react-mesto-api-full-gha">Одностраничное приложение</a></li>
      </ul>
    </section>
  );
}

export default Portfolio;
