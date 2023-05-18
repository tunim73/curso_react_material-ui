import { Button } from "@mui/material"
import { useThemeContext } from "./shared/contexts/themeContext"
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral"

function App() {

  const {toogleTheme} = useThemeContext()

  return (
    <>
      <MenuLateral>
        <Button
          onClick={toogleTheme}
          variant='contained'
          color='primary'
        >
        Troca de Tema
        </Button>
      </MenuLateral>
      
    </>
  )
}

export default App
