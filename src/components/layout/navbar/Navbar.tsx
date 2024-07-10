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
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import navbarItems from './navbarItems';

const NavbarComponent = () => {
  return (
    <Navbar className="py-4">
      <NavbarContainer>
        <NavbarBrand>
          <h1 className="text-heading-6">ATEILER</h1>
        </NavbarBrand>
        <NavbarList>
          {navbarItems.map((item) => (
            <NavLink to={item.link}>
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
                <ShoppingCart size={32} />
              </NavbarItem>
            )}
          </NavLink>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          {navbarItems.map((item) => (
            <NavbarItem>{item.title}</NavbarItem>
          ))}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
