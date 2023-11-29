import MenuItem from "./MenuItem";
import { BsBuildingFillAdd } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { VscDiffAdded } from "react-icons/vsc";

const AgentMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="agent-profile" />
      <MenuItem
        icon={VscDiffAdded}
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
        icon={VscGitPullRequestGoToChanges}
        label="Requested Properties"
        address="request-offers"
      />
    </>
  );
};

export default AgentMenu;
