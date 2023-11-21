import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, onLike, onDelete, liked }) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  function handleLikeClick() {
    onLike(movie);
  };

  function handleDeleteClick() {
    onDelete(movie);
  };

function transformTime(duration) {
      const hours = Math.trunc(duration / 60);
      const minutes = duration % 60;
      return `${hours}ч ${minutes}м`;
    };

    const renderMovieButton = () => {
      if (isSavedMoviesPage) {
        return (
          <button
            type="button"
            className="movie__button movie__button_type_delete"
            onClick={handleDeleteClick}
          ></button>
        )
      } else {
        return (
          <button
            type="button"
            className={`movie__button movie__button_type_save ${liked ? 'movie__button_type_save_active' : ''}`}
            onClick={liked ? handleDeleteClick : handleLikeClick}
          ></button>
        )
      }
    }    

  return (
    <section className="movie">
      <a className='movie__link' href={movie.trailerLink || movie.trailerLink} target='_blank' rel='noreferrer'>
      <img className="movie__image" src={`${movie.image}`} alt="Фильм" />
      </a>
      <div className="movie__container">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__duration">{transformTime(movie.duration)}</p>
      </div>
      <>
      {renderMovieButton()}
      </>
    </section>
  );
}

export default MoviesCard;
