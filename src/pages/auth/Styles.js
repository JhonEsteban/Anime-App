import styled from 'styled-components';
import fadeIn from '../../assets/styles/animations';

const AuthSection = styled.section`
  min-height: 100vh;
  background-color: #000;
  text-align: center;
  color: #fff;
  z-index: 10;

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const BannerContainer = styled.div`
  opacity: 0.8;

  @media screen and (min-width: 720px) {
    height: 100vh;
  }
`;

const Banner = styled.img`
  max-width: 100%;

  @media screen and (min-width: 720px) {
    height: 100vh;
  }
`;

const AuthContainer = styled.div`
  padding: 0 15px 35px;
  ${fadeIn({ time: '2s' })}

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

const LoginForm = styled.form`
  ${fadeIn({ time: '2s' })};
`;

const Input = styled.input`
  display: block;
  outline: none;
  width: 100%;
  max-width: 340px;
  margin: 15px auto 5px;
  padding: 13px 10px;
  border: none;
  border-radius: 3px;
  font-size: 1.3rem;
`;

export {
  AuthSection,
  BannerContainer,
  Banner,
  AuthContainer,
  LoginForm,
  Input,
};
