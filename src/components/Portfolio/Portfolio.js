import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__project">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
            href="https://github.com/ksenia-gal/how-to-learn"
          >
            <p className="portfolio__text">Статичный сайт</p>
            <div className="portfolio__icon"></div>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
            href="https://github.com/ksenia-gal/russian-traveln"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
            <div className="portfolio__icon"></div>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
            href="https://github.com/ksenia-gal/react-mesto-api-full-gha"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
            <div className="portfolio__icon"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
