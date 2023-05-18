import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/pagina-inicial',
      element: <h1>Pagina Inicial</h1>,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return { routes };
};
