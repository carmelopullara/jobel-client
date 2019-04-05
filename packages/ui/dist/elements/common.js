import styled from 'styled-components';
import { transparentize as fade, darken, lighten } from 'polished';
import { Link } from 'react-router-dom';
import { getColor } from './utils';
export const AuthBlock = styled.div`
  width: ${props => props.small ? '380px' : '450px'};
  max-width: 100%;
  margin: auto;
  > svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;
  }
`;
export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
export const Alert = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => lighten(0.425, getColor(props))};
  border: 1px solid ${props => lighten(0.35, getColor(props))};
  border-left-color: ${props => getColor(props)};
  color: ${props => darken(0.1, getColor(props))};
  border-left-width: 3px;
  padding: 10px 16px;
  border-radius: 3px;
  margin: 1rem 0;
  font-size: 0.95rem;
  justify-content: ${props => props.center ? 'center' : ''};
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
export const PasswordLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  margin-top: 1rem;
`;