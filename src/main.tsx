import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/index.tsx';
import { AppThemeProvider, AppDrawerProvider } from './shared/contexts';
import './styles/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppDrawerProvider>
        <RouterProvider router={AppRoutes} />
      </AppDrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
