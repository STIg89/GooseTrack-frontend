import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { LuCalendarCheck2 } from "react-icons/lu";

const media = {
  tablet: "@media screen and (min-width: 768px)",
  desktop: "@media screen and (min-width: 1440px)"
};

export const SideBarContainer = styled.div`

background-color: var(--active-button-period-type);
position: fixed;
top: 0;
left: 0;
width: 225px;
justify-content: flex-start;
height: 100%;

${media.tablet} {
  width: 289px;
}
  
${media.desktop} {
  position: fixed;
}
`

export const SideBarDiv = styled.div`
margin-top: 24px;
margin-left: 20px;
margin-right: 20px;

${media.tablet} {
  margin-left: 32px;
  margin-right: 32px;
}
`

export const LogoDiv = styled.div`
gap: 6px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Logo = styled.div`
display: flex;
`
export const GooseLogo = styled.img`
width: 36px;
height: 35px;

${media.tablet} {
    width: 60px;
    height: 58px;
  }

  ${media.tablet} {
    font-size: 50px;
  }
`

export const StyledCalendarIcon = styled(LuCalendarCheck2)`
margin-right: 8px;

${media.tablet} {
  margin-right: 10px;
  }
  `

export const SideBarNav = styled.div`
width: 100%;
margin-top: 64px;

${media.tablet} {
    margin-top: 50px;
  }
`

export const SideBarLinks = styled.ul`
height: 56px;

${media.tablet} {
    gap: 16px;
  }
`

export const Svg = styled.svg`
margin-right: 8px;

  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--not-active-item-sidebar-text-color);

  ${media.tablet} {
   margin-right: 10px;
}
`

export const StyledNavLink = styled(NavLink)`
  display: flex;
  color: var(--not-active-item-sidebar-text-color);
  opacity: 0.5;
  align-items: center;
  margin-right: 0;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  height: 40px;
padding-left: 12px;
align-items: center;
justify-content: center;
background-color: aliceblue;
margin-bottom: 16px;
border-radius: 8px;

display: flex;
justify-content: flex-start;

>:not(:last-child) {
    margin-bottom: 18px;
  }

&.active,
:hover,
:focus {
  fill: var(--accent-text-color);
  color: var(--accent-text-color);
  stroke: var(--accent-text-color);
  
  &:hover ${Svg},
  &:focus ${Svg},
  &.active ${Svg} {
    stroke: var(--accent-text-color); /* change the stroke color */
  }
}

${media.tablet} {
    height: 56px;
    padding-left: 20px;
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

export const TitleSideBar = styled.h4`
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: var(--not-active-item-sidebar-text-color);
opacity: 0.5;
margin-bottom: 24px;
margin-top: 64px;

${media.tablet} {
margin-top: 50px;
  }

${media.desktop} {
  margin-bottom: 32px;
margin-top: 32px;
  }
`
export const BrgBtn = styled.button`
background: none;
border: none;

${media.desktop} {
   display: none;
  }
`

export const GooseLogoText = styled.img`

font-size: 16px;
line-height: 22px;
color: var(--accent-text-color);
`
export const CloseBtn = styled.button`
display: flex;
font-size: 16px;
align-items: center;
text-align: center;
border: none;
background: none;
    cursor: pointer;

    ${media.desktop} {
   display: none;
  }
`

