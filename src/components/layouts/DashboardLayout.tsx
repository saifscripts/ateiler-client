import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import DashboardSidebar from '../sidebar/DashboardSidebar';
``;

export default function DashboardLayout() {
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
        <DashboardSidebar />
        <div
          ref={childRef}
          className="w-full lg:w-[calc(100vw-240px)] h-[100svh] pt-[64px] overflow-auto"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
