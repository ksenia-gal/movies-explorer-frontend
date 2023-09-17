import './Promo.css';
import promoImage from '../../images/icon__promo.svg';


function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__image' alt='Логотип Яндекс Практикума' src={promoImage}></img>
    </section>
  );
};
  
export default Promo;