import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Helmet } from "react-helmet-async";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const [role, isRoleLoading] = useRole();
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>Real Estate/{isRoleLoading ? "/" : `${role}/`}dashboard</title>
      </Helmet>
      <Sidebar />
      <div className="flex-1 bg-[#f5fcff] md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
