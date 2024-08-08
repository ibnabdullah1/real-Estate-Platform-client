import useAuth from "../../Hooks/useAuth";
import Profile from "../Profile/Profile";

const AdminProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default AdminProfile;
