import "./Movies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import * as moviesApi from "../../utils/MoviesApi";
import {
  findShortMoviesOnly,
  filterMovies,
} from "../../utils/utils";

function Movies({ onLikeClick, onDeleteClick, savedMoviesList }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [shortMoviesFilter, setShortMoviesFilter] = React.useState(
    localStorage.getItem("shortMovies") === "on" ? "on" : "off"
  );
  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);

  React.useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesFromLocalStorage && !searchQuery) {
      setShortMoviesFilter(localStorage.getItem("shortMovies"));
      const filteredMoviesFromLocalStorage = shortMoviesFilter === 'on' ? findShortMoviesOnly(moviesFromLocalStorage) : moviesFromLocalStorage;
      setFilteredMovies(filteredMoviesFromLocalStorage);
      checkFilteredMovies(filteredMoviesFromLocalStorage);
    }
  }, [shortMoviesFilter, searchQuery]);

  React.useEffect(() => {
    if (searchQuery) {
      const newFilteredMovies = filterMovies(
        allMovies,
        searchQuery,
        shortMoviesFilter
      );
      setFilteredMovies(newFilteredMovies);
      checkFilteredMovies(newFilteredMovies);
    }
  }, [searchQuery, shortMoviesFilter, allMovies]);

  function setMovieImages(movies) {
    movies.forEach(movie => {
      if(!movie.image){
        movie.image = 'https://img2.freepng.ru/20180705/cf/kisspng-film-cinema-5b3dc8ff9cf1a0.6653088215307758076429.jpg';
        movie.thumbnail = 'https://img2.freepng.ru/20180705/cf/kisspng-film-cinema-5b3dc8ff9cf1a0.6653088215307758076429.jpg'
      } else {
        movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
        movie.image = `https://api.nomoreparties.co${movie.image.url}`
      }
    });
  };
    function handleSetFilteredMovies(movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(
      checkbox === "on" ? findShortMoviesOnly(moviesList) : moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  function handleSearchSubmit(value) {
    setIsLoading(true);
    setSearchQuery(value);
    localStorage.setItem("searchQuery", value);
    localStorage.setItem("shortMovies", shortMoviesFilter);
    if (!allMovies.length) {
      moviesApi
        .getMovies()
        .then((data) => {
          setMovieImages(data);
          setAllMovies(data);
          handleSetFilteredMovies(data, value, shortMoviesFilter);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      handleSetFilteredMovies(allMovies, value, shortMoviesFilter);
      setIsLoading(false);
    }
  }

  function handleShortMovies(evt) {
    setShortMoviesFilter(evt.target.value);
    localStorage.setItem("shortMovies", evt.target.value);
  }

  function checkFilteredMovies(arr) {
    arr.length === 0 ? setNotFoundMovies(true) : setNotFoundMovies(false);
  }

  return (
    <section className="movies">
      <SearchForm
        onSearch={handleSearchSubmit}
        onCheckbox={handleShortMovies}
        shortMovies={shortMoviesFilter}
      />
      <MoviesCardList
        isLoading={isLoading}
        isEmptyList={notFoundMovies}
        isError={isError}
        list={filteredMovies}
        onLike={onLikeClick}
        onDelete={onDeleteClick}
        savedMovies={savedMoviesList}
      />
    </section>
  );
}

export default Movies;
