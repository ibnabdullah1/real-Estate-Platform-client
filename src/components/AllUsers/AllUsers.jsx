import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { getFraudAgentProperties } from "../../Api/auth";
import { FindUserData, userRoleUpdate } from "../../Api/properties";
import useAxiosSecure from "../../Api/useAxiosSecure";
import AllUserSkeleton from "../Skeleton/AllUserSkeleton";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: users = [],
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRoleAdmin = async (id) => {
    try {
      const updateRole = await userRoleUpdate(id, "admin");
      if (updateRole.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleRoleAgent = async (id) => {
    try {
      const updateRole = await userRoleUpdate(id, "agent");
      if (updateRole.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleFraudUser = async (user, id) => {
    try {
      const updateRole = await userRoleUpdate(id, "fraud");
      if (updateRole.modifiedCount > 0) {
        const fraudUserData = await getFraudAgentProperties(user.email);
        const arrayOfIds = fraudUserData.map((item) => item._id);

        await FindUserData(arrayOfIds);
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isUserLoading) {
    return <AllUserSkeleton />;
  }
  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Users</h2>
      <Helmet>
        <title>Real Estate/admin/dashboard/manage users</title>
      </Helmet>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-[#1c4456] ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                user Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <div className="w-[100px]"> Make Admin</div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <div className="w-[100px]"> Make agent</div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr
                key={user._id}
                className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
              >
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {i + 1}
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> {user.name}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {user?.email}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {user?.role}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <button
                    onClick={() => handleRoleAdmin(user._id)}
                    disabled={user.role == "admin"}
                    className={
                      user.role == "admin"
                        ? "text-xs px-3 py-2 font-medium  rounded bg-[#dfe2e0] text-gray-400 "
                        : "text-xs px-3 py-2 font-medium  rounded bg-[#1a4153] text-white "
                    }
                  >
                    Admin
                  </button>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <button
                    onClick={() => handleRoleAgent(user._id)}
                    disabled={user.role == "agent"}
                    className={
                      user.role == "agent"
                        ? "text-xs px-3 py-2 font-medium  rounded bg-[#dfe2e0] text-gray-400 "
                        : "text-xs px-3 py-2 font-medium  rounded bg-[#21aa6a] text-white "
                    }
                  >
                    Agent
                  </button>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[200px]">
                    <button
                      onClick={() => handleDelete(user)}
                      className=" text-xs px-3 py-2 font-medium  rounded bg-[#f01515] text-white"
                    >
                      Delete
                    </button>
                    {user.role === "agent" && (
                      <button
                        onClick={() => handleFraudUser(user, user._id)}
                        className=" ml-3 text-xs px-3 py-2 font-medium  rounded bg-[#f01515] text-white "
                      >
                        Fraud
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
