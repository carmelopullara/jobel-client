/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';
import { Link as A } from 'react-router-dom';
import { transparentize as fade, lighten, darken } from 'polished';
import { getColor } from 'styled/utils';

export const Link = styled(A)`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 14px;
  height: ${props => (props.large ? '48px' : '38px')};
  width: ${props => (props.block ? '100%' : '')};
  color: #fff;
  background-color: ${props => getColor(props)};
  box-shadow: inset 0 -1px 2px rgba(0,0,0,.1), 0 2px 4px 0 rgba(0,0,0,.1);
  font-weight: 500;
  font-size: ${props => (props.large ? '16px' : '15px')};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  &:hover{
    background-color: ${props => darken(0.05, getColor(props))};
  }
  &:active{
    background-color: ${props => darken(0.1, getColor(props))};
  }
  &[disabled]{
    opacity: .7;
    cursor: not-allowed;
  }
  & > svg {
    display: inline-block;
    height: 1.2em;
    width: 1.2em;
    margin: 0 6px;
  }
`;

export const Button = Link.withComponent('button');
