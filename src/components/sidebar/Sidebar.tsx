import {
  Drawer,
  DrawerAction,
  DrawerClose,
  DrawerContent,
  Sidebar,
  SidebarBody,
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from 'keep-react';
import { CaretDown, List } from 'phosphor-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import navbarItems from '../navbar/navbarItems';
import SidebarLink from './SidebarLink';
import dashboardItems from './dashboardItems';

export default function MobileSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = pathname.startsWith('/manage-products')
    ? dashboardItems
    : navbarItems;

  return (
    <Drawer position="left" isOpen={isOpen} onOpenChange={setIsOpen}>
      <DrawerAction asChild>
        <div className="bg-white cursor-pointer lg:hidden">
          <List size={24} className="text-metal-300" />
        </div>
      </DrawerAction>
      <DrawerContent className="max-w-none min-w-none w-auto">
        <DrawerClose className="absolute right-5 top-[28px]" />
        <Sidebar className="h-[100svh] rounded-none w-[240px] shadow-none lg:hidden">
          <SidebarBody>
            <Link to="/">
              <h1 className="text-heading-6 text-primary-500 font-bold pb-4 border-b">
                ATEILER
              </h1>
            </Link>
            <SidebarList className="space-y-0.5">
              {sidebarItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <SidebarItem dropdown key={item.name}>
                      <SidebarDropdown>
                        <SidebarCollapse onClick={() => navigate(item.path)}>
                          <div className="flex items-center gap-3">
                            <item.icon className="text-lg" />
                            {item.name}
                          </div>
                          {item.dropdown && (
                            <span className="group-open:-rotate-180">
                              <CaretDown size={20} />
                            </span>
                          )}
                        </SidebarCollapse>

                        <SidebarDropdownList>
                          {item.dropdown &&
                            item.dropdown.map((dropdown) => (
                              <SidebarLink
                                onClick={() => setIsOpen(false)}
                                to={dropdown.path}
                                key={dropdown.name}
                              >
                                <dropdown.icon className="text-lg" />
                                {dropdown.name}
                              </SidebarLink>
                            ))}
                        </SidebarDropdownList>
                      </SidebarDropdown>
                    </SidebarItem>
                  );
                }

                return (
                  <SidebarLink
                    to={item.path}
                    key={item.name}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="text-lg" />
                    {item.name}
                  </SidebarLink>
                );
              })}
            </SidebarList>
          </SidebarBody>

          <SidebarFooter>
            <p className="text-primary-300 text-body-4">
              &copy; {new Date().getFullYear()} ATEILER
            </p>
          </SidebarFooter>
        </Sidebar>
      </DrawerContent>
    </Drawer>
  );
}
