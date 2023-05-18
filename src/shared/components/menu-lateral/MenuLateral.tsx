import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { IChildren } from '../../../types/IChildren';
import { useDrawerContext } from '../../contexts';
import { ListItemLinkMenu } from '../list-item-link-menu/ListItemLinkMenu';

export const MenuLateral = ({ children }: IChildren) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  /* 
   Eu faria assim,
   ou faria também sem o on Click, 
   deixando para fazer tal lógica no onCLick do Map e, com isso,
   poderia colocar esse listMenu, num arquivo json - como os datas 
   da byteSocial
  */
  const listMenu = [
    {
      toPath: '/',
      icon: 'home',
      label: 'Página Inicial',
      onClick: smDown ? toggleDrawerOpen : undefined,
    },
    {
      toPath: 'cidades',
      icon: 'star',
      label: 'cidades',
      onClick: smDown ? toggleDrawerOpen : undefined,
    },
  ];

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
                bgcolor: deepPurple[500],
              }}>
              OP
            </Avatar>
          </Box>
          <Divider />

          <Box flex={1}>
            {listMenu.map((e, index) => (
              <ListItemLinkMenu
                key={index}
                toPath={e.toPath}
                icon={e.icon}
                label={e.label}
                onClick={e.onClick}
              />
            ))}
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

