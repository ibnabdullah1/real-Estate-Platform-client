import { FaUsers } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Api/useAxiosSecure";
import { useState } from "react";
import { userRoleUpdate } from "../../Api/properties";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRoleAdmin = async (id) => {
    setLoading(true);

    try {
      const updateRole = await userRoleUpdate(id, "admin");
      if (updateRole.modifiedCount > 0) {
        refetch();
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRoleAgent = async (id) => {
    setLoading(true);

    try {
      const updateRole = await userRoleUpdate(id, "agent");
      if (updateRole.modifiedCount > 0) {
        refetch();
      }
      setLoading(false);
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

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <table className="table w-full">
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
              Make Admin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Make agent
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
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
                {user.name}
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
              <td className="px-6 py-3 text-center text-xs font-medium   tracking-wider">
                <button
                  onClick={() => handleDelete(user)}
                  className=" text-xs px-3 py-2 font-medium  rounded bg-[#f01515] text-white "
                >
                  Delete
                </button>
                {user.role === "agent" && (
                  <button className=" ml-3 text-xs px-3 py-2 font-medium  rounded bg-[#f01515] text-white ">
                    Fraud
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
