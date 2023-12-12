import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ALL PROPERTIES", link: "/all-properties" },
    { name: "REVIEWS", link: "/reviews" },
    { name: "AGENT LIST", link: "/agents" },
    { name: "CONTACT", link: "/contact" },
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

  const navbarClasses = `navbar justify-between items-center fixed left-0  right-0 top-0 z-20 ${
    scrolling ? "bg-opacity-30  backdrop-blur-lg" : "bg-opacity-[100%]  "
  } bg-white text-[#1c4456]`;

  return (
    <div className={navbarClasses}>
      <div className="max-w-6xl mx-auto lg:flex  items-center justify-between  py-4 lg:px-10 px-3">
        {/* logo section */}
        <div className="flex items-center justify-between">
          <div className="flex  items-center justify-between">
            <img
              className=" w-10"
              src="https://i.ibb.co/9HSJFBL/Real-Estatelogo.png"
              alt=""
            />
            <h2 className="font-bold text-2xl uppercase ">
              Real <span className="text-[#f49d19]">Estate</span>
            </h2>
          </div>

          <div className="flex cursor-pointer gap-3 lg:hidden justify-center items-center">
            <MenuDropdown />
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
                onClick={() => setOpen(false)}
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

        <div className="cursor-pointer hidden lg:flex">
          <MenuDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
