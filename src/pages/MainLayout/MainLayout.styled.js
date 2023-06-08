import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const MainContainer = styled.div`
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  background: var(--secondary-background-color);
  ${media.tablet} {
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }

  ${media.desktop} {
    padding-top: 40px;
    padding-left: 320px;
  }
`;

export const DivSidebar = styled.div`
 visibility: ${props => props.isOpen ? "visible" : "none"};
`