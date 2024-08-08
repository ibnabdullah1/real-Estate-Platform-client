import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import useRole from "../Hooks/useRole";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [role, isRoleLoading] = useRole();
  return (
    <div className="relative min-h-screen lg:flex font-questrial gap-5">
      <Helmet>
        <title>Real Estate/{isRoleLoading ? "/" : `${role}/`}dashboard</title>
      </Helmet>

      <Sidebar isActive={isActive} />
      <div className="flex-1 bg-gray-50 lg:ml-64 ">
        <DashboardNavbar handleToggle={handleToggle} isActive={isActive} />
        <div className=" max-w-4xl mx-auto py-14 px-5 md:px-8 lg:px-0 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
