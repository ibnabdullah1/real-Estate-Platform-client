import { FiFilter } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import CartBadge from "../components/CartBadge";
import DashboardDropdown from "../components/Dashboard/DashboardDropdown";
import useAuth from "../Hooks/useAuth";

const DashboardNavbar = ({ isActive, handleToggle }) => {
  const { user } = useAuth();

  return (
    <div className="max-w-[920px] mx-auto bg-gray-50 sticky top-0 z-10 flex gap-2 justify-between items-center py-3 px-4">
      <Link
        to="/"
        className="flex lg:hidden items-center justify-center font-semibold relative text-2xl text-[#004068] "
      >
        <h1>Real</h1>
        <img
          className=" w-10"
          src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-house-real-estate-icon-png-image_6319467.png"
          alt=""
        />
        <h3 className="text-primary">Estate</h3>
      </Link>
      <div className="lg:flex hidden items-center gap-2">
        <div className="flex items-center bg-gray-100  rounded-lg gap-2 p-[6px]">
          <LuSearch className="text-gray-400" />

          <input
            type="text"
            name=""
            id=""
            className="placeholder:text-sm w-[400px] bg-gray-100 placeholder:text-slate-400 border-none outline-none focus:ring-0"
            placeholder="Search"
          />
        </div>

        <div className="p-[8px] rounded-lg place-items-center bg-[#ff6600df]  text-white transition-a hover:bg-[#FF6400]">
          <FiFilter />
        </div>
      </div>
      <div className="flex  items-center gap-2">
        <CartBadge />
        {user?.email && <DashboardDropdown />}{" "}
        <button
          onClick={handleToggle}
          className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary"
        >
          {isActive ? (
            <HiMiniBars3 className="text-2xl" />
          ) : (
            <MdClose className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
