import "./Portfolio.css";
import arrow from "../../images/icon__arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio content__section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__project">
          <p className="portfolio__name">Статичный сайт</p>
          <a
            className="portfolio__link app__link"
            href="https://github.com/ksenia-gal/how-to-learn"
            rel="noopener noreferrer"
            target="_blank"            
          >
            <img
              className="portfolio__icon"
              src={arrow}
              alt="Ссылка на проект"
            />
          </a>
        </li>
        <li className="portfolio__project">
          <p className="portfolio__name">Адаптивный сайт</p>
          <a
            className="portfolio__link app__link"
            href="https://github.com/ksenia-gal/russian-travel"
            rel="noopener noreferrer"
            target="_blank"            
          >
            <img
              className="portfolio__icon"
              src={arrow}
              alt="Ссылка на проект"
            />
          </a>
        </li>
        <li className="portfolio__project">
          <p className="portfolio__name">Одностраничное приложение</p>
          <a
            className="portfolio__link app__link"
            href="https://github.com/ksenia-gal/react-mesto-api-full-gha"
            rel="noopener noreferrer"
            target="_blank"            
          >
            <img
              className="portfolio__icon"
              src={arrow}
              alt="Ссылка на проект"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
