import { Button } from '@mui/material';
import { MenuLateral } from 'shared/components/menu-lateral/MenuLateral';
import { useThemeContext, useDrawerContext } from 'shared/contexts';

function App() {
  const { toogleTheme } = useThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <>
      <MenuLateral>
        <Button onClick={toggleDrawerOpen} variant="contained" color="primary">
          Troca de Tema
        </Button>
      </MenuLateral>
    </>
  );
}

export default App;
