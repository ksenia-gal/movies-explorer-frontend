import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import React from "react";

function MoviesCardList({ movies }) {
  return (
    <section className="movies-cardlist">
      <>
        <div className="movies-cardlist__container">
          {movies.map((movie) => (
            <MoviesCard
              key={movie.title}
              title={movie.title}
              duration={movie.duration}
              image={movie.image}
            />
          ))}
        </div>
        <button
          className="movies-cardlist__button"
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
