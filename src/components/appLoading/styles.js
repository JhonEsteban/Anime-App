import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  padding-top: 20vh;
  text-align: center;
  font-size: 5rem;
  background-color: black;
  color: white;
`;

const appLoadingAnimation = keyframes`
  to{opacity: 0}
`;

const Loader = styled.section`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  animation: ${appLoadingAnimation} 700ms linear infinite alternate;
`;

export { Container, Loader };
