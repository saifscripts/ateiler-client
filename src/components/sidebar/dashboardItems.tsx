import { BiBarcode, BiCategoryAlt, BiStore } from 'react-icons/bi';
import { IoAddSharp, IoListSharp } from 'react-icons/io5';
import { IRoute } from '../../interfaces';

const dashboardItems: IRoute[] = [
  {
    icon: BiStore,
    name: 'Products',
    path: '/manage-products/products',
    dropdown: [
      {
        icon: IoListSharp,
        name: 'Product List',
        path: '/manage-products/products',
      },
      {
        icon: IoAddSharp,
        name: 'Add Product',
        path: '/manage-products/add-product',
      },
    ],
  },
  {
    icon: BiCategoryAlt,
    name: 'Categories',
    path: '/manage-products/categories',
  },
  {
    icon: BiBarcode,
    name: 'Brands',
    path: '/manage-products/brands',
  },
];

export default dashboardItems;
