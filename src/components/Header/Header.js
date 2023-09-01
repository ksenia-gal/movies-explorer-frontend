// компонент, который отрисовывает шапку сайта на страницу. 
// Шапка на главной странице, как и на других страницах, должна менять отображение, 
// если пользователь авторизован или не авторизован. 
// Такое поведение нужно сразу предусмотреть в вёрстке, даже несмотря на то, 
// что сама авторизация ещё не реализована.

import './Header.css';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header({ isLoggedIn }) {
  return (
    <Route exact path={['/movies', '/saved-movies', '/profile', '/']}>
      <header className='header'>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn}/>
      </header>
    </Route>
  );
};
  
export default Header;