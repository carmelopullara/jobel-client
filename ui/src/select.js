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

// const Select = ({ children, ...rest }) => {
//   return (
//     <SelectWrapper>
//       <StyledSelect as="select" {...rest}>{children}</StyledSelect>
//     </SelectWrapper>
//   );
// };

export default StyledSelect;
