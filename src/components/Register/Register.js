import './Register.css';
import Form from '../Form/Form';


function Register({ onRegister, infoMessage }){

  return (
    <Form
      type='signup'
      linkTo='/signin'
      title='Добро пожаловать!'
      buttonName='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
      onSubmit={onRegister}
      infoMessage={infoMessage}
    >
    </Form>
  );
};
  
export default Register;