import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  ButtonLogOut,
  HeaderContainer,
  Logo,
  Options,
  Wrapper,
  ButtonLogo,
} from './styles';

import { closeUserSession } from '../../redux/auth/middlewares';

import logo from '../../assets/images/main-logo.jpg';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(closeUserSession());
  };

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <ButtonLogo onClick={handleReturn} type='button'>
          <Logo src={logo} alt='main logo' title='Ir al inicio' />
        </ButtonLogo>

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
