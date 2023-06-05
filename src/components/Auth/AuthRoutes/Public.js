import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/calendar" replace /> : <Outlet />;
};
export default PublicRoute;
