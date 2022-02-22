import styled from 'styled-components';
import fadeIn from '../../assets/styles/animations';

const WelcomeSection = styled.section`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  text-align: center;
  z-index: 10;

  @media screen and (min-width: 720px) {
    display: flex;
  }
`;

const BannerContainer = styled.div`
  opacity: 0.8;
  ${fadeIn({ time: '2s' })}

  @media screen and (min-width: 720px) {
    width: 50%;
    height: 100vh;
  }
`;

const Banner = styled.img`
  max-width: 100%;
  ${fadeIn({ time: '2s' })}

  @media screen and (min-width: 720px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  ${fadeIn({ time: '2s' })}
  padding: 0 15px 35px;

  @media screen and (min-width: 720px) {
    padding: 0 20px;
    min-width: 50%;
    margin: 0;
    align-self: center;
  }
  @media screen and (min-width: 920px) {
    min-width: 40%;
  }
`;

const MainText = styled.p`
  font-size: 1.8rem;
  line-height: 28px;
`;

export { WelcomeSection, BannerContainer, Banner, Wrapper, MainText };
