import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import HeaderImg from 'images/sidebar/GooseHeader.png';
import FeedbackBtn from '../Header/AddFeedbackBtn/AddFeedbackBtn';
import LanguageFlags from './LanguageFlags/LanguageFlags';
import { selectTasks } from 'redux/tasks/selectors';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';

import {
  Title,
  Container,
  Box,
  Div,
  BrgMenu,
  BrgBtn,
  UserAvatar,
  UserName,
  GooseImg,
  NoAvatar,
  Span,
  TitleCalendar,
  HeaderParagraph,
} from './Header.styled';
import Icons from 'images/sprite.svg';
import { useEffect, useState } from 'react';

const Header = ({ isOpen, onOpenClick }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { name, avatarURL } = useSelector(selectUser);

  const firstLetter = name?.charAt(0).toUpperCase();
  const location = useLocation();
  let { currentDay } = useParams();

  const [showLangBtn, setShowLangBtn] = useState(window.innerWidth <= 390);
  const [showFdbckBtn, setShowFdbckBtn] = useState(window.innerWidth > 374);

  const tasks = useSelector(selectTasks);

  const readinessTasks = {
    todotasks: tasks.filter(item => item.category === 'to-do'),
    inprogresstasks: tasks.filter(item => item.category === 'in-progress'),
    donetasks: tasks.filter(item => item.category === 'done'),
  };

  const hasTasks =
    readinessTasks.todotasks.length > 0 ||
    readinessTasks.inprogresstasks.length > 0;

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
    <Container>
      {!isOpen && (
        <BrgBtn onClick={onOpenClick}>
          <BrgMenu>
            <use href={`${Icons}#profile-mobile-menu`}></use>
          </BrgMenu>
        </BrgBtn>
      )}
      <TitleCalendar>
        {location.pathname === '/calendar' && (
          <Title> {i18n.language === 'en' ? 'Calendar' : 'Календар'}</Title>
        )}

        {location.pathname === '/account' && (
          <Title> {t('User Profile')}</Title>
        )}

        {location.pathname === `/calendar/day/${currentDay}` && (
          <>
            {hasTasks && <GooseImg src={HeaderImg} alt="Goose" />}
            <Div>
              <Title>{i18n.language === 'en' ? 'Calendar' : 'Календар'}</Title>
              {hasTasks && (
                <HeaderParagraph>
                  {' '}
                  <Span>
                    {i18n.language === 'en' ? 'Let go' : 'Відпустіть'}
                  </Span>{' '}
                  {i18n.language === 'en'
                    ? 'of the past and focus on the present!'
                    : 'минуле і зосередьтесь на сьогоденні!'}
                </HeaderParagraph>
              )}
            </Div>
          </>
        )}
      </TitleCalendar>

      <Box>
        {!showLangBtn && (
          <>
            <LanguageFlags />
          </>
        )}
        {showFdbckBtn && (
          <>
            <FeedbackBtn />
          </>
        )}
        <ThemeToggler />
        <UserName>{name}</UserName>
        <NavLink to="account">
          {avatarURL ? (
            <UserAvatar src={avatarURL} alt="user avatar" />
          ) : (
            <NoAvatar>{firstLetter}</NoAvatar>
          )}
        </NavLink>
      </Box>
    </Container>
  );
};

export default Header;
