import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const endpoints = ['/movies', '/saved-movies', '/profile', '/'];

  const isHeaderVisible = endpoints.includes(location.pathname);
  const isHeaderPink = location.pathname === '/';

  if (!isHeaderVisible) {
    return null;
  }

  return (
    
    <header className={`header ${isHeaderPink ? 'pink' : 'white'}`}>
        <Logo />
        <Navigation />
    </header>
  );
};
  
export default Header;