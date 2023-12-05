import "./SearchForm.css";
import React from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function SearchForm({
  onSearch,
  shortMovies,
  onCheckbox,
  savedMoviesPage
}) {
  const { handleChange, setValues, setIsValid, values, isValid, errors } =
    useFormWithValidation();

  React.useEffect(() => {
    if (!savedMoviesPage) {
      const input = localStorage.getItem("searchQuery");
      if (input) {
        setValues({ query: input });
        setIsValid(true);
      }
    }
  }, [savedMoviesPage, setValues, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(values.query);
  }
  
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <fieldset className="search__fields search__fields_type_film">
          <label className="search__label" htmlFor="film" />
          <input
            className="search__input form-field"
            type="text"
            placeholder="Фильм"
            id="film"
            name="query"
            minLength={2}
            required
            value={values.query || ""}
            onChange={handleChange}
          />
          <span id="email-error" className="search-form__error">
            {errors.query ? "Нужно ввести ключевое слово" : ""}
          </span>
          <button
            className="search__button"
            type="submit"
            aria-label="Найти"
            disabled={!isValid}
          ></button>
        </fieldset>
        <fieldset className="search__fields search__fields_type_shorts">
          <div className="search__filter-box">
            <div
              className={`search__filter
            ${shortMovies === "on" ? "search__filter_active" : ""}`}
            >
              <input
                className="search__radio search__radio_off"
                type="radio"
                name="shortFilms"
                value="off"
                checked={shortMovies === "off"}
                onChange={onCheckbox}
              />
              <input
                className="search__radio search__radio_on"
                type="radio"
                name="shortFilms"
                value="on"
                checked={shortMovies === "on"}
                onChange={onCheckbox}
              />
              <span className="search__switch"></span>
            </div>
            <p className="search__filter-name">Короткометражки</p>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default SearchForm;
