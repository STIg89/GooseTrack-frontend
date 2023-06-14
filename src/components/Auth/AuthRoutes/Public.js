import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors';

const PublicRoute = () => {
  const token = useSelector(selectAccessToken);

  return token ? <Navigate to="/calendar" replace /> : <Outlet />;
};
export default PublicRoute;
