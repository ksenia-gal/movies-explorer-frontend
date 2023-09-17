import './NavTab.css';


function NavTab() {

  return (
    <nav>
    <ul className='navigation'>
        <li>
          <a className='navigation__link' href='#project'>О проекте</a>
        </li>
        <li>
          <a className='navigation__link' href='#techs'>Технологии</a>
        </li>
        <li>
          <a className='navigation__link' href='#student'>Студент</a>
        </li>
    </ul>
    </nav>
  );
};
  
export default NavTab;