import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';
import { logout, refreshUser } from 'redux/auth/operations';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(refreshUser());
    } catch (error) {
      Notify.error('Authorization error');
    }
  }, [dispatch]);

  return (
    <div>
      <div>MainLayout</div>
      <button type="button" onClick={() => dispatch(logout())}>
        LOGOUT
      </button>
      <Outlet />
    </div>
  );
};

export default MainLayout;
