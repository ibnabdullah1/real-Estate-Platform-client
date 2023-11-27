import useAuth from "../../Hooks/useAuth";
import Profile from "../Profile/Profile";

const AgentProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default AgentProfile;
