import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

interface IFerramentaDetalhesProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoClicarBotaoNovo?: () => void;
  aoClicarBotaoVoltar?: () => void;
  aoClicarBotaoApagar?: () => void;
  aoClicarBotaoSalvar?: () => void;
  aoClicarBotaoSalvarEFechar?: () => void;
}

export const FerramentaDetalhes = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarBotaoNovo,
  aoClicarBotaoVoltar,
  aoClicarBotaoApagar,
  aoClicarBotaoSalvar,
  aoClicarBotaoSalvarEFechar,
}: IFerramentaDetalhesProps) => {
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
      component={Paper}>
      {mostrarBotaoSalvar && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarBotaoSalvar}>
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarEFechar && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarBotaoSalvarEFechar}>
          Salvar e voltar
        </Button>
      )}

      {mostrarBotaoApagar && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarBotaoApagar}>
          Apagar
        </Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarBotaoNovo}>
          {textoBotaoNovo}
        </Button>
      )}
      <Divider variant="middle" orientation="vertical" />
      {mostrarBotaoVoltar && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarBotaoVoltar}>
          Voltar
        </Button>
      )}
      <Box></Box>
      <Box></Box>
    </Box>
  );
};
