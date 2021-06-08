import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Inicio de Sesión</h1>
      <p>
        <input name='email' type='email' placeholder='Correo' />
      </p>

      <p>
        <input name='password' type='password' placeholder='Contraseña' />
      </p>

      <button type='submit'>Iniciar Sesión</button>
      <Link to='/register'>Crear Cuenta</Link>
    </form>
  );
};

export default Login;
