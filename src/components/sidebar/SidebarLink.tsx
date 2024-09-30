import { SidebarItem } from 'keep-react';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/cn';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

const SidebarLink = ({ to, children }: SidebarLinkProps) => {
  return (
    <NavLink to={to} onClick={(e) => e.stopPropagation()}>
      {({ isActive }) => (
        <SidebarItem
          className={cn('mb-1', {
            'bg-transparent text-metal-900 font-bold hover:bg-metal-50 hover:text-metal-900':
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
