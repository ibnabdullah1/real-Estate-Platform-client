import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../../../Hooks/useAuth";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import useRole from "../../../Hooks/useRole";
import { PiUserCircleGearFill } from "react-icons/pi";
export default function MenuDropdown() {
  const { user, logout } = useAuth();
  const [role] = useRole();
  const handleLogOut = () => {
    return logout();
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className=" border-[2px] border-gray-700 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
        <div className="hidden md:block">
          <img
            className="rounded-full h-8 w-8"
            referrerPolicy="no-referrer"
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/M9yzTb3/136-1366211-group-of-10-guys-login-user-icon-png.png"
            }
            alt="profile"
            height="30"
            width="30"
          />
        </div>
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
        <Menu.Items className="absolute p-3 right-0 mt-2 w-[350px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {user ? (
              <>
                <h2 className="flex items-center gap-1  px-2 font-normal text-xl">
                  <FaRegUserCircle /> {user?.displayName}
                </h2>
                <h2 className="flex items-center gap-1  px-2 font-normal text-xl">
                  <MdOutlineAlternateEmail /> {user.email}
                </h2>
                <h2 className="flex items-center px-2  gap-1 font-normal text-xl">
                  <PiUserCircleGearFill /> {role && role}
                </h2>
                <hr className="my-4 h-[2px] bg-gray-300" />
                <Menu.Item>
                  {({ active }) => (
                    <Link to={"/dashboard"}>
                      <button
                        className={`${
                          active ? "bg-[#1c4456] text-white" : "text-[#1c4456]"
                        } group flex w-full gap-1 items-center rounded-md px-2 py-2 font-semibold`}
                      >
                        <MdOutlineDashboardCustomize /> DASHBOARD
                      </button>
                    </Link>
                  )}
                </Menu.Item>{" "}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogOut}
                      className={`${
                        active ? "bg-[#1c4456] text-white" : "text-[#1c4456]"
                      } group flex w-full gap-1 font-semibold items-center rounded-md px-2 py-2`}
                    >
                      <LuLogOut /> LOG OUT
                    </button>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                <h2 className="flex items-center gap-1  px-2 font-semibold">
                  <FaRegUserCircle />
                  NO USER
                </h2>
                <Menu.Item>
                  {({ active }) => (
                    <Link to={"/login"}>
                      <button
                        className={`${
                          active ? "bg-[#1c4456] text-white" : "text-[#1c4456]"
                        } group flex w-full gap-1 font-semibold items-center rounded-md px-2 py-2`}
                      >
                        <LuLogOut /> LOG IN
                      </button>
                    </Link>
                  )}
                </Menu.Item>{" "}
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
