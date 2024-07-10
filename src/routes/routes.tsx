import { RouterProviderProps, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AboutUs from '../pages/AboutUs';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ManageProducts from '../pages/ManageProducts';
import SingleProduct from '../pages/SingleProduct';

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
        path: 'product/:slug',
        element: <SingleProduct />,
      },
      {
        path: 'manage-products',
        element: <ManageProducts />,
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
]);

export default router;
