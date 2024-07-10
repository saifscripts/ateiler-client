import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
