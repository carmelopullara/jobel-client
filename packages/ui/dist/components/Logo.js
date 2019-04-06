import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/images/logotype.svg';
const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.8rem;
  img {
    width: 45px;
  }
`;

const Logo = () => {
  return React.createElement(LogoWrapper, null, React.createElement("img", {
    src: LogoImg,
    alt: "Jobel"
  }));
};

export default Logo;