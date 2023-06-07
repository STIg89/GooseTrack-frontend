import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useLocation, useParams } from 'react-router-dom';
import HeaderImg from '../Header/test_image/GooseHeader.png';
import FeedbackBtn from '../Header/AddFeedbackBtn/AddFeedbackBtn';

import LanguageFlags from './LanguageFlags/LanguageFlags';

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

import { useTranslation } from 'react-i18next';


const Header = ({ isOpen, onOpenClick }) => {
  const { name } = useSelector(selectUser);
  const firstLetter = name?.charAt(0).toUpperCase();
  let testImg =
    'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg';
  testImg = null;

  const location = useLocation();
  let { currentDay } = useParams();
  const { t } = useTranslation();

  console.log(location.pathname);

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
        {location.pathname === '/calendar' && <Title> Calendar</Title>}

        {location.pathname === '/account' && <Title> User Profile</Title>}

        {location.pathname === `/calendar/day/${currentDay}` && (
          <>
            <GooseImg src={HeaderImg} alt="Goose" />
            <Div>
              <Title>Calendar</Title>
              <HeaderParagraph>
                {' '}
                <Span>Let go</Span> of the past and focus on the present!
              </HeaderParagraph>
            </Div>
          </>
        )}
      </TitleCalendar>
      <Box>
        <LanguageFlags />
        <FeedbackBtn />
        <ThemeToggler />
        <UserName>{name}</UserName>
        {testImg ? (
          <UserAvatar src={testImg} alt="user avatar" />
        ) : (
          <NoAvatar>{firstLetter}</NoAvatar>
        )}
      </Box>
    </Container>
  );
};

export default Header;
