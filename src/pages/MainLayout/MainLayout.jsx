import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Notify } from 'notiflix';
import { refreshUser } from 'redux/auth/operations';
import Header from 'components/MainLayout/Header/Header';
import { MainContainer, DivSidebar } from './MainLayout.styled';
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
  let sidebarRef = useRef();

  const handleSidebarOpen = () => {
    if (window.innerWidth >= 1440) {
      return;
    }
    setSidebarOpen(!sidebarOpen);
  }

  useEffect(() => {
    const handleSidebarClickOutside = (e) => {
      if (window.innerWidth < 1440) {
        if (!sidebarRef.current.contains(e.target)) {
          setSidebarOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleSidebarClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleSidebarClickOutside);
    };
  }, []);

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
      <DivSidebar ref={sidebarRef}>
        <Sidebar isOpen={sidebarOpen} onCloseClick={handleSidebarOpen} />      
      </DivSidebar>
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout
