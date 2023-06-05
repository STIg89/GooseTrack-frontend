import styled from 'styled-components';

const media = {
    tablet: "@media screen and (min-width: 768px)",
    desktop: "@media screen and (min-width: 1440px)"
};

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 32px;
  justify-content: space-between;
  position: relative

  ${media.desktop} {
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
 justify-content: flex-end;
  align-items: center;
  /* padding: 14px;
  margin-top: 30px;
  color: var(--primary-text-color); */

  ${media.desktop} {

  } 
`;

export const UserAvatar = styled.img`
width:32px;
height:32px;
border-radius: 50%;
margin-left: 8px;
outline:  3px solid var(--accent-background-color);

${media.tablet} {
width:44px;
height:44px;
margin-left: 14px;
  }
`
export const BrgMenu = styled.svg`
 width: 34px;
 height: 34px;
 stroke: #111111;

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
`
export const Title = styled.h2`

  text-align: center;
 
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: var(--primary-text-color);
  letter-spacing: -0.02em;
  display: none;

  padding: 14px;
  color: var(--primary-text-color);

  ${media.desktop} {
   /* display: block; */
   display: block;
   position: absolute;
    left: 300px;
  }
`;

export const UserName = styled.h4`
  text-align: center;
 
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-text-color);

  margin-left: 8px;

  ${media.desktop} {
    font-size: 18px;
    line-height: 18px;
    margin-left: 14px;
  }
`;