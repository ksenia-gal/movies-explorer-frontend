import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import filmcover1 from '../../images/filmcover-1.png';
import filmcover2 from '../../images/filmcover-2.png';
import filmcover3 from '../../images/filmcover-3.png';
import filmcover4 from '../../images/filmcover-4.png';
import filmcover5 from '../../images/filmcover-5.png';
import filmcover6 from '../../images/filmcover-6.png';
import filmcover7 from '../../images/filmcover-7.png';
import filmcover8 from '../../images/filmcover-8.png';
import filmcover9 from '../../images/filmcover-9.png';
import filmcover10 from '../../images/filmcover-10.png';
import filmcover11 from '../../images/filmcover-11.png';
import filmcover12 from '../../images/filmcover-12.png';

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
  { 
    title: "Баския: Взрыв реальности", 
    duration: '1ч 17м', 
    image: filmcover4, 
  }, 
  { 
    title: "Бег это свобода", 
    duration: '1ч 17м',
    image: filmcover5, 
  }, 
  { 
    title: "Книготорговцы", 
    duration: '1ч 17м',
    image: filmcover6, 
  }, 
  { 
    title: "Когда я думаю о Германии ночью", 
    duration: '1ч 17м', 
    image: filmcover7, 
  }, 
  { 
    title: "Gimme Danger: История Игги и The Stooges", 
    duration: '1ч 17м', 
    image: filmcover8, 
  }, 
  { 
    title: "Дженис: Маленькая девочка грустит", 
    duration: '1ч 17м',
    image: filmcover9, 
  }, 
  { 
    title: "Соберись перед прыжком", 
    duration: '1ч 17м',
    image: filmcover10, 
  }, 
  { 
    title: "Пи Джей Харви: A dog called money", 
    duration: '1ч 17м',
    image: filmcover11, 
  }, 
  { 
    title: "По волнам: Искусство звука в кино", 
    duration: '1ч 17м',
    image: filmcover12, 
  }, 
]; 

function Movies() {

  return (
    <section className='movies'>
      <SearchForm
      />
      <MoviesCardList movies={movies} />
    </section>
  );
}
  
export default Movies;