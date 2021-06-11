import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';

import {
  Input,
  LoginContainer,
  LoginForm,
} from '../../assets/styles/FormStyles';

import Button from '../../assets/styles/ButtonStyles';

import {
  registerUserWithEmailAndPassword,
  registerUserWithGoogleProvider,
} from '../../actions/authAction';

import useForm from '../../hooks/useForm';
import MainLogo from '../../components/mainLogo/MainLogo';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const btnProviderStyles = {
  background: '#fff',
  color: '#000',
  hoverBackground: '#16417a',
  hoverColor: '#fff',
};

const Register = () => {
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm(initialValues);
  const { name, email, password } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUserWithEmailAndPassword(name, email, password));
  };

  const handleRegisterWithProvider = () => {
    dispatch(registerUserWithGoogleProvider());
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleRegister}>
        <MainLogo />

        <Input
          onChange={handleInputChange}
          value={name}
          name='name'
          type='text'
          placeholder='Nombre'
        />

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

        <Button type='submit'>Registrarte</Button>

        <Button
          onClick={handleRegisterWithProvider}
          btnProvider
          {...btnProviderStyles}
          type='button'
        >
          <FcGoogle />
          <span>Regístrate con Google</span>
        </Button>

        <Link to='/login'>Inicia sesión</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Register;
