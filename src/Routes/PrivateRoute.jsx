import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  // if (loading) {
  //   return (
  //     <div className="min-h-[60vh] flex justify-center items-center">
  //       <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
  //     </div>
  //   );
  // }
  if (loading) {
    return;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
