import {
  WelcomeSection,
  BannerContainer,
  Banner,
  Wrapper,
  MainText,
} from './Styles';

import Image from '../../assets/images/background-image.png';
import MainLogo from '../../components/mainLogo/MainLogo';

import Button from '../../assets/styles/ButtonStyles';

const Welcome = ({ history }) => {
  const handleRegister = () => history.push('/register');

  const handleLogin = () => history.push('/login');

  return (
    <WelcomeSection>
      <BannerContainer>
        <Banner src={Image} alt='banner' />
      </BannerContainer>

      <Wrapper>
        <MainLogo title='Animes Prime' />
        <MainText>Encuentra contenido sobre tus animes favoritos</MainText>

        <Button onClick={handleRegister} type='button'>
          Registrarse
        </Button>

        <Button onClick={handleLogin} type='button'>
          Iniciar sesión
        </Button>
      </Wrapper>
    </WelcomeSection>
  );
};

export default Welcome;
