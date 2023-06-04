import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <div>MainLayout</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
