import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm';
import { AuthNavigate } from '../../components/Auth/AuthNavigate/AuthNavigate';
import { useTranslation } from 'react-i18next';

import {
  Container,
  CloudButton,
  ButtonText,
} from '../Register/RegisterPage.styled';

const RegisterPage = () => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <CloudButton to="/">
        <ButtonText>
          {i18n.language === 'en' ? 'Home' : 'На головну'}
        </ButtonText>
      </CloudButton>
      <RegisterForm />
      <AuthNavigate route={'/login'} pageName={'Log In'} />
    </Container>
  );
};

export default RegisterPage;
