import logo from '../../assets/images/main-logo.jpg';

import {
  FooterLogo,
  FooterSection,
  FooterDescription,
  DevelopedBy,
  Profession,
} from './styles';

const Footer = () => (
  <FooterSection>
    <FooterLogo src={logo} alt='footer logo' />

    <FooterDescription>
      <DevelopedBy>Desarrollado por</DevelopedBy>

      <a
        href='https://www.linkedin.com/in/jhon-esteban-herrera'
        target='_blank'
        rel='noreferrer'
      >
        Jhon Esteban Herrera
      </a>

      <Profession>Desarrollador Frontend</Profession>
    </FooterDescription>
  </FooterSection>
);

export default Footer;
