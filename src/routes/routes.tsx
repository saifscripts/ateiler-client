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
  AddBrand,
  AddCategory,
  AddProduct,
  BrandList,
  Categories,
  ProductList,
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
        path: 'products/:category',
        element: <AllProducts />,
      },
      {
        path: 'product/:slug',
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
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'add-category',
        element: <AddCategory />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'add-brand',
        element: <AddBrand />,
      },
      {
        path: 'brands',
        element: <BrandList />,
      },
    ],
  },
]);

export default router;
