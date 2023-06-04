import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from 'shared/contexts';
import { IChildren } from 'types';

interface IDataBasePageLayout extends IChildren {
  title: string;
  toolBar?: ReactNode;
}

export const BasePageLayout = ({
  children,
  title,
  toolBar,
}: IDataBasePageLayout) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
      <Box
        display={'flex'}
        alignItems={'center'}
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          component={'h1'}
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace={'nowrap'}
          overflow="hidden"
          textOverflow={'ellipsis'}>
          {/*O "Component é usado para manter a semântica do html".
          O whiteSpace, o overFlow, o textOverFlow é não quebrar a responsividade do titulo*/}
          {title}
        </Typography>
      </Box>

      {toolBar && <Box>{toolBar}</Box>}

      <Box flex={1} overflow={'auto'}>
        {children}
      </Box>
      {/* overflow interssante! Especificando nesse box, consigo fazer com que apenas esse box 
      tenha um scroll */}
    </Box>
  );
};
