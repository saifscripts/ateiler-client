import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';

const ManageProductsLayout = () => {
  return (
    <div className="bg-primary-25">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-[calc(100vw-240px)] h-[calc(100vh-80px)] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ManageProductsLayout;
