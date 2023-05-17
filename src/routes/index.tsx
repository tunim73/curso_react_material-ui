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
      path: "*",
      element: <Navigate to = '/'/>,
    },
  ]
  );
