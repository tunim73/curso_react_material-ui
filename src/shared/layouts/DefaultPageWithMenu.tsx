import { Outlet } from 'react-router-dom';
import { MenuLateral } from 'shared/components/menu-lateral/MenuLateral';

export const DefaultPageWithMenu = () => {
  return (
    <MenuLateral>
      <Outlet />
    </MenuLateral>
  );
};
