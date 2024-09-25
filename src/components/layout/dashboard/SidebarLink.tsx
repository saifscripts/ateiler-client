import { SidebarItem } from 'keep-react';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../../lib/cn';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

const SidebarLink = ({ to, children }: SidebarLinkProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <SidebarItem
          className={cn({
            'bg-metal-900 text-metal-100 hover:bg-metal-800 hover:text-metal-100':
              isActive,
          })}
        >
          {children}
        </SidebarItem>
      )}
    </NavLink>
  );
};

export default SidebarLink;
