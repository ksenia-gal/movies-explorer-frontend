import './Logo.css';
import logo from '../../images/header__logo.svg';
import { Link } from 'react-router-dom';


function Logo() {
  
  return (
    <div className='logo'>
    <Link to='/' className='logo__link'>
      <img className='logo__icon' src={logo} alt='Логотип приложения Movies' />
    </Link>
    </div>
  );
};
  
export default Logo;