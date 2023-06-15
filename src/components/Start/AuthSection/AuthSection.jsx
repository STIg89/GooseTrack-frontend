import gooseDesk3x from 'images/start-page-goose-desktop-1x.png';
import gooseDesk2x from 'images/start-page-goose-desktop-2x.png';
import gooseDesk1x from 'images/start-page-goose-desktop-3x.png';
import { useTranslation } from 'react-i18next';

import Icons from 'images/sprite.svg';
import {
  Container,
  Box,
  Img,
  MainTitle,
  SpanTitle,
  BoxBtn,
  BtnSignUp,
  BtnLogIn,
  BtnSignUpMob,
  SvgIcon,
} from './AuthSection.styled';

const AuthSection = () => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <Box>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={`${gooseDesk1x} 1x, ${gooseDesk2x} 2x, ${gooseDesk3x} 3x`}
            alt="Goose"
          />
          <Img src={gooseDesk1x} alt="Goose" />
        </picture>

        <MainTitle>
          G<SpanTitle>oo</SpanTitle>seTrack
        </MainTitle>

        <BoxBtn>
          <BtnSignUp to={'/register'} type="button">
            {i18n.language === 'en' ? 'Sign Up' : 'Зареєструватися'}
          </BtnSignUp>

          <BtnLogIn to={'/login'} type="button">
            {i18n.language === 'en' ? 'Log In' : 'Увійти'}
            <SvgIcon>
              <use href={`${Icons}#login-door-sf`}></use>
            </SvgIcon>
          </BtnLogIn>

          <BtnSignUpMob type="button">
            {i18n.language === 'en' ? 'Sign Up' : 'Зареєструватися'}
          </BtnSignUpMob>
        </BoxBtn>
      </Box>
    </Container>
  );
};

export default AuthSection;
