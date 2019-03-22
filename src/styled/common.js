import styled from 'styled-components';
import { transparentize as fade, darken } from 'polished';
import { Link } from 'react-router-dom';
import { getColor } from 'styled/utils';
import shapes from 'assets/images/sidebar-bg.svg';

export const AuthBlock = styled.div`
  width: 450px;
  max-width: 100%;
  margin: auto;
  > svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;
  }
`;

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const AuthFooter = styled.div`
  text-align: center;
  margin-top: 1rem;
  > p {
    margin-top: .5rem;
  }
  & a {
    ${props => props.hasIcon && `
      display: inline-flex;
      align-items: center;
    `}
    strong{
      font-weight: 500;
    }
    & > svg{
      width: 1em;
      height: 1em;
      transition: all .3s ease;
    }
    &:hover > svg{
      transform: ${props => (props.iconLeft ? 'translateX(-2px)' : 'translateX(2px)')};
    }
  }
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => fade(0.9, getColor(props))};
  border: 1px solid ${props => fade(0.87, getColor(props))};
  border-left-color: ${props => getColor(props)};
  color: ${props => darken(0.1, getColor(props))};
  border-left-width: 3px;
  padding: 10px 16px;
  border-radius: 3px;
  margin: 1rem 0;
  font-size: 0.95rem;
  & > svg {
    color: ${props => darken(0.1, getColor(props))};
    height: 1.2em;
    width: 1.2rem;
    margin-right: 0.4rem;
  }
  a {
    text-decoration: underline;
    font-weight: 500;
    color: ${props => darken(0.1, getColor(props))};
    &:hover{
      color: ${props => darken(0.15, getColor(props))};
    }
  }
`;

export const Gradient = styled.div`
  position: relative;
  margin-left: -15px;
  margin-right: -15px;
  min-height: 100vh;
  background: ${props => `linear-gradient(180deg, ${props.theme.colors.primary}, ${darken(0.1, props.theme.colors.primary)})`};
  &:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${shapes});
    background-size: 100%;
    background-position: top center;
    background-repeat: repeat;
    opacity: .15;
  }
`;

export const PasswordLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  margin-top: 1rem;
`;
