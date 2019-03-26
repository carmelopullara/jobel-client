import styled from 'styled-components';
import { transparentize as fade, darken, lighten } from 'polished';
import { Alert } from 'styled/common';

const Card = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid ${props => darken(0.05, props.theme.colors.gray)};
  box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.04);
  padding-top: 3.5rem;
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
