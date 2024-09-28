import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';
import router from './routes/routes';

export default function App() {
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        e.preventDefault();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cartItems]);

  return <RouterProvider router={router} />;
}
