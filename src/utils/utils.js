export function filterMovies(movies, searchQuery, shortMovies) {
  const moviesByQuery = movies.filter((item) => {
    const stringRu = String(item.nameRU).toLowerCase();
    const stringEng = String(item.nameEN).toLowerCase();
    const searchString = searchQuery.toLowerCase().trim();
    return stringRu.includes(searchString) || stringEng.includes(searchString);
  });
  if (shortMovies === "on") {
    return findShortMoviesOnly(moviesByQuery);
  }
  return moviesByQuery;
}

export function findShortMoviesOnly(movies) {
  return movies.filter((item) => item.duration < 40);
}

export function getSavedMovieById(array, id) {
  return array.find((item) => {
    return item.movieId === id;
  });
}
