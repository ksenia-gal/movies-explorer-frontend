import './Login.css';
import Form from "../Form/Form";

function Login(){
  return (
    <Form
      type='signin'
      linkTo='/signup'
      title='Рады видеть!'
      buttonName='Войти'
      subtitle='Ещё не зарегистрированы?'
      linkName='Регистрация'
    />
  );
};
 
export default Login;