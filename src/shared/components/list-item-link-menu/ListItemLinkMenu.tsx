import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

export interface IListItemMenuData {
  toPath: string;
  icon?: string;
  label?: string;
  onClick?: () => void;
}

export const ListItemLinkMenu = ({
  toPath,
  icon,
  label,
  onClick,
}: IListItemMenuData) => {
  const navigate = useNavigate();

  /* 
  Com isso, consigo saber se a rota atual é a rota que passei o to path e,
  assim, utilizo para selecionar ou não o menu
  */
  const resolvedPath = useResolvedPath(toPath);
  const math = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(toPath);
    onClick?.();

    /*
    onClick?.()
    ou
    if(onClick) onClick()
    ou
    onClick && onClick()
    */
  };

  return (
    <ListItemButton selected={!!math} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
