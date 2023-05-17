import { Button } from "@mui/material"
import { useThemeContext } from "./shared/contexts/themeContext"

function App() {

  const {toogleTheme} = useThemeContext()

  return (
    <>
      <Button
        onClick={toogleTheme}
        variant='contained'
        color='primary'
      >
        Troca de Tema
      </Button>
    </>
  )
}

export default App
