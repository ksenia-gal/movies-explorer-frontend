import "./InfoMessage.css";
import React from "react";
import { OK, BAD_REQUEST } from "../../utils/constants";

function InfoMessage({ isShown, message, messageType, code }) {
  const [textMessage, setTextMessage] = React.useState("");

  React.useEffect(() => {
    switch (code) {
      case OK:
        setTextMessage("Данные успешно обновлены");
        break;
      case BAD_REQUEST:
        setTextMessage(getInfoMessage(messageType));
        break;
      default:
        setTextMessage(message);
    }
  }, [code, message, messageType]);

  function getInfoMessage(messageType) {
    switch (messageType) {
      case "profile":
        return "При обновлении профиля произошла ошибка";
      case "register":
        return "При регистрации пользователя произошла ошибка";
      case "login":
        return "Вы ввели неправильный логин или пароль";
      default:
        return "";
    }
  }

  return (
    <div className="message">
      {isShown && (
        <p
          className={`message__text ${
            code === OK && "message__text_type_success"
          }`}
        >
          {textMessage}
        </p>
      )}
    </div>
  );
}

export default InfoMessage;
