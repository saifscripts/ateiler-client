import { BiBarcode, BiCategoryAlt, BiStore } from 'react-icons/bi';
import { IoAddSharp, IoListSharp } from 'react-icons/io5';
import { IRoute } from '../../interfaces';

const dashboardItems: IRoute[] = [
  {
    icon: BiStore,
    name: 'Products',
    path: '/dashboard/products',
    dropdown: [
      {
        icon: IoListSharp,
        name: 'Product List',
        path: '/dashboard/products',
      },
      {
        icon: IoAddSharp,
        name: 'Add Product',
        path: '/dashboard/add-product',
      },
    ],
  },
  {
    icon: BiCategoryAlt,
    name: 'Categories',
    path: '/dashboard/categories',
  },
  {
    icon: BiBarcode,
    name: 'Brands',
    path: '/dashboard/brands',
  },
];

export default dashboardItems;
