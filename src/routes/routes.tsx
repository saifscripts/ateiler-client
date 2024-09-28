import { RouterProviderProps, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import ManageProductsLayout from '../components/layout/manage-products/ManageProductsLayout';
import AboutUs from '../pages/AboutUs';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import SingleProduct from '../pages/SingleProduct';
import {
  AddProduct,
  Brands,
  Categories,
  Products,
  UpdateProduct,
} from '../pages/manage-products';

const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <AllProducts />,
      },
      {
        path: 'product/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
    ],
  },
  {
    path: '/manage-products',
    element: <ManageProductsLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'update-product/:id',
        element: <UpdateProduct />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },

      {
        path: 'brands',
        element: <Brands />,
      },
    ],
  },
]);

export default router;
