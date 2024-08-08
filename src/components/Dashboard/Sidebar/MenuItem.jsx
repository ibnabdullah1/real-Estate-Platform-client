import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <div className="px-3 mb-4">
      <NavLink
        to={address}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-[6px]  rounded-full  transition-colors duration-300 transform     ${
            isActive
              ? "bg-[#1c4456] text-[#ffffff]"
              : "text-[#2d2c2c] hover:bg-[rgb(28,68,86,0.3)] hover:text-[#1c4456] "
          }`
        }
      >
        <Icon className="w-6 h-6" />

        <span className="font-medium text-sm uppercase">{label}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
