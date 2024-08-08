import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { LuHome } from "react-icons/lu";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { Link } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import SidebarSkeleton from "../../Skeleton/SidebarSkeleton";
import AdminMenu from "./AdminMenu";
import AgentMenu from "./AgentMenu";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";

const Sidebar = ({ isActive }) => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <div
      className={`z-20 fixed flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)]  bg-[#fff] w-[280px] space-y-6  pb-4  inset-y-0 left-0 transform ${
        isActive && "-translate-x-full"
      }  lg:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        <div className="sticky py-2 top-0 bg-white z-40">
          <Link to="/">
            <div className="">
              <div className="flex items-center justify-center font-semibold relative text-2xl text-[#004068] ">
                <h1>Real</h1>
                <img
                  className=" w-10"
                  src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-house-real-estate-icon-png-image_6319467.png"
                  alt=""
                />
                <h3 className="text-primary">Estate</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <MenuItem
              icon={MdOutlineDashboardCustomize}
              label="Dashboard"
              address=""
            />
            {/* Admin menu items */}
            {role === "admin" && <AdminMenu />}
            {/* User Menu Items */}
            {role === "user" && <UserMenu />}
            {/* Host Menu Items */}
            {role === "agent" && <AgentMenu />}
            <div className="w-full h-[1px] bg-secondary/30 my-8"></div>
            <MenuItem icon={LuHome} label="Home" address="/" />{" "}
            <MenuItem
              icon={HiMiniBuildingOffice2}
              label="Properties"
              address="/properties"
            />
            <MenuItem
              icon={MdOutlineConnectWithoutContact}
              label="Contact"
              address="/contact-us"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
