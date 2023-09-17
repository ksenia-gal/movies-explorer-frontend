import './Logo.css';
import logo from '../../images/header__logo.svg';
import { Link } from 'react-router-dom';


function Logo() {
  
  return (
    <Link to='/' className='logo'>
      <img className='logo__icon' src={logo} alt='Логотип приложения Movies' />
    </Link>
  );
};
  
export default Logo;