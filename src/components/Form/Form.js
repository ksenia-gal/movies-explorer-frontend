import "./Form.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import React from "react";
import InfoMessage from '../InfoMessage/InfoMessage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Form({ type, linkTo, linkName, title, subtitle, buttonName, onSubmit, infoMessage }) {

  const {values, errors, isValid, handleChange} = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    type === 'signup'
      ? onSubmit(values.name, values.email, values.password)
      : onSubmit(values.email, values.password);
  };

  return (
    <section className="form">
      <Logo />
      <h2 className="form__title">{title}</h2>
      <form className="form__container" onSubmit={handleSubmit}>
        {type === "signup" && (
          <label className="form__label">
            Имя
            <input
              id="name"
              type="text"
              className="form__input"
              name="name"
              min="2"
              max="30"
              required
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className="form__error">
            {errors.name ? `Поле должно быть заполнено` : ''}
            </span>
          </label>
        )}
        <label className="form__label">
          E-mail
          <input
            id="email"
            type="email"
            className="form__input"
            name="email"
            min="2"
            max="30"
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className="form__error">
          {errors.email || ''}
          </span>
        </label>
        <label className="form__label">
          Пароль
          <input
            id="password"
            type="password"
            className="form__input"
            name="password"
            min="4"
            max="12"
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className="form__error">
          {errors.password || ''}
          </span>
        </label>
        <InfoMessage {...infoMessage} />
        <button
          className={`form__submit-button form__submit-button_link
            ${type === "signup" && "form__login-button"}
          `}
          type="submit"
          disabled={!isValid}
        >
          {buttonName}
        </button>
        <p className="form__subtitle">
          {subtitle}
          <Link to={linkTo} className="form__link">
            {linkName}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Form;
