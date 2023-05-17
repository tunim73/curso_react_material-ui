import {Navigate, createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Button } from "@mui/material";


export const AppRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/pagina-inicial",
      element: <Button variant='contained' color='secondary'>Hello</Button>,
    },
    {
      path: "*",
      element: <Navigate to = '/'/>,
    },
  ]
  );
