import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  min-height: ${props => (props.fullHeight ? '100vh' : '')};
  background-color: ${props => props.bg};
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 ${props => 100 / 12 * props.col}%;
  max-width: ${props => 100 / 12 * props.col}%;
  @media(min-width: 544px) {
    flex: 0 0 ${props => 100 / 12 * props.sm}%;
    max-width: ${props => 100 / 12 * props.sm}%;
  }
  @media(min-width: 768px) {
    flex: 0 0 ${props => 100 / 12 * props.md}%;
    max-width: ${props => 100 / 12 * props.md}%;
  }
  @media(min-width: 992px) {
    flex: 0 0 ${props => 100 / 12 * props.lg}%;
    max-width: ${props => 100 / 12 * props.lg}%;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
