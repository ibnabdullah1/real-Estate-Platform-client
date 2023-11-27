import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function MenuDropdown() {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    return logout();
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
        <div className="hidden md:block">
          <img
            className="rounded-full h-10 w-10"
            referrerPolicy="no-referrer"
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://www.svgrepo.com/show/527946/user-circle.svg"
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {user ? (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogOut}
                    className={`${
                      active ? "bg-[#1c4456] text-white" : "text-[#1c4456]"
                    } group flex w-full font-semibold items-center rounded-md px-2 py-2`}
                  >
                    LOG OUT
                  </button>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/login"}>
                    <button
                      onClick={handleLogOut}
                      className={`${
                        active ? "bg-[#1c4456] text-white" : "text-[#1c4456]"
                      } group flex w-full font-semibold items-center rounded-md px-2 py-2`}
                    >
                      LOG IN
                    </button>
                  </Link>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
              {({ active }) => (
                <Link to={"/dashboard"}>
                  <button
                    className={`${
                      active ? "bg-[#1c4456] text-white" : "text-[#1c4456]"
                    } group flex w-full items-center rounded-md px-2 py-2 font-semibold`}
                  >
                    DASHBOARD
                  </button>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
