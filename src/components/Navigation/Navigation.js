// компонент, который отвечает за меню навигации на сайте.
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function Navigation({ isLoggedIn }) {

  const [isClicked, setIsClicked] = useState(false);

  function handleOpenMenu() {
    setIsClicked(true)
  };

  function handleCloseMenu() {
    setIsClicked(false)
  };

  return (
    <nav className={`menu ${isClicked ? 'menu_open' : ''}`}>
      {isLoggedIn ? (
        <>
          <button
            className={`menu__button ${isClicked ? 'menu__button_type_close' : 'menu__button_type_burger'} `}
            onClick={isClicked ? handleCloseMenu : handleOpenMenu}
          />

          <div className={`menu__container ${isClicked ? 'menu__container_open' : ''}`}>
            <NavLink exact to='/' activeClassName='menu__film-link_active' className='menu__film-link app__link'
            onClick={handleCloseMenu}>
              Главная
            </NavLink>
            <NavLink to='/movies' activeClassName='menu__film-link_active' className='menu__film-link app__link'
            onClick={handleCloseMenu}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' activeClassName='menu__film-link_active' className='menu__film-link app__link'
            onClick={handleCloseMenu}>
              Сохраненные фильмы
            </NavLink>
            <Link to='/profile' className='menu__link menu__link_type_profile app__link'
            onClick={handleCloseMenu}>
              Аккаунт
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to='/signin' className='header__link_type_signin'>Войти</Link>
        </>
      )}
    </nav>
  );
};
  
export default Navigation;