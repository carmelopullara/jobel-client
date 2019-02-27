import styled from 'styled-components';
import { transparentize as fade, darken } from 'polished';
import { getColor } from 'styled/utils';

const Alert = styled.div`
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

export default Alert;
