import styled from 'styled-components';

const media = {
  tablet: "@media screen and (min-width: 768px)",
  desktop: "@media screen and (min-width: 1440px)"
};


export const StyledLogOutBtn = styled.button`
width: 131px;
height: 46px;
border: none;
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
position: absolute;

left: 20px;
bottom: 24px;

/* margin-left: 20px;
margin-bottom: 24px; */

font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--btn-text-color);
    letter-spacing: -0.02em;
  background-color: var(--color-button-period-type);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

&:hover,
  :focus {
   cursor: pointer;
   background-color: var(--hover-btn-background-color);
  }

  ${media.tablet} {
    width: 141px;
    height: 56px;
    gap: 11px;
    left: 32px;
  }

  ${media.desktop} {
    width: 141px;
    height: 56px;
  left: 24px;
  }
`;