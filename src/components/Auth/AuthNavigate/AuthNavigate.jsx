import { AuthLink } from './AuthNavigate.styled';

export const AuthNavigate = ({ route, content }) => (
  <AuthLink to={route}>
    <span>{content}</span>
  </AuthLink>
);
