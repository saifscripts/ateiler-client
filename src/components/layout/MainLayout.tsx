import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

const MainLayout = () => {
  return (
    <div className="bg-primary-25">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
