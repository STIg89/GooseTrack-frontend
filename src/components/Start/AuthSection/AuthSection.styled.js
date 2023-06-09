import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const media = {
  tablet: "@media screen and (min-width: 768px)",
  desktop: "@media screen and (min-width: 1440px)"
};

export const Container = styled.div`
  margin: 0 auto;
  height: auto;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 812px;
  background-color: var(--accent-background-color);

  ${media.tablet} {
    height: 1024px;
  }

  ${media.desktop} {
    height: 770px;
  }
`;

export const Img = styled.img`
  display: block;
  margin-top: 232px;
  width: auto;
  height: 142px;

  ${media.tablet} {
    margin-bottom: 80px;
    margin-top: 331px;
  }

  ${media.desktop} {
    margin-top: 187px;
  }
`;

export const MainTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  color: #ffffff;
  font-size: 44px;
  font-family: var(--secondary-font);
  font-weight: 400;
  line-height: 48px;

  ${media.tablet} {
    margin-bottom: 80px;
    font-size: 120px;
  }
`;

export const SpanTitle = styled.span`
  font-style: italic;
`;

export const BoxBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const BtnSignUp = styled(NavLink)`
  display: none;

  &:focus {
      color: #2b78ef;
      background-color: #ffffff;
      
    }

    &:hover {
      color: #2b78ef;
      background-color: #ffffff;
    }

  ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    width: 121px;
    height: 46px;
    margin: 0;
    border: 0;
    border-radius: 15px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    transition: all var(--animation);
  }
`;

export const SvgIcon = styled.svg`
    fill: none;
    stroke: var(--accent-background-color);
    width: 18px;
    margin-left: 6px;
    transition: all var(--animation);
`;

export const BtnLogIn = styled(NavLink)`
  width: 131px;
  height: 46px;
  padding: 0;
  border: 0;
  border-radius: 15px;
  color: var(--accent-background-color);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all var(--animation);

  &:hover ${SvgIcon} {
            transform: scale(1.2);
            stroke: #ffffff;
        }
        &:focus ${SvgIcon} {
            stroke: var(--primary-background-color);
        }
        &:focus {
            color: var(--btn-text-color);
            background-color: #1e63cc;
            
        }
        &:hover {
            color: var(--btn-text-color);
            background-color: #1e63cc;
        }

    ${media.tablet} {
        margin: 0;
        padding: 14px 22px;
        border: 0;
        border-radius: 15px;
        color: var(--accent-background-color);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
  }
`;

export const BtnSignUpMob = styled.button`
    width: 121px;
    height: 46px;
    margin-top: 200px;
    border-radius: 15px;
    text-decoration: underline;
    display: block;
    background-color: transparent;
    border: 0;
    color: var(--btn-text-color);

    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    line-height: 14px;

    &:focus {
      color: var(--accent-text-color);
      background-color: var(--primary-background-color);
      
    }

    &:hover {
        color: var(--accent-text-color);
        background-color: var(--primary-background-color);
    }

    ${media.tablet} {
        display: none;
    } 
`;

