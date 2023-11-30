import useAxiosSecure from "../../Api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { ReportPropertyDelete } from "../../Api/properties";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ManageReports = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: reports = [],
    isLoading: isReportsLoading,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reports");
      return res.data;
    },
  });
  console.log(reports);
  if (isReportsLoading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center ">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await ReportPropertyDelete(id);
        console.log(res);
        if (res.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your property has been deleted.", "success");
        }
        if (res.deletedCount === 0) {
          refetch();
          toast.error("Your property already has been deleted");
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <Helmet>
        <title>Real Estate/admin/dashboard/manage reports</title>
      </Helmet>
      <table className="table w-full">
        {/* head */}
        <thead className="text-left bg-[#1c4456] ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              <div className="w-[150px]"> Reporter Image</div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Reporter email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Reporter name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Property title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Agent Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Reports
            </th>

            <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reports?.map((user) => (
            <tr
              key={user._id}
              className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
            >
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <img
                  className="rounded-full h-10 w-10"
                  referrerPolicy="no-referrer"
                  src={
                    user && user.reporterImage
                      ? user.reporterImage
                      : "https://www.svgrepo.com/show/527946/user-circle.svg"
                  }
                  alt="profile"
                  height="30"
                  width="30"
                />
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]"> {user?.reporterEmail}</div>
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]  "> {user?.reporterName}</div>
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]  "> {user?.propertyTitle}</div>
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]  "> {user?.agentName}</div>
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[200px]"> {user?.reviewDescription}</div>
              </td>

              <td className="px-6 py-3 text-center text-xs font-medium   tracking-wider">
                <div className="w-[200px] ">
                  <button
                    onClick={() => handleDelete(user.propertyId)}
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    Property Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReports;
