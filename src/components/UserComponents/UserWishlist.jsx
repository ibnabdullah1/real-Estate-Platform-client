import useAuth from "../../Hooks/useAuth";
import UserWishListCard from "./UserWishListCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { ImSpinner8 } from "react-icons/im";

const UserWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: wishlists = [],
    idLoading: isWishlistLoading,
  } = useQuery({
    queryKey: ["offerItems"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user?.email}`);
      return res.data;
    },
  });
  if (isWishlistLoading) {
    <div className="min-h-[60vh] flex justify-center">
      <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
    </div>;
  }

  console.log(wishlists);
  return (
    <div>
      <Helmet>
        <title>Real Estate/user/dashboard/wishlists</title>
      </Helmet>

      {wishlists.length === 0 && (
        <h1 className="text-gray-400 text-2xl font-semibold flex justify-center  min-h-screen items-center">
          You have not added any data to wishlist
        </h1>
      )}
      {wishlists.map((wishlist, i) => (
        <UserWishListCard key={i} wishlist={wishlist} refetch={refetch} />
      ))}
    </div>
  );
};

export default UserWishlist;
