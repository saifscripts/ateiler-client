import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/cn';

interface INavItem {
  link: string;
  title: string;
}

export default function NavItem({ item }: { item: INavItem }) {
  return (
    <NavLink
      key={item.link}
      to={item.link}
      className={({ isActive }) =>
        cn('text-metal-700', {
          'text-primary': isActive,
        })
      }
    >
      {item.title}
    </NavLink>
  );
}
