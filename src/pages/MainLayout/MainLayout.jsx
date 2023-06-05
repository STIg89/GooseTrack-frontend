import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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

  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1440)

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainContainer>
      <Header isOpen={sidebarOpen} onOpenClick={handleSidebarOpen} />

      {sidebarOpen &&
        <Sidebar isOpen={sidebarOpen} onCloseClick={handleSidebarOpen} />
      }
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
