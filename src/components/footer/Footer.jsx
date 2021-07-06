import logo from '../../assets/images/main-logo.jpg';

import { FooterLogo, FooterSection, FooterTitle } from './styles';

const Footer = () => (
  <FooterSection>
    <FooterLogo src={logo} alt='footer logo' />
    <FooterTitle>Desarrollado por Jhon Esteban Herrera</FooterTitle>
  </FooterSection>
);

export default Footer;
