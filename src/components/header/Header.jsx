import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  ButtonLogOut,
  HeaderContainer,
  Logo,
  Options,
  Wrapper,
} from './styles';

import { closeUserSession } from '../../actions/authActions';

import logo from '../../assets/images/main-logo.jpg';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(closeUserSession());
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <Link to='/animes'>
          <Logo src={logo} alt='main logo' title='Ir al inicio' />
        </Link>

        <Options>
          <ButtonLogOut onClick={handleLogout} type='button'>
            Cerrar sesión
          </ButtonLogOut>
        </Options>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
