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

const Sidebar = ({ isOpen, onCloseClick }) => {

  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const hanldeClickOutside = (e) => {
  //     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
  //       setOpen(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', hanldeClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', hanldeClickOutside);
  //   };

  // }, [])

  return (
    <SideBarContainer style={{ display: isOpen ? 'block' : 'none' }}>
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
              <StyledNavLink to="account" >
                <Svg>
                  <use href={`${Icons}#icon-user-check`}></use>
                </Svg>
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
