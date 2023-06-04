import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';
import { refreshUser } from 'redux/auth/operations';
import Header from 'components/MainLayout/Header/Header';
import { MainContainer } from './MainLayout.styled';
import Sidebar from 'components/MainLayout/SideBar/SideBar';

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
    <MainContainer>
      <Header />
      <Sidebar />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
