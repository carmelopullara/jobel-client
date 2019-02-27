import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { transparentize as fade, darken } from 'polished';
import { getColor } from 'styled/utils';

export const AuthBlock = styled.div`
  width: 400px;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  > svg {
    margin-bottom: 3rem;
  }
`;

export const AuthFooter = styled.div`
  text-align: center;
  margin-top: 1rem;
  > p {
    margin-top: 1rem;
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

export const Card = styled.div`
  background-color: #fff;
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => fade(0.9, getColor(props))};
  border: 1px solid ${props => fade(0.85, getColor(props))};
  border-left-color: ${props => getColor(props)};
  color: ${props => darken(0.1, getColor(props))};
  border-left-width: 3px;
  padding: 10px 16px;
  border-radius: 3px;
  margin: 1rem 0;
  font-size: 0.9rem;
  & > svg {
    color: ${props => darken(0.1, getColor(props))};
    height: 1.2em;
    width: 1.2rem;
    margin-right: 0.4rem;
  }
`;
