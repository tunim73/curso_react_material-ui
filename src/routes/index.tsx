import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Dashboard } from 'pages';
import { DefaultPageWithMenu } from 'shared/layouts';

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/pagina-inicial" />,
    },
    {
      path: '/',
      element: <DefaultPageWithMenu />,
      children: [
        {
          path: 'pagina-inicial',
          element: <Dashboard />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/pagina-inicial" />,
    },
  ]);

  return { routes };
};
