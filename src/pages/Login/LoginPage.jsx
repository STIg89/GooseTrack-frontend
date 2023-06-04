import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';
import { AuthNavigate } from '../../components/Auth/AuthNavigate/AuthNavigate';
import { Container } from '../Register/RegisterPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <AuthNavigate route={'/register'} pageName={'Sign Up'} />
    </Container>
  );
};

export default LoginPage;
