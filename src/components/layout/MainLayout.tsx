import { Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { Navbar } from './navbar';

const MainLayout = () => {
  return (
    <div className="bg-primary-25">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
