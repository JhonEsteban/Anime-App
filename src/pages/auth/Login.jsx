import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { useForm } from 'react-hook-form';

import MainLogo from '../../components/mainLogo/MainLogo';

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

const btnProviderStyles = {
  background: '#fff',
  color: '#000',
  hoverBackground: '#16417a',
  hoverColor: '#fff',
};

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    dispatch(loginUserWithEmailAndPassword(email, password));
  };

  const handleLoginWithProvider = () => {
    dispatch(loginUserWithGoogleProvider());
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <MainLogo />

        <Input
          name='email'
          type='email'
          placeholder='Correo electrónico'
          {...register('email', {
            required: {
              value: true,
              message: 'El correo electrónico es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Correo electrónico no válido',
              },
            },
          })}
        />
        {errors.email && (
          <p style={{ color: 'red', margin: '0' }}>{errors.email.message}</p>
        )}

        <Input
          name='password'
          type='password'
          placeholder='Contraseña'
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es requerida',
            },
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />
        {errors.password && (
          <p style={{ color: 'red', margin: '0' }}>{errors.password.message}</p>
        )}

        <Button type='submit'>Iniciar sesión</Button>

        <Button
          onClick={handleLoginWithProvider}
          btnProvider
          {...btnProviderStyles}
          type='button'
        >
          <FcGoogle />
          <span>Continuar con Google</span>
        </Button>

        <Link to='/register'>Registrarse</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
