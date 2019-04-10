import styled from 'styled-components';
import { transparentize as fade, darken, lighten } from 'polished';
import { PasswordLink } from './common';

export const Field = styled.div`
  position: relative;
  margin-bottom: 1.3rem;
  ${props => props.wrap && `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    & > ${PasswordLink} {
      margin: 0;
      display: inline-block;
    }
  `}
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DoubleField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  & > ${Field} {
    margin-bottom: 0;
    &:first-child{
      margin-right: 6px;
    }
    &:last-child{
      margin-left: 6px;
    }
  }
`;

export const Input = styled.input`
  background-color: #fff;
  color: ${props => props.theme.colors.black};
  padding: ${props => (props.large ? '14px 24px' : '10px 14px')};
  height: ${props => (props.large ? '48px' : '38px')};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.hasError ? fade(0.5, props.theme.colors.danger) : darken(0.1, props.theme.colors.gray))};
  border-radius: 3px;
  width: 100%;
  transition: all .3s ease;
  outline: none;
  &:hover{
    border-color: ${props => (props.hasError ? fade(0.5, props.theme.colors.danger) : darken(0.15, props.theme.colors.gray))};
  }
  &:focus{
    box-shadow: 0 0 0 2px ${props => fade(0.75, props.theme.colors.primary)};
    border-color: ${props => lighten(0.15, props.theme.colors.primary)};
  }
  & select{
    appearance: none;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  margin: 0 0 10px;
`;

export const Error = styled.span`
  color: ${props => props.theme.colors.danger};
  display: block;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  &:empty{
    margin-top: 0;
  }
`;
