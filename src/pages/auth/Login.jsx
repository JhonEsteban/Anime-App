import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import MainLogo from '../../components/mainLogo/MainLogo';

import useForm from '../../hooks/useForm';

import {
  loginUserWithEmailAndPassword,
  loginUserWithGoogleProvider,
} from '../../actions/authActions';

import {
  Input,
  LoginForm,
  LoginContainer,
} from '../../assets/styles/FormStyles';

import Button from '../../assets/styles/ButtonStyles';

const initialValues = {
  email: '',
  password: '',
};

const btnProviderStyles = {
  background: '#fff',
  color: '#000',
  hoverBackground: '#16417a',
  hoverColor: '#fff',
};

const Login = () => {
  const { formValues, handleInputChange } = useForm(initialValues);
  const { email, password } = formValues;

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserWithEmailAndPassword(email, password));
  };

  const handleLoginWithProvider = () => {
    dispatch(loginUserWithGoogleProvider());
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
        <Button
          onClick={handleLoginWithProvider}
          btnProvider
          {...btnProviderStyles}
          type='button'
        >
          <FcGoogle />
          <span>Iniciar con Google</span>
        </Button>

        <Link to='/register'>Crear cuenta</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
