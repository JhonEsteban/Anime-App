import { LogoContainer, Logo, Text, MainLogoSection } from './styles';

import image from '../../assets/images/main-logo.jpg';

const MainLogo = ({ title = '' }) => (
  <MainLogoSection>
    <Text>{title}</Text>

    <LogoContainer>
      <Logo src={image} alt='logo' />
    </LogoContainer>
  </MainLogoSection>
);

export default MainLogo;
