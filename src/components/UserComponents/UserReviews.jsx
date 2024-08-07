import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { RemoveReview } from "../../Api/properties";
import { Helmet } from "react-helmet-async";

const UserReviews = () => {
  const { user } = useAuth();
  console.log(user.displayName);
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: reviews = [],
    isLoading: isReviewsLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      console.log(user);
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
        // console.log(res);
        if (res.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your Property has been deleted.", "success");
        }
      }
    });
  };

  //   console.log(reviews);
  return (
    <div className="overflow-x-auto max-w-8xl mx-auto">
      <Helmet>
        <title>Real Estate/user/dashboard/my reviews</title>
      </Helmet>
      <table className="table w-full">
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

      {/* {IsSoldPropertiesLoading && (
            <div className="min-h-[60vh] flex justify-center">
              <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
            </div>
          )}
          {!IsSoldPropertiesLoading && !soldProperties.length && (
            <h2>You have not sold any property</h2>
          )} */}
    </div>
  );
};

export default UserReviews;
