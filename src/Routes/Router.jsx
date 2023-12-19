import { createBrowserRouter } from "react-router-dom";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
