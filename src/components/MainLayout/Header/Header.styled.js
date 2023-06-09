import styled from 'styled-components';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const Container = styled.div`
  display: flex;
  margin-bottom: 32px;
  justify-content: space-between;
  position: relative;

  ${media.desktop} {
    justify-content: space-between;
  }
`;

export const NoAvatar = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-radius: 50%;
  margin-left: 8px;
  color: var(--secondary-text-color);
  background-color: var(--avatar-background-color);
  font-size: 25px;
  outline: 2px solid var(--accent-background-color);

  ${media.tablet} {
    width: 44px;
    height: 44px;
    margin-left: 14px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: rigth;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 8px;
  outline: 3px solid var(--accent-background-color);

  ${media.tablet} {
    width: 44px;
    height: 44px;
    margin-left: 14px;
  }
`;
export const BrgMenu = styled.svg`
  width: 34px;
  height: 34px;
  stroke: var(--primary-text-color);

  &:hover,
  :focus {
    cursor: pointer;
  }
`;

export const BrgBtn = styled.button`
  background: none;
  border: none;

  ${media.desktop} {
    display: none;
  }
`;
export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: var(--primary-text-color);
  letter-spacing: -0.02em;
  display: none;

    ${media.desktop} {
    display: flex;
  }
`;

export const UserName = styled.h4`
  text-align: center;

  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-text-color);

  ${media.desktop} {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const TitleCalendar = styled.div`
  display: flex;
  text-align: left;
`;

export const HeaderParagraph = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
  display: none;
  color: var(--primary-text-color);

  ${media.desktop} {
    font-size: 18px;
    line-height: 18px;
    display: block;
  }
`;

export const Span = styled.span`
  color: var(--accent-text-color);
`;

export const Div = styled.div`
  display: none;

  ${media.desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const GooseImg = styled.img`
  width: 64px;
  height: 60px;

  display: none;

  ${media.desktop} {
    display: flex;
  }
`;
