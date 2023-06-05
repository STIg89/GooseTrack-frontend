import styled from 'styled-components';

const media = {
    tablet: "@media screen and (min-width: 768px)",
    desktop: "@media screen and (min-width: 1440px)"
};

export const StyledBtn = styled.button`
 padding: 8px 20px;
gap: 10px;

width: 97px;
height: 32px;

background: #3E85F3;
border-radius: 10px;
border: none;
background-color: var(--accent-background-color);
margin-right: 18px;

font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: var(--btn-text-color);

&:hover,
  :focus {
   cursor: pointer;
   background-color: var(--hover-btn-background-color);
  }

  ${media.tablet} {
    margin-right: 24px;
  }
`;

