import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm';
import { AuthNavigate } from '../../components/Auth/AuthNavigate/AuthNavigate';
import {
  Container,
  CloudButton,
  ButtonText,
} from '../Register/RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <CloudButton to="/">
        <ButtonText>Home</ButtonText>
      </CloudButton>
      <RegisterForm />
      <AuthNavigate route={'/login'} pageName={'Log In'} />
    </Container>
  );
};

export default RegisterPage;
