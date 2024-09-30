import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from './footer';
import { Navbar } from './navbar';

const MainLayout = () => {
  return (
    <div className="bg-primary-25">
      <Navbar />
      <div className="min-h-[calc(100svh-64px)] pt-[64px]">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
