import "./Profile.css";
import React from "react";
import InfoMessage from "../InfoMessage/InfoMessage";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Profile({ onSignOut, onUpdate, infoMessage, setSearchQuery, setShortMoviesFilter }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { handleChange, setValues, setIsValid, values, isValid, errors } =
    useFormWithValidation();
  const [isInputActive, setIsInputActive] = React.useState(false);

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  React.useEffect(() => {
    if (
      values.name === currentUser.name  &&
      values.email === currentUser.email
    ) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  React.useEffect(() => {
    if (infoMessage.isShown && infoMessage.code === 200) {
      setIsInputActive(false);
    }
  }, [setIsInputActive, infoMessage.isShown, infoMessage.code]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdate(values.name, values.email);
  }

  function handleEditClick() {
    setIsInputActive(true);
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__inputs">
            <label className="profile__label">
              Имя
              <input
                type="text"
                label="Имя"
                className="profile__input"
                name="name"
                minLength="2"
                maxLength="30"
                required
                id="name"
                value={values.name || ""}
                onChange={handleChange}
                disabled={!isInputActive}
              />
              <span id="name-error" className="profile__error">
                {errors.name
                  ? "Поле должно быть заполнено и может содержать только латиницу, кириллицу, пробел или дефис"
                  : ""}
              </span>
            </label>
            <label className="profile__label">
              Email
              <input
                value={values.email || ""}
                onChange={handleChange}
                type="email"
                label="Email"
                className="profile__input"
                name="email"
                pattern="^.+@.+\..+$"
                minLength="2"
                maxLength="30"
                required
                id="email"
                disabled={!isInputActive}
              />
              <span id="email-error" className="profile__error">
                {errors.email || ""}
              </span>
            </label>
          </fieldset>
          <InfoMessage {...infoMessage} />
          {isInputActive ? (
            <button
              className={`profile__button profile__button_type_submit profile__link`}
              type="submit"
              disabled={!isValid}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                className={`profile__button profile__button_type_edit profile__link`}
                type="button"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button_type_logout profile__link"
                type="button"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Profile;
