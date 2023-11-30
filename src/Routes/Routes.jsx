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
import AgentProfile from "../components/AgentComponents/AgentProfile";
import AdminProfile from "../components/AdminComponents/AdminProfile";
import OfferForm from "../components/Form/OfferForm";
import ManageProperties from "../components/AdminComponents/ManageProperties";
import AgentAddedProperties from "../components/AgentComponents/AgentAddedproperties";
import AllUsers from "../components/AllUsers/AllUsers";
import UpdateForm from "../components/Form/UpdateForm";
import RequestOffers from "../components/AgentComponents/RequestOffers";
import PaymentPage from "../components/UserComponents/PaymentPage";
import Advertisement from "../components/AdminComponents/Advertisement";
import SoldProperties from "../components/AgentComponents/SoldProperties";
import UserReviews from "../components/UserComponents/UserReviews";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import PrivateRoute from "./PrivateRoute";
import ManageReviews from "../components/AgentComponents/ManageReviews";
import ManageReports from "../components/AgentComponents/ManageReport";

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
        element: (
          <PrivateRoute>
            <PropertiesDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://real-estate-platform-server-eight.vercel.app/properties/${params.id}`
          ),
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
          fetch(
            `https://real-estate-platform-server-eight.vercel.app/wishlist/${params.id}`
          ),
      },
      {
        path: "property-bought",
        element: <UserPropertyBought />,
      },
      {
        path: "user-reviews",
        element: <UserReviews />,
      },
      {
        path: "property-bought/payment/:id",
        element: <PaymentPage />,
        loader: ({ params }) =>
          fetch(
            `https://real-estate-platform-server-eight.vercel.app/addedOfferPayment/${params.id}`
          ),
      },
      // Agent Dashboards
      {
        path: "agent-profile",
        element: (
          <AgentRoute>
            <AgentProfile />
          </AgentRoute>
        ),
      },
      {
        path: "addProperties",
        element: (
          <AgentRoute>
            <AddProperties />
          </AgentRoute>
        ),
      },
      {
        path: "added-properties",
        element: (
          <AgentRoute>
            <AgentAddedProperties />
          </AgentRoute>
        ),
      },
      {
        path: "request-offers",
        element: (
          <AgentRoute>
            <RequestOffers />
          </AgentRoute>
        ),
      },
      {
        path: "sold-properties",
        element: (
          <AgentRoute>
            <SoldProperties />
          </AgentRoute>
        ),
      },
      {
        path: "added-properties/update/:id",
        element: (
          <AgentRoute>
            <UpdateForm />
          </AgentRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://real-estate-platform-server-eight.vercel.app/addedProperty/${params.id}`
          ),
      },

      // Admin Dashboards
      {
        path: "adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-properties",
        element: (
          <AdminRoute>
            <ManageProperties />
          </AdminRoute>
        ),
      },
      {
        path: "manage-reviews",
        element: (
          <AdminRoute>
            <ManageReviews />
          </AdminRoute>
        ),
      },
      {
        path: "manage-reports",
        element: (
          <AdminRoute>
            <ManageReports />
          </AdminRoute>
        ),
      },
      {
        path: "advertisements",
        element: (
          <AdminRoute>
            <Advertisement />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
