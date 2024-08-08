import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import CartBadge from "../../../components/CartBadge";
import WishlistIcon from "../../../components/WishlistIcon";
import useAuth from "../../../Hooks/useAuth";
import Dropdown from "./MenuDropdown";

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Properties", link: "/properties" },
    { name: "Reviews", link: "/reviews" },
    { name: "FAQs", link: "/faq" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <header className="max-w-7xl mx-auto  flex justify-between items-center px-4 lg:px-8 py-2">
      <Link to="/">
        <div className="">
          <div className="flex items-center justify-center font-semibold relative text-2xl text-[#004068] ">
            <img
              className="w-10"
              src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-house-real-estate-icon-png-image_6319467.png"
              alt=""
            />{" "}
            <h1>Real</h1>
            <h3 className="text-primary">Estate</h3>
          </div>
        </div>
      </Link>
      <div
        className={`fixed top-[56px] bg-gray-100  lg:bg-transparent right-0  lg:px-7 pb-7 pt-4 w-[250px] lg:w-auto h-full overflow-auto transform transition-transform duration-500 ${
          isMenuOpen
            ? "translate-x-0  "
            : "translate-x-full lg:translate-x-0   "
        } lg:static lg:p-0 lg:overflow-visible `}
      >
        <ul className="list-none block bg-opacity-5 lg:flex gap-5">
          {Links.map((item) => (
            <li
              key={item.link}
              className="my-2 border-b lg:border-b-0 border-b-gray-300 pb-1 lg:pb-0 px-4 lg:px-0"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `  duration-300 lg:pb-[2px] ${
                    isActive
                      ? "text-orange-500 lg:border-b-2  border-orange-500"
                      : "text-[#333333] hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        {user?.email && <WishlistIcon />}

        <CartBadge />
        <Dropdown />
        <button
          onClick={toggleMenu}
          className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary"
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <HiMiniBars3 className="text-2xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
