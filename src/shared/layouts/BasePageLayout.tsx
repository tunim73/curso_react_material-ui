import { Box } from '@mui/material';
import { IChildren } from 'types';

export const BasePageLayout = ({ children }: IChildren) => {
  return <Box>{children}</Box>;
};
