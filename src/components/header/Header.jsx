import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  Button,
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
  const history = useHistory();

  const handleLogout = () => {
    dispatch(closeUserSession());
  };

  const handleMyFavorites = () => {
    history.push('/favoriteAnimes');
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <Link to='/animes'>
          <Logo src={logo} alt='main logo' title='Ir al inicio' />
        </Link>

        <Options>
          <Button onClick={handleMyFavorites} type='button'>
            Mis Favoritos
          </Button>

          <ButtonLogOut onClick={handleLogout} type='button'>
            Salir
          </ButtonLogOut>
        </Options>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
