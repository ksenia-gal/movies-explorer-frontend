import './AboutMe.css';
import photo from '../../images/Vitaliy.svg';


function AboutMe() {

  return (
    <section className='student content__section' id='student'>
      <h2 className='content__title'>Студент</h2>
      <article className='about-me'>
        <div className='about-me__info-box'>
          <div className='about-me__main-info'>
            <h3 className='about-me__name'>Виталий</h3>
            <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <ul className='about-me__contacts'>
            <li className='about-me__contact'>
              <a className='about-me__link app__link-external' href='https://github.com/ksenia-gal' rel='noopener noreferrer' target='_blank'>Github</a>
            </li>
          </ul>
        </div>
        <div className='about-me__photo-box'>
          <img className='about-me__photo' src={photo} alt='Фотография студента' />
        </div>
      </article>
    </section>
  );
};
  
export default AboutMe;