import React from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getSavedMovieById } from "../../utils/utils";
import { useScreenWidth } from "../../hooks/useScreenWidth";

function MoviesCardList({
  isLoading,
  list,
  isEmptyList,
  isError,
  onLike,
  onDelete,
  savedMovies,
  savedMoviesPage,
}) {
  const width = useScreenWidth();
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [moviesShownNumber, setMoviesShownNumber] = React.useState({
    default: 0,
    more: 0,
  });
  const [isMounted, setMounted] = React.useState(true);

  React.useEffect(() => {
    if (width > 1280) {
      setMoviesShownNumber({ default: 8, more: 4 });
    } else if (width > 1024) {
      setMoviesShownNumber({ default: 12, more: 3 });
    } else if (width > 770) {
      setMoviesShownNumber({ default: 8, more: 2 });
    } else if (width <= 770) {
      setMoviesShownNumber({ default: 5, more: 2 });
    }
    return () => setMounted(false);
  }, [width, isMounted]);

  React.useEffect(() => {
    if (list.length && !savedMoviesPage) {
      const res = list.filter(
        (item, index) => index < moviesShownNumber.default
      );
      setInitialMovies(res);
    }
  }, [list, savedMoviesPage, moviesShownNumber.default]);

  function getInitialMoviesPage() {
    return initialMovies.map((item) => {
      const likedMovieCard = getSavedMovieById(savedMovies, item.id);
      const likedMovieId = likedMovieCard ? likedMovieCard._id : null;
      return (
        <MoviesCard
          key={item.id}
          movie={{ ...item, _id: likedMovieId }}
          onLike={onLike}
          onDelete={onDelete}
          liked={likedMovieCard ? true : false}
        />
      );
    });
  }

  function getSavedMoviesPage() {
    return list.map((item) => (
      <MoviesCard
        key={item._id}
        movie={item}
        savedPage={savedMoviesPage}
        onDelete={onDelete}
      />
    ));
  }

  function handleShowMore() {
    const newNumber = moviesShownNumber.default + moviesShownNumber.more;
    const res = list.filter((item, index) => index < newNumber);
    setInitialMovies(res);
    setMoviesShownNumber({ ...moviesShownNumber, default: newNumber });
  }

  return (
    <section className="movies-cardlist">
      {isLoading ? (
        <Preloader />
      ) : isEmptyList || isError ? (
        <p
          className={`movies-cardlist__message ${
            isError && "movies-cardlist__message_type_error"
          }`}
        >
          {isError
            ? `Во время запроса произошла ошибка. 
              Попробуйте ещё раз.`
            : "Ничего не найдено"}
        </p>
      ) : (
        <>
          <div className="movies-cardlist__container">
            {savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}
          </div>
          <button
            className={`movies-cardlist__button
          ${
            (savedMoviesPage ||
              isEmptyList ||
              initialMovies.length === list.length) &&
            "movies-cardlist__button_hidden"
          }`}
            type="button"
            aria-label="Показать еще"
            onClick={handleShowMore}
          >
            Ещё
          </button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
