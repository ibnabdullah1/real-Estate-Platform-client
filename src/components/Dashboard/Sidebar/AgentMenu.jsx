import { BsBuildingFillAdd } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import MenuItem from "./MenuItem";

const AgentMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="agent-profile" />
      <MenuItem
        icon={IoMdAddCircleOutline}
        label="Add Property"
        address="addProperties"
      />

      <MenuItem
        icon={BsBuildingFillAdd}
        label="My Added Properties"
        address="added-properties"
      />
      <MenuItem
        icon={MdEventAvailable}
        label="Sold Properties"
        address="sold-properties"
      />
      <MenuItem
        icon={FcSalesPerformance}
        label="Total  Sold properties"
        address="total-sold-properties"
      />

      <MenuItem
        icon={VscGitPullRequestGoToChanges}
        label="Requested Properties"
        address="request-offers"
      />
    </>
  );
};

export default AgentMenu;
