import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ title, duration, image }) {
  const location = useLocation();

  return (
    <section className="movie">
      <img className="movie__image" src={image} alt="Фильм" />
      <div className="movie__container">
        <h2 className="movie__title">{title}</h2>
        <p className="movie__duration">{duration}</p>
      </div>
      <>
        {location.pathname === "/movies" ? (
          <button type="button" className='movie__button movie__button_type_save'></button>
        ) : (
          <button type="button" className="movie__button movie__button_type_delete"></button>
        )}
      </>
    </section>
  );
}

export default MoviesCard;
