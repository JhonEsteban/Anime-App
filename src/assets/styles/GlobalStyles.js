import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
  }

  img {
    display: block;
    object-fit: cover;
  }
`;

export default GlobalStyles;
