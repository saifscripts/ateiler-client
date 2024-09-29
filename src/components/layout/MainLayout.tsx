import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from './footer';
import { Navbar } from './navbar';

const MainLayout = () => {
  return (
    <div className="bg-primary-25">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
