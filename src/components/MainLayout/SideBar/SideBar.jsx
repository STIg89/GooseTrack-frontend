import LogOutBtn from '../SideBar/LogoutBtn/LogoutBtn';
import Icons from '../../../images/sprite.svg';
import LogoImg from '../../../images/sidebar/GooseLogo@2x.png';

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
  CloseIcon,
} from './SideBar.styled';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ isOpen, onCloseClick }) => {
  const { t } = useTranslation();
  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarDiv>
        <LogoDiv>
          <Logo>
            <LogoIcon src={LogoImg} alt="logo" />
            <LogoSvg>
              <use href={`${Icons}#icon-logo-text`}></use>
            </LogoSvg>
          </Logo>

          <CloseBtn onClick={onCloseClick}>
            <CloseIcon color="--primary-text-color" />
          </CloseBtn>
        </LogoDiv>
        <SideBarNav>
          <TitleSideBar>{t('user_panel')}</TitleSideBar>
          <SideBarLinks>
            <li>
              <StyledNavLink to="account" onClick={onCloseClick}>
                <Svg>
                  <use href={`${Icons}#icon-user-check`}></use>
                </Svg>
                {t('my_account')}
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="calendar" onClick={onCloseClick}>
                <StyledCalendarIcon />
                {t('calendar')}
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
