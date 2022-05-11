import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import Auth from './Auth';
import MainLogo from '../../components/MainLogo';
import Button from '../../assets/styles/ButtonStyles';

import { LoginForm, Input } from './Styles';

import {
  loginUserWithEmailAndPassword,
  loginUserWithGoogleProvider,
} from '../../redux/auth/middlewares';

const btnProviderStyles = {
  background: '#fff',
  color: '#000',
  hoverBackground: '#eef2f8',
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
    <Auth>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <MainLogo />

        <Input
          name='email'
          type='email'
          autoFocus
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
          hoverColor='#000'
          type='button'
        >
          <FcGoogle />
          <span>Continuar con Google</span>
        </Button>

        <Link to='/auth/register'>Registrarse</Link>
      </LoginForm>
    </Auth>
  );
};

export default Login;
