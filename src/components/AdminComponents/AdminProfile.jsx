import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Profile from "../Profile/Profile";

const AdminProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <Helmet>
        <title>Real Estate Community/Dashboard/User Profile</title>
      </Helmet>
      <Profile user={user} />
    </div>
  );
};

export default AdminProfile;
