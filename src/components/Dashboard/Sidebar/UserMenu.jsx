import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoCodeReview } from "react-icons/go";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

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
      <MenuItem icon={GoCodeReview} label="My Reviews" address="user-reviews" />
      <MenuItem
        icon={AiOutlineAppstoreAdd}
        label="Property Bought"
        address="property-bought"
      />
    </>
  );
};

export default UserMenu;
