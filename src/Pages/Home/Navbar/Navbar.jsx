import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ALL PROPERTIES", link: "/all-properties" },
    { name: "DASHBOARD", link: "/dashboard" },
    // { name: "LOGIN", link: "/login" },
  ];
  let [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScroll = scrollTop > 0;

      setScrolling(shouldScroll);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `navbar justify-between py-2 items-center fixed left-0  right-0 top-0 z-20 ${
    scrolling ? "bg-opacity-30  backdrop-blur-lg" : "bg-opacity-[100%]  "
  } max-w-7xl mx-auto bg-white text-[#1c4456]`;

  return (
    <div className={navbarClasses}>
      <div className="max-w-7xl mx-auto lg:flex  items-center justify-between  py-4 lg:px-10 px-3">
        {/* logo section */}
        <div className="flex items-center justify-between">
          <div className="flex  items-center justify-between">
            <img
              className="h-10"
              src="https://i.ibb.co/CmsPLg6/realestate.png"
              alt=""
            />
            <h2 className="font-bold text-2xl ">Real Estate</h2>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className=" cursor-pointer lg:hidden"
          >
            {open ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </div>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 bg-white bg-opacity-90  " : "top-[-490px]"
          }`}
        >
          {Links.map((link, i) => (
            <li key={i} className="md:ml-8 lg:my-0 my-7 font-semibold">
              <NavLink
                to={link.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " border-b-[3px]  border-b-[#1c4456] font-semibold "
                    : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* button */}
        <MenuDropdown />
      </div>
    </div>
  );
};

export default Navbar;