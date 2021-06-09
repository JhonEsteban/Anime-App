import { Link } from 'react-router-dom';

import {
  ButtonSubmit,
  Input,
  LoginContainer,
  LoginForm,
} from '../../assets/styles/FormStyles';

import MainLogo from '../../components/mainLogo/MainLogo';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleRegister}>
        <MainLogo />

        <Input name='name' type='text' placeholder='Nombre' />
        <Input name='email' type='email' placeholder='Correo electrónico' />
        <Input name='password' type='password' placeholder='Contraseña' />

        <ButtonSubmit type='submit'>Registrarse</ButtonSubmit>
        <Link to='/login'>Iniciar sesión</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Register;
