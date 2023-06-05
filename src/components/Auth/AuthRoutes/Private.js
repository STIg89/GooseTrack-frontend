import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PublicRoute;
