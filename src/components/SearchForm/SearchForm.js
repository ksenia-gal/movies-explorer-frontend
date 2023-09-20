import './SearchForm.css';
import React, { useState } from 'react';

function SearchForm() {
  const [shortFilms, setShortFilms] = useState('off');

  const onCheckbox = (e) => {
    setShortFilms(e.target.value);
  };

  return (
    <section className="search">
        <form
          className="search-form"
        >
          <fieldset className="search__fields search__fields_type_film">
            <label className="search__label" htmlFor="film" />
            <input
              className="search__input form-field"
              type="text"
              placeholder="Фильм"
              id="film"
              name="film"
              minLength={2}
              required
            />
        <button
          className='search__button'
          type='submit'
        >
        </button>
          </fieldset>
          <fieldset className="search__fields search__fields_type_shorts">
          <div className='search__filter-box'>
          <div className={`search__filter
            ${shortFilms === 'on' ? 'search__filter_active' : ''}`
          }>
            <input className='search__radio search__radio_off'
              type='radio'
              name='shortFilms'
              value='off'
              checked={shortFilms === 'off'}
              onChange={onCheckbox}
            />
            <input className='search__radio search__radio_on'
              type='radio'
              name='shortFilms'
              value='on'
              checked={shortFilms === 'on'}
              onChange={onCheckbox}
            />
            <span className='search__switch'></span>
          </div>
          <p className='search__filter-name'>Короткометражки</p>
        </div>
          </fieldset>
        </form>
    </section>
  );
};
export default SearchForm;