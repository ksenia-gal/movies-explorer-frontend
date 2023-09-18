import "./Form.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import React from "react";

function Form({ type, linkTo, title, buttonName, subtitle, linkName }) {
  return (
    <section className="form">
      <Logo />
      <h2 className="form__title">{title}</h2>
      <form className="form__container">
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
            />
            <span className="form__error"></span>
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
          />
          <span className="form__error"></span>
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
          />
          <span className="form__error"></span>
        </label>
        <button
          className={`form__submit-button form__submit-button_link
            ${type === "signin" && "form__login-button"}
          `}
          type="submit"
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
