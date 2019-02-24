import { createGlobalStyle } from 'styled-components';
import CalibreRegular from 'assets/fonts/Calibre-Regular.woff';
import CalibreRegular2 from 'assets/fonts/Calibre-Regular.woff2';
import CalibreMedium from 'assets/fonts/Calibre-Medium.woff';
import CalibreMedium2 from 'assets/fonts/Calibre-Medium.woff2';
import CalibreBold from 'assets/fonts/Calibre-Bold.woff';
import CalibreBold2 from 'assets/fonts/Calibre-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    font-display: auto;
    src: url(${CalibreRegular});
    src: url(${CalibreRegular2});
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'Calibre';
    font-display: auto;
    src: url(${CalibreMedium});
    src: url(${CalibreMedium2});
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'Calibre';
    font-display: auto;
    src: url(${CalibreBold});
    src: url(${CalibreBold2});
    font-weight: 700;
  }

  body{
    font-family: 'Calibre', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
