import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';
import { AuthNavigate } from '../../components/Auth/AuthNavigate/AuthNavigate';
import { useTranslation } from 'react-i18next';

import {
  Container,
  CloudButton,
  ButtonText,
} from '../Register/RegisterPage.styled';

const LoginPage = () => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <CloudButton to="/">
        <ButtonText>
          {i18n.language === 'en' ? 'Home' : 'На головну'}
        </ButtonText>
      </CloudButton>
      <LoginForm />
      <AuthNavigate route={'/register'} pageName={'Sign Up'} />
    </Container>
  );
};

export default LoginPage;
