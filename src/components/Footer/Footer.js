import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const endpoints = ['/movies', '/saved-movies', '/'];

  const isFooterVisible = endpoints.includes(location.pathname);

  if (!isFooterVisible) {
    return null;
  }

  return (
      <footer className='footer'>
        <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className='footer__container'>
          <p className='footer__year'> &copy; 2023</p>
          <ul className='footer__links'>
            <li className='footer__item'>
              <a className='footer__link app__link-external' href='https://praktikum.yandex.ru' rel='noopener noreferrer' target='_blank'>Яндекс.Практикум</a>
            </li>
            <li className='footer__item'>
              <a className='footer__link app__link-external' href='https://github.com/ksenia-gal' rel='noopener noreferrer' target='_blank'>Github</a>
            </li>
          </ul>
        </div>
      </footer>
  );
};
  
export default Footer;