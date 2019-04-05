function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import styled from 'styled-components';
import { Input } from './form';
const SelectWrapper = styled.div`
  position: relative;
  &:after{
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -2px;
    right: 18px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid ${props => props.theme.colors.black};
  }
`;
const StyledSelect = styled(Input)`
  appearance: none;
  cursor: pointer;
`;

const Select = ({
  children,
  ...rest
}) => {
  return React.createElement(SelectWrapper, null, React.createElement(StyledSelect, _extends({
    as: "select"
  }, rest), children));
};

export default Select;