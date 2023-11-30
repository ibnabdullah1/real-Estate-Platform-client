import { useState } from "react";
// Components
import MenuItem from "./MenuItem";
// Icons
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import useRole from "../../../Hooks/useRole";
import AgentMenu from "./AgentMenu";
import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    return logout();
  };
  const [role] = useRole();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}

      <div className="bg-gray-100 text-gray-800 flex justify-end md:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#1c4456] w-64 space-y-6  py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="flex justify-center ">
            <Link to="/">
              <button className="flex items-center rounded-full hover:shadow-xl px-7 py-2  bg-[rgb(19,47,60,0.2)]">
                <img
                  className="h-6 w-12"
                  src="https://i.ibb.co/CmsPLg6/realestate.png"
                  alt=""
                />
                <h2 className="font-semibold text-xl text-white">
                  Real Estate
                </h2>
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Admin menu items */}
              {role === "admin" && <AdminMenu />}
              {/* User Menu Items */}
              {role === "user" && <UserMenu />}
              {/* Host Menu Items */}
              {role === "agent" && <AgentMenu />}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
