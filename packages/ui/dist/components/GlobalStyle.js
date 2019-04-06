import { createGlobalStyle } from 'styled-components';
import { darken, lighten, desaturate } from 'polished';
import CalibreRegular from '../assets/fonts/Calibre-Regular.woff';
import CalibreRegular2 from '../assets/fonts/Calibre-Regular.woff2';
import CalibreMedium from '../assets/fonts/Calibre-Medium.woff';
import CalibreMedium2 from '../assets/fonts/Calibre-Medium.woff2';
import CalibreBold from '../assets/fonts/Calibre-Bold.woff';
import CalibreBold2 from '../assets/fonts/Calibre-Bold.woff2';
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

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  ::placeholder{
    color: ${props => desaturate(0.1, lighten(0.3, props.theme.colors.black))};
  }

  body{
    font-family: 'Calibre', sans-serif;
    font-weight: 400;
    color: ${props => desaturate(0.1, lighten(0.25, props.theme.colors.black))};
    background-color: ${props => props.theme.colors.gray};
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    &:hover{
      color: ${props => darken(0.15, props.theme.colors.primary)};
    }
  }

  p{
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: ${props => props.theme.colors.black};
    letter-spacing: -0.03rem;
  }

  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
  
  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }
`;
export default GlobalStyle;