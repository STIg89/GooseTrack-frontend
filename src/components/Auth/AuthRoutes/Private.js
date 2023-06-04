import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);
  console.log('token:', token);

  return token ? <Navigate to="calendar" replace /> : <Outlet />;
};
export default PublicRoute;
