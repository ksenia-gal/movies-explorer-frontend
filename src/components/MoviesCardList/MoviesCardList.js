import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import React from "react";

function MoviesCardList({ movies }) {
  return (
    <section className="movies__cardlist">
      <>
        <ul className="movies__cardlist__container">
          {movies.map((movie) => (
            <MoviesCard
              key={movie.title}
              title={movie.title}
              duration={movie.duration}
              image={movie.image}
            />
          ))}
        </ul>
        <button
          className="movies__cardlist__button_type_more"
          type="button"
          aria-label="Показать еще"
        >
          Ещё
        </button>
      </>
    </section>
  );
}

export default MoviesCardList;
