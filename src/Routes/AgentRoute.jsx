import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AgentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role] = useRole();
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="min-h-[70vh] flex justify-center items-center ">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </>
    );
  }

  if (user && role == "agent") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AgentRoute;
