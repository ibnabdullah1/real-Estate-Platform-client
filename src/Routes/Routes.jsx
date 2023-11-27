import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProperties from "../Pages/AddProperties/AddProperties";
import AllProperties from "../components/AllProperties/AllProperties";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/all-properties",
        element: <AllProperties />,
      },
      {
        path: "/properties/:id",
        element: <PropertiesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/properties/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
  },
]);
export default router;
