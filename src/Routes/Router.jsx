import { createBrowserRouter } from "react-router-dom";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import Layout from "../Layout/Layout";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import AppliedCourses from "../AppliedCourses/AppliedCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        }
     , {
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
      {
        path: "/appliedCourses",
        element: <AppliedCourses></AppliedCourses>,
      },
    ],
  },
]);

export default router;
