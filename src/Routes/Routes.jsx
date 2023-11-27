import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import AddProperties from "../Pages/AddProperties/AddProperties";
import AllProperties from "../components/AllProperties/AllProperties";
import PropertiesDetails from "../components/AllProperties/PropertiesDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import UserProfile from "../components/UserComponents/UserProfile";
import UserWishlist from "../components/UserComponents/UserWishlist";
import UserPropertyBought from "../components/UserComponents/UserPropertyBought";
import UserReview from "../components/UserComponents/UserReview";
import AgentProfile from "../components/AgentComponents/AgentProfile";
import AdminProfile from "../components/AdminComponents/AdminProfile";
import OfferForm from "../components/Form/OfferForm";
import ManageProperties from "../components/AdminComponents/ManageProperties";
import AgentAddedProperties from "../components/AgentComponents/AgentAddedproperties";
import AllUsers from "../components/AllUsers/AllUsers";
import UpdateForm from "../components/Form/UpdateForm";
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
      {
        path: "added-properties/update/:id",
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addedProperty/${params.id}`),
      },

      // Admin Dashboards
      {
        path: "adminProfile",
        element: <AdminProfile />,
      },
      {
        path: "manage-users",
        element: <AllUsers />,
      },
      {
        path: "manage-properties",
        element: <ManageProperties />,
      },
    ],
  },
]);
export default router;
