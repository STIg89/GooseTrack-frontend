import styled from 'styled-components';
const mainBlue = '#3E85F3';

export const ReviewsSliderStyled = styled.main`
  font-family: 'Inter';
  display: flex;
  flex-direction: column;
  row-gap: 64px;
  background-color: var(--primary-background-color);
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 32px;
    row-gap: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
    row-gap: 100px;
    padding-bottom: 118px;
  }

  & ul.content-gap {
    display: flex;
    flex-direction: column;
    row-gap: 64px;
    padding: 0;
    margin: 0;
    margin-bottom: 0;
  }

  & ul.content-comments {
    display: flex;
    margin: 0;
    list-style: none;
    padding: 0;
  }

  & .content-h2 {
    font-size: 28px;
    color: ${mainBlue};
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.14;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
      margin-bottom: 50px;
    }
  }
  & .content-review {
    height: 324px;
    position: relative;
    @media screen and (min-width: 768px) and (max-width: 1439px) {
      height: 360px;
    }
    @media screen and (min-width: 1440px) {
      height: 374px;
      width: 1184px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  & .slider {
    height: fit-content;
  }

  & .slick-track {
    display: flex;
  }
  & .slick-list {
    overflow: hidden;
  }
  & .slick-arrow {
    position: absolute;
    bottom: 0;
    z-index: 20;
  }

  & svg.svg-arrow {
    width: 39px;
    height: 50px;
    fill: var(--primary-text-color);
    @media screen and (min-width: 768px) {
      width: 47px;
      height: 61px;
      &:hover,
      &:focus {
        fill: ${mainBlue};
      }
    }
  }

  & .slick-arrow.slick-prev {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 50px;
    width: 39px;
    left: calc(50% + 15px);

    @media screen and (min-width: 768px) {
      height: 61px;
      width: 47px;
    }
  }

  & .slick-arrow.slick-next {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 50px;
    width: 39px;
    right: calc(50% + 15px);
    & svg.svg-arrow {
      margin-left: auto;
    }

    @media screen and (min-width: 768px) {
      height: 61px;
      width: 47px;
    }
  }
`;

export const SwaggerButtonStyle = styled.a`
  display: flex;
  position: absolute;
  bottom: -60px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: blue;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 auto;
  transition: all 0.3s;
  overflow: hidden;

  &::before {
    content: 'S';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    transition: opacity 0.3s;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(0);
  }
`;

export const SwaggerText = styled.span`
  position: absolute;
  white-space: nowrap;
  font-size: 14px;
  font-weight: bold;
  padding: 0 5px;
  opacity: 0;
  transition: all 0.3s;
`;
