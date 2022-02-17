import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import {
  Input,
  LoginContainer,
  LoginForm,
} from '../../assets/styles/FormStyles';

import Button from '../../assets/styles/ButtonStyles';

import { registerUserWithEmailAndPassword } from '../../actions/authActions';

import MainLogo from '../../components/mainLogo/MainLogo';

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, email, password }) => {
    dispatch(registerUserWithEmailAndPassword(name, email, password));
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <MainLogo />

        <Input
          name='name'
          type='text'
          placeholder='Nombre'
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es requerido',
            },
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres',
            },
          })}
        />
        {errors.name && (
          <p style={{ color: 'red', margin: '0' }}>{errors.name.message}</p>
        )}

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

        <Button type='submit'>Crear cuenta</Button>

        <Link to='/login'>Iniciar sesión</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Register;
