import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
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
import FeedbackBtn from '../Header/AddFeedbackBtn/AddFeedbackBtn';
import LanguageFlags from '../Header/LanguageFlags/LanguageFlags';

const Sidebar = ({ isOpen, onCloseClick }) => {
  const { t } = useTranslation();

  const [showFdbckBtn, setShowFdbckBtn] = useState(window.innerWidth > 374)
  const [showLangBtn, setShowLangBtn] = useState(window.innerWidth <= 390);
  useEffect(() => {
    const handleResize = () => {
      setShowLangBtn(window.innerWidth <= 390);
      setShowFdbckBtn(window.innerWidth > 374);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <TitleSideBar>{t('User Panel')}</TitleSideBar>
          <SideBarLinks>
            <li>
              <StyledNavLink to="account" onClick={onCloseClick}>
                <Svg>
                  <use href={`${Icons}#icon-user-check`}></use>
                </Svg>
                {t('My account')}
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="calendar" onClick={onCloseClick}>
                <StyledCalendarIcon />
                {t('Calendar')}
              </StyledNavLink>
            </li>
          </SideBarLinks>
        </SideBarNav>
      </SideBarDiv>

      {showLangBtn &&
        <>
          <LanguageFlags />
        </>
      }

      {!showFdbckBtn &&
        <>
          <FeedbackBtn />
        </>
      }
      <LogOutBtn />
    </SideBarContainer>
  );
};

export default Sidebar;
