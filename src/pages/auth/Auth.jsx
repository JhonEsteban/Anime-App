import { AuthSection, BannerContainer, Banner, AuthContainer } from './Styles';

import Image from '../../assets/images/background-image.png';

const Auth = ({ children }) => {
  return (
    <AuthSection>
      <BannerContainer>
        <Banner src={Image} alt='banner' />
      </BannerContainer>

      <AuthContainer>{children}</AuthContainer>
    </AuthSection>
  );
};

export default Auth;
