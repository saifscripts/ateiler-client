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
import { BiBarcode, BiCategoryAlt, BiStore } from 'react-icons/bi';
import { IoAddSharp, IoListSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import SidebarLink from './SidebarLink';

export default function MobileSidebar() {
  const navigate = useNavigate();

  return (
    <Drawer position="left">
      <DrawerAction asChild>
        <div className="bg-white cursor-pointer lg:hidden">
          <List size={24} className="text-metal-300" />
        </div>
      </DrawerAction>
      <DrawerContent className="max-w-none min-w-none w-auto">
        <DrawerClose className="absolute right-5 top-[28px]" />
        <Sidebar className="h-screen rounded-none w-[240px] shadow-none lg:hidden">
          <SidebarBody>
            <Link to="/">
              <h1 className="text-heading-6 text-primary-500 font-bold pb-4 border-b">
                ATEILER
              </h1>
            </Link>
            <SidebarList className="space-y-0.5">
              <SidebarItem dropdown>
                <SidebarDropdown
                  onClick={() => navigate('/manage-products/products')}
                >
                  <SidebarCollapse>
                    <div className="flex items-center gap-3">
                      <BiStore className="text-lg" />
                      Products
                    </div>
                    <span className="group-open:-rotate-180">
                      <CaretDown size={20} />
                    </span>
                  </SidebarCollapse>

                  <SidebarDropdownList>
                    <SidebarLink to="products">
                      <IoListSharp className="text-lg" />
                      Product List
                    </SidebarLink>

                    <SidebarLink to="add-product">
                      <IoAddSharp className="text-lg" />
                      Add Product
                    </SidebarLink>
                  </SidebarDropdownList>
                </SidebarDropdown>
              </SidebarItem>
              <SidebarLink to="categories">
                <BiCategoryAlt className="text-lg" />
                Categories
              </SidebarLink>
              <SidebarLink to="brands">
                <BiBarcode className="text-lg" />
                Brands
              </SidebarLink>
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
