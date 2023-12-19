import { createBrowserRouter } from "react-router-dom";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import Layout from "../Layout/Layout";
import Courses from "../Courses/Courses";

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
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
  },
]);

export default router;
