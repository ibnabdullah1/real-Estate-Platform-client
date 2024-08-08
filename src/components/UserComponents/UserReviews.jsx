import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { RemoveReview } from "../../Api/properties";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import UserReviewsSkeleton from "../Skeleton/UserReviewsSkeleton";

const UserReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: reviews = [],
    isLoading: isReviewsLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${user.displayName}`);
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
        const res = await RemoveReview(id);
        if (res.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
        }
      }
    });
  };

  if (isReviewsLoading) {
    return <UserReviewsSkeleton />;
  }

  return (
    <div className="">
      <h2 className="heading text-center my-5">My Reviews</h2>
      <Helmet>
        <title>Real Estate/user/dashboard/my reviews</title>
      </Helmet>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-[#1c4456] ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Agent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Review Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Review
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((item) => (
              <tr
                key={item._id}
                className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
              >
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {item?.propertyTitle}
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {item?.agentName}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {item?.reviewDate}
                </td>
                <td className="px-6 py-3   text-left text-xs font-medium   tracking-wider">
                  <div className="w-[500px]">{item?.reviewDescription}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex justify-center gap-[2px]  items-center transform duration-500 px-6 py-2 text-sm font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isReviewsLoading && !reviews.length && (
          <h1 className="text-center my-4 text-red-500 font-medium">
            You have not submitted any reviews yet.
          </h1>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
