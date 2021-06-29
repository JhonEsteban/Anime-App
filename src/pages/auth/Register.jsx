import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Input,
  LoginContainer,
  LoginForm,
} from '../../assets/styles/FormStyles';

import Button from '../../assets/styles/ButtonStyles';

import { registerUserWithEmailAndPassword } from '../../actions/authActions';

import useForm from '../../hooks/useForm';
import MainLogo from '../../components/mainLogo/MainLogo';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm(initialValues);
  const { name, email, password } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUserWithEmailAndPassword(name, email, password));
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

        <Link to='/login'>Inicia sesión</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Register;
