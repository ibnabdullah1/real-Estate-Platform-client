import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";
import { TbLogin } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Dropdown = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            {user ? (
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/PmWMF1j/user.png"
                }
                alt={user?.displayName}
                color="green"
                className="w-[40px] h-[40px] rounded-full"
              />
            ) : (
              <button className="hover:bg-[#ffcc00] flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
                <FaUser />
              </button>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2  min-w-[270px] max-w-[300px] origin-top-right divide-y divide-gray-100 z-50  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div
              className="py-1 border-b border-gray-200 dark:border-gray-600"
              role="none"
            >
              <p className="px-4 pt-2 mb-1 font-normal text-gray-500 dark:text-gray-500">
                Signed in as:
              </p>
              <a className="flex px-3 py-2 text-sm items-center font-semibold text-gray-700 border-l-2 border-transparent hover:border-primary  hover:text-primary ">
                <span className="mr-2">
                  <PiUserCircleFill className="text-lg" />
                </span>
                {user ? user.email : "unknown user"}
              </a>
            </div>
            {user ? (
              <>
                <div role="none">
                  <a className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary">
                    <span className="mr-2">
                      <GoMail />
                    </span>
                    Messages
                  </a>
                </div>
                <div role="none">
                  <a className="flex px-[14px] cursor-pointer py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary">
                    <span className="mr-1">
                      <CiSettings className="text-lg" />
                    </span>
                    Settings
                  </a>
                </div>
                <div className="" role="none">
                  <Link
                    to="/dashboard"
                    className="flex px-4 py-2 cursor-pointer text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary"
                  >
                    <span className="mr-2">
                      <MdOutlineDashboardCustomize />{" "}
                    </span>
                    Dashboard
                  </Link>
                </div>
                <div role="none">
                  <button
                    onClick={handleLogout}
                    className="flex px-[12px]  py-2 text-sm text-gray-700 border-l-2 border-transparent  rounded-bl-md hover:border-primary  hover:text-primary"
                  >
                    <span className="mr-2">
                      <IoLogInOutline className="text-[16px]" />
                    </span>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link to={"/login"}>
                <button className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  rounded-bl-md hover:border-primary  hover:text-primary">
                  <span className="mr-2">
                    <TbLogin className="text-[15px]" />
                  </span>
                  Login
                </button>
              </Link>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default Dropdown;
