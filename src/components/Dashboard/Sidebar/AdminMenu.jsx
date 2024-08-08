import { BsBuildingGear } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FcAdvertising } from "react-icons/fc";
import {
  MdOutlineManageAccounts,
  MdRateReview,
  MdReport,
} from "react-icons/md";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="adminProfile" />
      <MenuItem
        icon={BsBuildingGear}
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
        icon={FcAdvertising}
        label="Manage Advertisement"
        address="advertisements"
      />
    </>
  );
};

export default AdminMenu;
