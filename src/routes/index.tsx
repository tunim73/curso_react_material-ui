import {Navigate, createBrowserRouter} from "react-router-dom";
import App from "../App";


export const AppRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <Navigate to = '/'/>,
    },
  ]
  );
