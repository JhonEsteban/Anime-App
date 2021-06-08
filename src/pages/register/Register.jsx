import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Registrarse</h1>
      <p>
        <input name='name' type='text' placeholder='Nombre' />
      </p>

      <p>
        <input name='email' type='email' placeholder='Correo' />
      </p>

      <p>
        <input name='password' type='password' placeholder='Contraseña' />
      </p>

      <button type='submit'>Registrarse</button>
      <Link to='login'>Ir a Inicio de Sesión</Link>
    </form>
  );
};

export default Register;
