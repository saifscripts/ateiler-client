import { CaretDown } from 'phosphor-react';

import {
  Sidebar,
  SidebarBody,
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from 'keep-react';
import { BiCategory, BiHome, BiStore } from 'react-icons/bi';
import { IoAddSharp, IoListSharp, IoLogoBuffer } from 'react-icons/io5';
import SidebarLink from './SidebarLink';

const SidebarComponent = () => {
  return (
    <Sidebar className="h-[calc(100vh-80px)] rounded-none w-[240px] shadow-none">
      <SidebarBody>
        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <BiHome className="text-lg" />
            Home
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
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
                <SidebarLink to="add-product">
                  <IoAddSharp className="text-lg" />
                  Add Product
                </SidebarLink>
                <SidebarLink to="products">
                  <IoListSharp className="text-lg" />
                  Product List
                </SidebarLink>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <BiCategory className="text-lg" />
                  Categories
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarLink to="add-category">
                  <IoAddSharp className="text-lg" />
                  Add Category
                </SidebarLink>
                <SidebarLink to="categories">
                  <IoListSharp className="text-lg" />
                  Category List
                </SidebarLink>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <IoLogoBuffer className="text-xl" />
                  Brands
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarLink to="add-brand">
                  <IoAddSharp className="text-lg" />
                  Add Brand
                </SidebarLink>
                <SidebarLink to="brands">
                  <IoListSharp className="text-lg" />
                  Brand List
                </SidebarLink>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
        </SidebarList>
      </SidebarBody>

      <SidebarFooter>
        <p className="text-metal-500 text-body-4">
          &copy; {new Date().getFullYear()} ATEILER
        </p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
