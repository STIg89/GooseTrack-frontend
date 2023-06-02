import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm';
import { AuthNavigate } from '../../components/Auth/AuthNavigate/AuthNavigate';
import { Container } from '../Register/RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <RegisterForm />
      <AuthNavigate route={'/login'} pageName={'Log In'} />
    </Container>
  );
};

export default RegisterPage;
