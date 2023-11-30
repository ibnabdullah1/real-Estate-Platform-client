import { Helmet } from "react-helmet-async";
import useRole from "../../Hooks/useRole";

const Profile = ({ user }) => {
  const [role] = useRole();
  console.log(role);
  return (
    <div className="max-w-4xl mx-auto bg-[#E3EFF3]">
      <Helmet>
        <title>Real Estate/{`${role}/`}dashboard/profile</title>
      </Helmet>
      <div className="rounded-t-lg h-[200px] overflow-hidden">
        <img
          className="object-cover object-bottom w-full"
          src={
            role === "admin"
              ? "https://img.freepik.com/premium-vector/interface-structure-data-calculation-systems_49459-481.jpg"
              : "https://img.freepik.com/premium-photo/misty-mountain-landscape-grey-background_1008702-135.jpg"
          }
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative ">
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src={user.photoURL}
            alt="Woman looking front"
          />
        </div>
        {role && (
          <button className="rounded-full uppercase  font-semibold px-3 py-1 text-xs absolute  top-4 bg-gray-900 text-white -right-3">
            {role}
          </button>
        )}
      </div>
      <div className="text-center mt-2 pb-20">
        <h2 className="font-semibold text-[#1c4456]">{user?.displayName}</h2>
        <p className="text-[#1c4456]">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
