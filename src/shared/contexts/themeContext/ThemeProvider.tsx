import { Box, ThemeProvider } from '@mui/material';
import { IChildren } from 'types';
import { ThemeContext } from './ThemeContext';
import { DarkTheme, LightTheme } from 'shared/theme';
import { useCallback, useMemo, useState } from 'react';
import { IThemeContext } from './ThemeContext';

export const AppThemeProvider = ({ children }: IChildren) => {
  const [themeName, setThemeName] =
    useState<IThemeContext['themeName']>('light');

  const toogleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light'
    );
  }, []);

  const theme = useMemo(() => {
    return themeName === 'light' ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
