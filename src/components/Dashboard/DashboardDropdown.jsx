import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import { TbLogin } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const DashboardDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <Menu.Button>
        {user?.email && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-100 relative rounded-full flex gap-2 justify-center items-center md:p-1 border-[2px] top-[2px] border-gray-200"
          >
            <img
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://i.ibb.co/PmWMF1j/user.png"
              }
              alt={user?.displayName}
              color="green"
              className="h-[26px] w-[26px] md:h-[23px] md:w-[23px] rounded-full "
            />
            <div className="absolute flex md:hidden top-[2px] right-[-1px] w-2 h-2 rounded-full bg-green-500" />
            <p className="md:flex hidden font-semibold text-sm text-[#333333] ">
              {user?.displayName.slice(0, 10)}.
            </p>

            {isOpen ? (
              <IoIosArrowUp className="ml-1 text-gray-600 md:flex hidden " />
            ) : (
              <IoIosArrowDown className="ml-1 text-gray-600 md:flex hidden " />
            )}
          </button>
        )}
      </Menu.Button>

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
  );
};
export default DashboardDropdown;
