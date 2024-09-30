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
import { CaretDown } from 'phosphor-react';
import { BiBarcode, BiCategoryAlt, BiStore } from 'react-icons/bi';
import { IoAddSharp, IoListSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import SidebarLink from './SidebarLink';

const SidebarComponent = () => {
  const navigate = useNavigate();

  return (
    <Sidebar className="h-[calc(100svh-64px)] mt-[64px] rounded-none w-[240px] shadow-none hidden lg:flex border-l-0 border-t-0 border-b-0 border-r border-gray-100">
      <SidebarBody>
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
  );
};

export default SidebarComponent;
