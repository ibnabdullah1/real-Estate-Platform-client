import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { ReportPropertyDelete } from "../../Api/properties";
import useAxiosSecure from "../../Api/useAxiosSecure";
import ManageReportSkeleton from "../Skeleton/ManageReportSkeleton";

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

  if (isReportsLoading) {
    return <ManageReportSkeleton />;
  }

  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Reports</h2>
      <Helmet>
        <title>Real Estate/admin/dashboard/manage reports</title>
      </Helmet>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-[#1c4456] ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <div>Image</div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
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
    </div>
  );
};

export default ManageReports;
