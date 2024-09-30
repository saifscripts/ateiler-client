import {
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';
import { ShoppingBag } from 'phosphor-react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { useAppSelector } from '../../redux/hooks';
import Sidebar from '../sidebar/Sidebar';
import navbarItems from './navbarItems';

const NavbarComponent = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <Navbar className="h-[64px] flex items-center border border-gray-100 fixed top-0 left-0 right-0 z-50">
      <NavbarContainer>
        {/* Logo */}
        <NavbarBrand>
          <Link to="/">
            <h1 className="text-heading-6 text-primary-500 font-bold">
              ATEILER
            </h1>
          </Link>
        </NavbarBrand>

        {/* Navbar Items (Large Screen) */}
        <NavbarList>
          {navbarItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <NavbarItem active={isActive}>{item.name}</NavbarItem>
              )}
            </NavLink>
          ))}
        </NavbarList>

        {/* Cart Icon */}
        <div className="flex items-center gap-4">
          <NavLink to="/cart">
            {({ isActive }) => (
              <div
                className={cn('relative text-primary-400 p-1 rounded-sm', {
                  'text-primary-600 bg-primary-25': isActive,
                })}
              >
                <ShoppingBag size={32} />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-error-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            )}
          </NavLink>

          {/* Sidebar (Small Screen) */}
          <Sidebar />
        </div>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
