import styled from 'styled-components';

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

export const FullScreenSection = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.gray};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`;
