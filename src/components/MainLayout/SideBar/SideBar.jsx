import LogOutBtn from '../SideBar/LogoutBtn/LogoutBtn';
import Icons from "../../../images/sprite.svg"
import LogoImg from "../Header/test_image/GooseLogo.png"

import {
  CloseBtn,
  SideBarDiv,
  SideBarContainer,
  LogoDiv,
  SideBarNav,
  SideBarLinks,
  Logo,
  LogoIcon,
  LogoSvg,
  Svg,
  StyledNavLink,
  StyledCalendarIcon,
  TitleSideBar,
  CloseIcon
} from './SideBar.styled';
// import { useEffect, useState } from 'react';

const Sidebar = ({ isOpen, onCloseClick }) => {


  
  // let [secondOpening, setSecondOpening] = useState(false);

  // useEffect(() => {
    


  // }, [])

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarDiv>
        <LogoDiv>
          <Logo>
            <LogoIcon src={LogoImg} alt='logo' />
            <LogoSvg>
              <use href={`${Icons}#icon-logo-text`}></use>
            </LogoSvg>
          </Logo>

          <CloseBtn onClick={onCloseClick}>
            <CloseIcon color='--primary-text-color' />
          </CloseBtn>

        </LogoDiv>
        <SideBarNav>
          <TitleSideBar>User Panel</TitleSideBar>
          <SideBarLinks>
            <li>
              <StyledNavLink to="account" onClick={onCloseClick}>
                <Svg>
                  <use href={`${Icons}#icon-user-check`}></use>
                </Svg>
                My account
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="calendar" onClick={onCloseClick}>
                <StyledCalendarIcon />
                Calendar
              </StyledNavLink>
            </li>
          </SideBarLinks>
        </SideBarNav>
      </SideBarDiv>
      <LogOutBtn />
    </SideBarContainer>
  );
};

export default Sidebar;
