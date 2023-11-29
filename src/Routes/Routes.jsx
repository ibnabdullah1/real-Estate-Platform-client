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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // user Dashboards
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <UserWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist/offer/:id",
        element: (
          <PrivateRoute>
            <OfferForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/wishlist/${params.id}`),
      },
      {
        path: "property-bought",
        element: (
          <PrivateRoute>
            {" "}
            <UserPropertyBought />
          </PrivateRoute>
        ),
      },
      {
        path: "user-reviews",
        element: (
          <PrivateRoute>
            <UserReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "property-bought/payment/:id",
        element: <PaymentPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addedOfferPayment/${params.id}`),
      },
      // Agent Dashboards
      {
        path: "agent-profile",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <AgentProfile />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "addProperties",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <AddProperties />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "added-properties",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <AgentAddedProperties />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "request-offers",
        element: (
          <PrivateRoute>
            {" "}
            <AgentRoute>
              <RequestOffers />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "sold-properties",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <SoldProperties />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "added-properties/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <AgentRoute>
              <UpdateForm />
            </AgentRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addedProperty/${params.id}`),
      },

      // Admin Dashboards
      {
        path: "adminProfile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-properties",
        element: (
          <PrivateRoute>
            {" "}
            <AdminRoute>
              <ManageProperties />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-reviews",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageReviews />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "advertisements",
        element: (
          <PrivateRoute>
            {" "}
            <AdminRoute>
              <Advertisement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
