import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { ImSpinner8 } from "react-icons/im";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  const location = useLocation();
  if (loading || isRoleLoading) {
    return (
      <>
        <div className="min-h-[60vh] flex justify-center items-center">
          <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
        </div>
      </>
    );
  }

  if (user && role == "admin") {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace="true" />;
};

export default AdminRoute;
