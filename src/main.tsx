import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppThemeProvider, AppDrawerProvider } from './shared/contexts';
import { AppProvider } from './AppProvider';
import './styles/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppDrawerProvider>
        <AppProvider />
      </AppDrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
