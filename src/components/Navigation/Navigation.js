import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import accountButton from "../../images/header__button.svg";
import React, { useState } from "react";

function Navigation({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu">
      <nav className={`menu ${isMenuOpen ? "menu_opened" : ""}`}>
        <button
          className={`menu__button ${
            isMenuOpen ? "menu__button_type_close" : "menu__button_opened"
          }`}
          onClick={handleMenuToggle}
        />
        <div
          className={`menu__container ${
            isMenuOpen ? "menu__container_opened" : ""
          }`}
        >
          {isLoggedIn ? (
            <>
              <NavLink
                exact
                to="/"
                activeclassname="menu__nav-link_active"
                className="menu__nav-link"
              >
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                activeclassname="menu__nav-link_active"
                className="menu__nav-link"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                activeclassname="menu__nav-link_active"
                className="menu__nav-link"
              >
                Сохраненные фильмы
              </NavLink>
            </>
          ) : (
            <>
              <Link to="/signup" className="menu__link">
                Регистрация
              </Link>
              <Link to="/signin" className="menu__link menu__link_type_signin">
                Войти
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link to="/profile" className="menu__account-button">
              <img src={accountButton} alt="Кнопка входа в аккаунт" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
