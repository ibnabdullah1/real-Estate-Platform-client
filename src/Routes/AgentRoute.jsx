import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { ImSpinner8 } from "react-icons/im";
const AgentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  const location = useLocation();
  console.log("In Agent Route ", location);
  console.log("User: ", user);
  console.log("Role: ", role);

  if (loading || isRoleLoading) {
    return (
      <>
        <div className="min-h-[60vh] flex justify-center">
          <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
        </div>
      </>
    );
  }

  if (user && role === "agent") {
    return children;
  }

  console.log("Redirecting to login...");
  return <Navigate state={{ from: location }} to="/login" />;
};

export default AgentRoute;
