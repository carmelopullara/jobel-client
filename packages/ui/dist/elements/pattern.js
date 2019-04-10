import styled from 'styled-components';
import pattern from '../assets/images/pattern.svg';
const Pattern = styled.div`
  position: relative;
  margin-left: -15px;
  margin-right: -15px;
  min-height: 100vh;
  &:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #003774;
    background-image: url(${pattern});
    background-attachment: fixed;
    background-size: cover;
  }
`;
export default Pattern;