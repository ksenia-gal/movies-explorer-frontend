import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';

import filmcover1 from '../../images/filmcover-1.png';
import filmcover2 from '../../images/filmcover-2.png';
import filmcover3 from '../../images/filmcover-3.png';

const movies = [ 

  { 
    title: "33 слова о дизайне", 
    duration: "1ч 17м", 
    image: filmcover1, 
  }, 
  { 
    title: "Киноальманах «100 лет дизайна»", 
    duration: '1ч 17м', 
    image: filmcover2, 
  },
  { 
    title: "В погоне за Бенкси", 
    duration: '1ч 17м', 
    image: filmcover3, 
  },  
]; 

function SavedMovies() {

  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  );
};
  
export default SavedMovies;