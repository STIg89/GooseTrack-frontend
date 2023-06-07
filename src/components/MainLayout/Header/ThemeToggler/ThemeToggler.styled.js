// import styled from 'styled-components';

// const media = {
//     tablet: "@media screen and (min-width: 768px)",
//     desktop: "@media screen and (min-width: 1440px)"
// };

// export const Toggler = styled.button`
// background: none;
// border: none;
// display: flex;
// align-items: center;
// justify-content: center;
// height: 20px;
// text-align: center;
// padding: 0;
// font-size: 32px;
// color: var(--accent-background-color);

// ${media.tablet} {
//     height: 32px;
//   }
//   `

import styled from 'styled-components';

export const Moon = styled.svg`
  width: 26px;
  height: 26px;
  fill: var(--color-button-period-type);
`;

export const Sun = styled.svg`
  width: 26px;
  height: 26px;
  margin-right: 17px;
  fill: var(--color-button-period-type);
`;

export const Button = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
