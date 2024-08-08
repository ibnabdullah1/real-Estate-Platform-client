import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  const location = useLocation();
  if (loading || isRoleLoading) {
    return;
  }

  if (user && role == "admin") {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace="true" />;
};

export default AdminRoute;
