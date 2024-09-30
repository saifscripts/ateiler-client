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
import { useNavigate } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import dashboardItems from './dashboardItems';

export default function DashboardSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar className="h-[calc(100svh-64px)] mt-[64px] rounded-none w-[240px] shadow-none hidden lg:flex border-l-0 border-t-0 border-b-0 border-r border-gray-100">
      <SidebarBody>
        <SidebarList className="space-y-0.5">
          {dashboardItems.map((item) => {
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
                          <SidebarLink to={dropdown.path} key={dropdown.name}>
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
              <SidebarLink to={item.path} key={item.name}>
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
  );
}
