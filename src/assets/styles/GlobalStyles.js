import { createGlobalStyle } from 'styled-components';

import RobotoLight from '../fonts/Roboto-Light.ttf';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'RobotoLight';
    font-weight: 300;
    src: url(${RobotoLight});
  }

  @font-face {
    font-family: 'RobotoRegular';
    font-weight: 400;
    src: url(${RobotoRegular});
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

    &:hover {
      color: #fffc;
    }
  }

 button {
  font-family: RobotoRegular, Arial, Helvetica;
 }

`;

export default GlobalStyles;
