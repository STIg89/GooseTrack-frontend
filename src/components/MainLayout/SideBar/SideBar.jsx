import LogOutBtn from '../SideBar/LogoutBtn/LogoutBtn';
import { CgClose } from 'react-icons/cg';
import LogoImg from '../Header/test_image/GOOSE_LOGO.svg';
import UserCheckIcon from '../Header/test_image/user-check-01.svg';
// import LogoText from "../Header/test_image/GooseTrack.svg"

import {
  CloseBtn,
  SideBarDiv,
  SideBarContainer,
  LogoDiv,
  SideBarNav,
  SideBarLinks,
  SideBarLi,
  Logo,
  GooseLogo,
  UserIcon,
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
            <SideBarLi>
              <StyledNavLink>
                <UserIcon src={UserCheckIcon} alt="icon" />
                My account
              </StyledNavLink>
            </SideBarLi>

            <SideBarLi>
              <StyledNavLink>
                <StyledCalendarIcon />
                Calendar
              </StyledNavLink>
            </SideBarLi>
          </SideBarLinks>
        </SideBarNav>
      </SideBarDiv>
      <LogOutBtn />
    </SideBarContainer>
  );
};

export default Sidebar;
