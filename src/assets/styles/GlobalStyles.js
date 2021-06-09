import { createGlobalStyle } from 'styled-components';

import RobotoLight from '../fonts/Roboto-Light.ttf';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'RobotoLight';
    src: url(${RobotoLight});
  }

  @font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoLight});
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: RobotoLight, Arial, Helvetica;
  }

  img {
    display: block;
    object-fit: cover;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
      color: #fffc;
    }
  }

 
`;

export default GlobalStyles;
