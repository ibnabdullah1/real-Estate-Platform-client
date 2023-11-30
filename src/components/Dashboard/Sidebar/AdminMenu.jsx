import MenuItem from "./MenuItem";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { MdRateReview } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdReport } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="adminProfile" />
      <MenuItem
        icon={LuTableProperties}
        label="Manage Properties"
        address="manage-properties"
      />
      <MenuItem
        icon={MdOutlineManageAccounts}
        label="Manage Users"
        address="manage-users"
      />
      <MenuItem
        icon={MdRateReview}
        label="Manage Reviews"
        address="manage-reviews"
      />
      <MenuItem
        icon={MdReport}
        label="Manage Reports"
        address="manage-reports"
      />

      <MenuItem
        icon={RiAdvertisementFill}
        label="Advertise property"
        address="advertisements"
      />
    </>
  );
};

export default AdminMenu;
