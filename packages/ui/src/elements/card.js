import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Alert } from './common';

const Card = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 4px 0 rgba(63,63,68,0.15);
  padding-top: 2.8rem;
  border-radius: 5px;
`;

Card.Header = styled.div`
  padding: 0 2.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

Card.Body = styled.div`
  padding: 0 2.8rem 2.8rem;
  & > ${Alert} {
    padding: 1rem;
    margin-left: -2.8rem;
    margin-right: -2.8rem;
    margin-bottom: 2rem;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  }
`;

Card.Footer = styled.div`
  padding: 1.3rem 2.8rem;
  /* background-color: ${props => lighten(0.01, props.theme.colors.gray)}; */
  border-top: 1px solid ${props => darken(0.04, props.theme.colors.gray)};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  text-align: center;
  p{
    margin-bottom: 0;
  }
  strong {
    font-weight: 500;
  }
`;

export default Card;
