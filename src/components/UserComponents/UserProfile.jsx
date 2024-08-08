import useAuth from "../../Hooks/useAuth";
import Profile from "../Profile/Profile";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default UserProfile;
