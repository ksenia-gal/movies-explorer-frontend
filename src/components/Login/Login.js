import './Login.css';
import Form from "../Form/Form";

function Login({ onLogin, infoMessage }){
  return (
    <Form
      type='signin'
      linkTo='/signup'
      title='Рады видеть!'
      buttonName='Войти'
      subtitle='Ещё не зарегистрированы?'
      linkName='Регистрация'
      onSubmit={onLogin}
      infoMessage={infoMessage}
    />
  );
};
 
export default Login;