import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/index.js';
import { useDrawerContext } from './shared/contexts/index.js';
import { useEffect } from 'react';
import listMenu from './data/drawerOptionsData.json';

export const AppProvider = () => {
  const { routes } = AppRoutes();
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions(listMenu);
  }, []);

  return <RouterProvider router={routes} />;
};
