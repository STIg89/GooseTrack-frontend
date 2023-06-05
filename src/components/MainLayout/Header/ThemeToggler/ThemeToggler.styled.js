import styled from 'styled-components';

const media = {
    tablet: "@media screen and (min-width: 768px)",
    desktop: "@media screen and (min-width: 1440px)"
};


export const Toggler = styled.button`
background: none;
border: none;
display: flex;
align-items: center;
justify-content: center;
height: 20px;
text-align: center;
padding: 0;
font-size: 32px;
color: var(--accent-background-color);

${media.tablet} {
    height: 32px;
  }
  `