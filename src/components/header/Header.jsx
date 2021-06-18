import { useDispatch } from 'react-redux';
import { closeUserSession } from '../../actions/authAction';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(closeUserSession());
  };

  return (
    <header>
      <h1>Header Component</h1>
      <button onClick={handleLogout} type='button'>
        Salir
      </button>
    </header>
  );
};

export default Header;
