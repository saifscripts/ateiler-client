import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';

const ManageProductsLayout = () => {
  return (
    <div className="bg-primary-25 h-screen overflow-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-[calc(100vw-240px)] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ManageProductsLayout;
