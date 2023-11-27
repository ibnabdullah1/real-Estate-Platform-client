import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProperties from "../Pages/AddProperties/AddProperties";
import AllProperties from "../components/AllProperties/AllProperties";
import UserProfile from "../components/UserComponents/UserProfile";
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
    children: [
      // user Dashboards
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "wishlist",
        element: <UserWishlist />,
      },
      {
        path: "wishlist/offer/:id",
        element: <OfferForm />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/wishlist/${params.id}`),
      },
      {
        path: "property-bought",
        element: <UserPropertyBought />,
      },
      {
        path: "user-reviews",
        element: <UserReview />,
      },
      // Agent Dashboards
      {
        path: "agent-profile",
        element: <AgentProfile />,
      },
      {
        path: "addProperties",
        element: <AddProperties />,
      },
      {
        path: "added-properties",
        element: <AgentAddedProperties />,
      },
    ],
  },
]);
export default router;
