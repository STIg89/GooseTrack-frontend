import styled from "styled-components";

const media = {
    tablet: "@media screen and (min-width: 768px)",
    desktop: "@media screen and (min-width: 1440px)"
  };

export const Container = styled.div`
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 65px;
    padding-bottom: 100px;
    background-color: var(--primary-background-color);

    ${media.tablet} {
        padding-right: 32px;
        padding-left: 32px;
  }

  ${media.desktop} {
        padding-right: 128px;
        padding-left: 128px;
  }
`;

export const List = styled.ul`
    margin: 0 auto;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    ${media.tablet} {
        min-height: auto;
    }
    ${media.desktop} {
        max-width: 1440px;
    }
`;

export const ItemWrapper = styled.li`
  min-height: auto;
  margin-bottom: 64px;
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 2s ease, transform 2s ease;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.animated {
    opacity: 1;
    transform: translateX(0);
  }

  &.reverse {
    margin-bottom: 64px;
    opacity: 0;
    transform: translateX(100px);
    transition: opacity 2s ease, transform 2s ease;

    ${media.desktop} {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-left: 0;
    }
    &.animated {
        opacity: 1;
        transform: translateX(0);
  }
  }
`;

export const TextWrapper = styled.div`
  max-width: 375px;
    ${media.tablet} {
        margin-left: 32px;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 15px; 
    }
    ${media.desktop} {
        margin: 70px;
        margin-top: 194px;
        display: block;
        padding-left: 0;
    }
    &.text-reverse { 
        margin-left: auto;
    }
`;

export const TextNumber = styled.p`
    font-size: 80px;
    font-weight: 700;
    line-height: 100%;
    padding: 0;
    margin: 20px 0 20px;
    color: var(--accent-background-color);

    ${media.tablet} {
        font-size: 104px;
        margin-right: 50px
    }
`;

export const TextButton = styled.button`
    font-family: Inter, sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: var(--accent-background-color);
    width: 214px;
    height: 56px;
    background-color: var(--auth-bg-color);
    border-radius: 44px;
    border: none;

    ${media.tablet} {
        margin-right: 20px;
        font-size: 40px;
        line-height: 44px;

        width: 264px;
        height: 56px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-family: Inter;
    font-weight: 700;
    line-height: 40px;
    color: var(--primary-text-color);
    margin-top: 8px;
    margin-bottom: 20px;

    ${media.tablet} {
        font-size: 40px ;
        line-height: 44px;
    }
`;

export const Paragraph = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;  
    min-height: 90px;
    margin: 0 0 22px 0;

    ${media.tablet} {
        width: 350px;
    }
    ${media.desktop} {
        width: 276px;
        height: 108px;
        margin: 15px 0px;
    }
`;

export const Image = styled.img`
    width: 100%;
    margin: 0;

    ${media.tablet} {
        margin-top: 30px;
        max-width: 704px;
        max-height: 700px;
        margin: 0 auto;
    }
    ${media.desktop} {
        width: 604px;
        height: 700px;
        margin: 0;
    }
`;
