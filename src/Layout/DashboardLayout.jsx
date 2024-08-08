import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const [role, isRoleLoading] = useRole();
  return (
    <div className="relative min-h-screen lg:flex font-questrial gap-5">
      <Helmet>
        <title>Real Estate/{isRoleLoading ? "/" : `${role}/`}dashboard</title>
      </Helmet>

      <Sidebar />
      <div className="flex-1 bg-gray-50 lg:ml-64 py-14 px-5 md:px-8 lg:px-0 ">
        <div className=" max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
