import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';
import { ShoppingCart } from 'phosphor-react';
import { Link, NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import navbarItems from './navbarItems';

const NavbarComponent = () => {
  return (
    <Navbar className="py-4 sticky top-0 z-50">
      <NavbarContainer>
        <NavbarBrand>
          <Link to="/">
            <h1 className="text-heading-6 font-bold">ATEILER</h1>
          </Link>
        </NavbarBrand>
        <NavbarList>
          {navbarItems.map((item) => (
            <NavLink key={item.link} to={item.link}>
              {({ isActive }) => (
                <NavbarItem active={isActive}>{item.title}</NavbarItem>
              )}
            </NavLink>
          ))}
        </NavbarList>
        <NavbarList>
          <SearchInput />
          <NavLink to="/cart">
            {({ isActive }) => (
              <NavbarItem active={isActive}>
                <div className="relative">
                  <ShoppingCart size={32} />
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-error-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </NavbarItem>
            )}
          </NavLink>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          {navbarItems.map((item) => (
            <NavLink key={item.link} to={item.link}>
              {({ isActive }) => (
                <NavbarItem active={isActive}>{item.title}</NavbarItem>
              )}
            </NavLink>
          ))}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
