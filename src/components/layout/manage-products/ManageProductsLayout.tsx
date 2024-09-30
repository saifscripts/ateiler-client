import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';

const ManageProductsLayout = () => {
  const childRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // scroll to top on path change
  useEffect(() => {
    childRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-primary-25 h-screen overflow-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div
          ref={childRef}
          className="w-full lg:w-[calc(100vw-240px)] h-[calc(100svh-64px)] mt-[64px] overflow-auto"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ManageProductsLayout;
