import styled from 'styled-components';
import { transparentize as fade, darken } from 'polished';

export const Field = styled.div`
  position: relative;
  margin-bottom: 1.2rem;
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
  box-shadow: ${props => (props.shadow ? `2px 2px 10px ${fade(0.95, props.theme.colors.black)}` : '')};
  border-radius: 3px;
  width: 100%;
  transition: all .3s ease;
  outline: none;
  &:hover{
    border-color: ${props => (props.hasError ? fade(0.5, props.theme.colors.danger) : darken(0.15, props.theme.colors.gray))};
  }
  &:focus{
    border-color: ${props => (props.hasError ? props.theme.colors.danger : props.theme.colors.primary)};
  }
  & select{
    appearance: none;
  }
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
