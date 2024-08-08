import { createBrowserRouter } from "react-router-dom";
import AdminProfile from "../components/AdminComponents/AdminProfile";
import Advertisement from "../components/AdminComponents/Advertisement";
import ManageProperties from "../components/AdminComponents/ManageProperties";
import AgentAddedProperties from "../components/AgentComponents/AgentAddedProperties";
import AgentProfile from "../components/AgentComponents/AgentProfile";
import ManageReports from "../components/AgentComponents/ManageReport";
import ManageReviews from "../components/AgentComponents/ManageReviews";
import RequestOffers from "../components/AgentComponents/RequestOffers";
import SoldProperties from "../components/AgentComponents/SoldProperties";
import TotalSoldProperties from "../components/AgentComponents/TotalSoldProperties";
import PropertiesDetails from "../components/AllProperties/PropertiesDetails";
import PropertyFive from "../components/AllProperties/PropertyFive";
import AllUsers from "../components/AllUsers/AllUsers";
import Dashboard from "../components/Dashboard/Dashboard";
import OfferForm from "../components/Form/OfferForm";
import UpdateForm from "../components/Form/UpdateForm";
import Reviews from "../components/Reviews/Reviews";
import PaymentPage from "../components/UserComponents/PaymentPage";
import UserProfile from "../components/UserComponents/UserProfile";
import UserPropertyBought from "../components/UserComponents/UserPropertyBought";
import UserReviews from "../components/UserComponents/UserReviews";
import UserWishlist from "../components/UserComponents/UserWishlist";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import AddProperties from "../Pages/AddProperties/AddProperties";
import ContactUs from "../Pages/Contact/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQs from "../Pages/FAQ/FAQs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Service from "../Pages/services/Service";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import PrivateRoute from "./PrivateRoute";

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
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/properties",
        element: <PropertyFive />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/faq",
        element: <FAQs />,
      },

      {
        path: "/properties/:id",
        element: <PropertiesDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
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
        path: "",
        element: <Dashboard />,
      },
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
            `https://real-estate-community-server.vercel.app/wishlist/${params.id}`
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
            `https://real-estate-community-server.vercel.app/addedOfferPayment/${params.id}`
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
        path: "total-sold-properties",
        element: (
          <AgentRoute>
            <TotalSoldProperties />
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
            `https://real-estate-community-server.vercel.app/addedProperty/${params.id}`
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
