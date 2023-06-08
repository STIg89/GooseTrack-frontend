import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
  mobile: '@media screen and (max-width: 767px)',
};

export const Moon = styled.svg`
  width: 26px;
  height: 26px;
  fill: var(--color-button-period-type);
  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const Sun = styled.svg`
  width: 26px;
  height: 26px;
  fill: var(--color-button-period-type);
  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  text-align: center;
  padding: 0;
  margin-right: 17px;
  margin-left: 27px;
  cursor: pointer;

  ${media.mobile} {
    margin-right: 10px;
    margin-left: 20px;
  }
`;
