import { CgProfile } from "react-icons/cg";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";

import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="user-profile" />
      <MenuItem
        icon={MdPlaylistAddCheckCircle}
        label="Wishlist"
        address="wishlist"
      />
      <MenuItem
        icon={AiOutlineAppstoreAdd}
        label="Property Bought"
        address="property-bought"
      />
      <MenuItem icon={GoCodeReview} label="My Reviews" address="user-reviews" />
    </>
  );
};

export default UserMenu;
