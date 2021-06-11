import { Link } from 'react-router-dom';
import Button from '../../assets/styles/ButtonStyles';

import {
  Input,
  LoginForm,
  LoginContainer,
} from '../../assets/styles/FormStyles';

import MainLogo from '../../components/mainLogo/MainLogo';
import useForm from '../../hooks/useForm';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { formValues, handleInputChange } = useForm(initialValues);
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <MainLogo />

        <Input
          onChange={handleInputChange}
          value={email}
          name='email'
          type='email'
          placeholder='Correo electrónico'
        />

        <Input
          onChange={handleInputChange}
          value={password}
          name='password'
          type='password'
          placeholder='Contraseña'
        />

        <Button type='submit'>Iniciar Sesión</Button>

        <Link to='/register'>Crear cuenta</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
