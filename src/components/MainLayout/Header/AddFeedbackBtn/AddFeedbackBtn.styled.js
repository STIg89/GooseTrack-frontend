import styled from 'styled-components';

const media = {
  mobile: '@media screen and (max-width: 374px)',
  tablet: "@media screen and (min-width: 768px)",
  desktop: "@media screen and (min-width: 1440px)"
};

export const StyledBtn = styled.button`

width: 97px;
height: 32px;

background: #3E85F3;
border-radius: 10px;
border: none;
margin-left: 0;
background-color: var(--accent-background-color);

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
  
  ${media.mobile} {
    display: none;
    }

   ${media.tablet} {
  width: 130px;
  height: 42px;
  font-size: 14px;
  line-height: 18px;
  }


  `
