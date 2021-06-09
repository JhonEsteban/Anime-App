import { Link } from 'react-router-dom';

import {
  Input,
  LoginForm,
  ButtonSubmit,
  LoginContainer,
} from '../../assets/styles/FormStyles';

import MainLogo from '../../components/mainLogo/MainLogo';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <MainLogo />
        <Input name='email' type='email' placeholder='Correo electrónico' />

        <Input name='password' type='password' placeholder='Contraseña' />

        <ButtonSubmit type='submit'>Iniciar Sesión</ButtonSubmit>

        <Link to='/register'>Crear cuenta</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
