import {
  IoGridOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoListOutline,
} from 'react-icons/io5';
import { IRoute } from '../../interfaces';

const navbarItems: IRoute[] = [
  {
    icon: IoHomeOutline,
    name: 'Home',
    path: '/',
  },
  {
    icon: IoListOutline,
    name: 'All Products',
    path: '/products',
  },
  {
    icon: IoGridOutline,
    name: 'Manage Products',
    path: '/manage-products',
  },
  {
    icon: IoInformationCircleOutline,
    name: 'About Us',
    path: '/about-us',
  },
];

export default navbarItems;
