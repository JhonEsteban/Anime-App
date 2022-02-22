import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  text-align: center;
`;

const appLoadingAnimation = keyframes`
  to{opacity: 0.5}
`;

const LoadingText = styled.p`
  font-family: RobotoRegular, Arial, Helvetica;
  font-size: 2.8rem;
  animation: ${appLoadingAnimation} 700ms linear infinite alternate;
`;

export { LoadingContainer, LoadingText };
