import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IFerramentasListagemProps {
  textoDaBusca?: string;
  mostrarInputDeBusca?: boolean;
  aoMudarTextDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarBotaoNovo?: () => void;
}

export const FerramentasListagem = ({
  textoDaBusca = '',
  mostrarInputDeBusca = false,
  aoMudarTextDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarBotaoNovo,
}: IFerramentasListagemProps) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      height={theme.spacing(5)}
      padding={1}
      paddingX={2}
      marginX={1}
      component={Paper}
      /* 
      Video: React, Material UI 5 e Typescript: #14 - Barra de ferramentas da listagem
      component = Paper(component do MUI). Ao fazer isso o Box consegue adiquirir 
      algumas das funcionalidades de Paper, mas existe limitações, alguns componentes em material são capazes de fazer isso, poderia ser feito também <Paper component={Box}> </Paper>, aí o Paper pegaria as funcionalidades de Box
      */
    >
      {mostrarInputDeBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textoDaBusca}
          onChange={(e) => aoMudarTextDeBusca?.(e.target.value)}
        />
      )}
      <Box flex={1} display={'flex'} justifyContent={'end'}>
        {mostrarBotaoNovo && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarBotaoNovo}>
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
