import styled from 'styled-components';

export const AuthBlock = styled.div`
  width: 400px;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  > svg {
    margin-bottom: 3rem;
  }
`;

export const AuthFooter = styled.div`
  text-align: center;
  & a {
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    & > svg{
      width: 1em;
      height: 1em;
      transition: all .3s ease;
    }
    &:hover > svg{
      transform: ${props => (props.iconLeft ? 'translateX(-2px)' : 'translateX(2px)')};
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
`;
