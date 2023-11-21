import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';

function SavedMovies({ list, isError, onDeleteClick }) {
const [searchQuery, setSearchQuery] = React.useState('');
const [shortMovies, setShortMovies] = React.useState('off');
const [filteredMovies, setFilteredMovies] = React.useState(list);
const [notFoundMovies, setNotFoundMovies] = React.useState(false);

function handleShortMovies(evt) {
  setShortMovies(evt.target.value);
};

function handleSearchSubmit(value) {
  setSearchQuery(value);
};

React.useEffect(() => {
  const searchResult = filterMovies(list, searchQuery, shortMovies);
  setFilteredMovies(searchResult);
  if (searchQuery) {
    setNotFoundMovies(searchResult.length === 0);
  }
}, [searchQuery, shortMovies, list]);


  return (
    <section className='saved-movies'>
      <SearchForm 
      onSearch={handleSearchSubmit}
      onCheckbox={handleShortMovies}
      shortMovies={shortMovies}
      savedMoviesPage={true}
      />
      <MoviesCardList 
      list={filteredMovies}
      savedMoviesPage={true}
      onDelete={onDeleteClick}
      isEmptyList={notFoundMovies}
      isError={isError}
      />
    </section>
  );
};
  
export default SavedMovies;