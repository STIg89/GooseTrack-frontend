import styled from 'styled-components';
import { Link } from 'react-router-dom';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
  mobile: '@media screen and (max-width: 767px)',
};

export const Container = styled.div`
  min-height: 100vh;
  background: var(--auth-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 375px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const CloudButton = styled(Link)`
  ${media.tablet} {
  display: flex;
  position: fixed;
  top: 25px;
  left: 80px;
  width: 5em;
  height: 5em;
  color: var(--cloud-text-color);
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-width: 0.25em;
  border-style: solid;
  border-color: var(--border-cloud-color);
  border-radius: 50% 50% 0 0;
  z-index: 9999;

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: -0.25em;
    background: inherit;
    border-width: 0.25em;
    border-style: solid;
    border-color: var(--border-cloud-color);
  }

  &:after {
    right: 80%;
    width: 80%;
    height: 80%;
    border-right: none;
    border-radius: 50% 50% 0;
  }

  &:before {
    left: 80%;
    width: 60%;
    height: 60%;
    border-left: none;
    border-radius: 50% 50% 50% 0;
  }

  &:hover {
    background-color: #abcdef;
    color: #ffffff;
  }  
}
}`;

export const ButtonText = styled.span`
  ${media.tablet} {
    display: inline-block;
    line-height: 1;
    z-index: 5;
    padding-top: 25px;
    font-weight: 900;
  }

  ${media.mobile} {
    margin-left: 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    border-bottom: 1px solid var(--color-button-period-type);
    text-decoration: none;
    color: var(--accent-background-color);
    text-shadow: var(--logo-txt-shadow);

    &:hover,
    :focus {
      color: var(--accent-background-color);
      border-color: var(--accent-background-color);
      transform: scale(1.1);
    }
  }

    @media (max-width: 375px) {
      margin: 0;
    }
  }
`;
