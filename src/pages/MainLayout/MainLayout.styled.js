import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const MainContainer = styled.div`
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
  background: var(--secondary-background-color);
  ${media.tablet} {
    margin-top: 24px;
    margin-left: 32px;
    margin-right: 32px;
  }

  ${media.desktop} {
    margin-top: 40px;
    margin-left: 320px;
  }
`;
