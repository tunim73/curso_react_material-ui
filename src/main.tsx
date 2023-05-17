import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from './routes/index.tsx';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './shared/theme/Light.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)


root.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={AppRoutes}/>
    </ThemeProvider>
  </React.StrictMode>
)
