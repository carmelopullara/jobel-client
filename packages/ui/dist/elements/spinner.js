import styled, { keyframes } from 'styled-components';
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  width: 1em;
  height: 1em;
  display: inline-block;
  border: 2px solid ${props => props.white ? '#fff' : props.theme.colors.primary};
  border-left-color: transparent;
  border-radius: 50%;
  animation: ${rotate360} 1.2s linear infinite;
`;
export default Spinner;