import './Register.css';
import Form from '../Form/Form';


function Register(){

  return (
    <Form
      type='signup'
      linkTo='/signin'
      title='Добро пожаловать!'
      buttonName='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
    >
    </Form>
  );
};
  
export default Register;