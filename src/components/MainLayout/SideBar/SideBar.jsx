import LogOutBtn from '../SideBar/LogoutBtn/LogoutBtn';
import { CgClose } from 'react-icons/cg';
import Icons from "../../../images/sprite.svg"
import LogoImg from "../Header/test_image/logo-light-theme.png"
// import LogoImg from '../Header/test_image/GOOSE_LOGO.svg';
// import UserCheckIcon from '../Header/test_image/user-check-01.svg';
// import LogoText from "../Header/test_image/GooseTrack.svg"

import {
  CloseBtn,
  SideBarDiv,
  SideBarContainer,
  LogoDiv,
  SideBarNav,
  SideBarLinks,
  Logo,
  GooseLogo,
  Svg,
  StyledNavLink,
  StyledCalendarIcon,
  TitleSideBar,
} from './SideBar.styled';

const Sidebar = ({ isOpen, onCloseClick }) => {
  return (
    <SideBarContainer style={{ display: isOpen ? 'block' : 'none' }}>
      <SideBarDiv>
        <LogoDiv>
          <Logo>
            <GooseLogo src={LogoImg} alt="" />
            {/* <img src={LogoText}/> */}
          </Logo>

          <CloseBtn onClick={onCloseClick}>
            <CgClose />
          </CloseBtn>

        </LogoDiv>
        <SideBarNav>
          <TitleSideBar>User Panel</TitleSideBar>
          <SideBarLinks>
            <li>
              <StyledNavLink to="account" >
                <Svg>
                  <use href={`${Icons}#icon-user-check`}></use>
                </Svg>
                {/* <UserIcon src={UserCheckIcon} alt="icon" /> */}
                My account
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="calendar">
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
