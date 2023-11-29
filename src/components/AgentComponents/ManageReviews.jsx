import React from "react";
import useAxiosSecure from "../../Api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { RemoveReview } from "../../Api/properties";

const ManageReviews = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: reviews = [],
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  console.log(reviews);
  if (isUserLoading) {
    return "loading....";
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
        const res = await RemoveReview(id);

        if (res.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
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
              Reviewer Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Reviewer email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Reviewer name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Review
            </th>

            <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((user) => (
            <tr
              key={user._id}
              className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
            >
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <img
                  className="rounded-full h-10 w-10"
                  referrerPolicy="no-referrer"
                  src={
                    user && user.reviewerImage
                      ? user.reviewerImage
                      : "https://www.svgrepo.com/show/527946/user-circle.svg"
                  }
                  alt="profile"
                  height="30"
                  width="30"
                />
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {user?.reviewerName}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {user?.reviewerName}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {user?.reviewDescription}
              </td>

              <td className="px-6 py-3 text-center text-xs font-medium   tracking-wider">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReviews;
