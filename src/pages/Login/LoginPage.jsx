import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';
import { AuthNavigate } from '../../components/Auth/AuthNavigate/AuthNavigate';
import {
  Container,
  CloudButton,
  ButtonText,
} from '../Register/RegisterPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <CloudButton to="/">
        <ButtonText>Home</ButtonText>
      </CloudButton>
      <LoginForm />
      <AuthNavigate route={'/register'} pageName={'Sign Up'} />
    </Container>
  );
};

export default LoginPage;
