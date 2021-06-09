import styled from 'styled-components';

const MainLogoSection = styled.section`
  text-align: center;
  margin-bottom: 50px;
`;

const LogoContainer = styled.figure`
  margin: 0 auto;
  width: 80px;
`;

const Logo = styled.img`
  border-radius: 50%;
  max-width: 100%;
`;

const Text = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  color: #fff;
`;

export { MainLogoSection, LogoContainer, Logo, Text };
