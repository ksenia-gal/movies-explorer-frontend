import './Profile.css';
import React from 'react';

function Profile() {

  const [isInputActive, setIsInputActive] = React.useState(false);

  function handleEditClick() {
    setIsInputActive(true);
  };

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>{`Привет, Виталий!`}</h2>
        <form className='profile__form'>
        <fieldset className="profile__inputs">
          <label className='profile__label'>Имя
            <input
              type='text'
              label='Имя'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              id='name'
            />
            <span id="name-error" className='profile__error'>
            </span>
          </label>
          <label className='profile__label'>Email
            <input
              type='email'
              label='Email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              id='email'
            />
            <span id='email-error' className='profile__error'>
            </span>
          </label>
          </fieldset>
          {isInputActive ? (
            <button
              className={`profile__button profile__button_type_submit profile__link`}
              type='submit'
            >
              Сохранить
            </button>
          ) : (
            <>
            <button
              className={`profile__button profile__button_type_edit profile__link`}
              type='button'
              onClick={handleEditClick}
            >
              Редактировать
            </button>
            <button
              className='profile__button profile__button_type_logout profile__link'
              type='button'
            >
              Выйти из аккаунта
            </button>
            </>
          )}
                      
        </form>
      </div>
      
    </section>
  );
};
  
export default Profile;