import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import UserWishListCardSkeleton from "../Skeleton/UserWishListCardSkeleton";
import UserWishListCard from "./UserWishListCard";

const UserWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: wishlists = [],
    isLoading: isWishlistLoading,
  } = useQuery({
    queryKey: ["offerItems"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user?.email}`);
      return res.data;
    },
  });
  if (isWishlistLoading) {
    return <UserWishListCardSkeleton />;
  }

  return (
    <div>
      <Helmet>
        <title>Real Estate/user/dashboard/wishlists</title>
      </Helmet>

      {wishlists.map((wishlist, i) => (
        <UserWishListCard key={i} {...wishlist} refetch={refetch} />
      ))}

      {!isWishlistLoading && !wishlists?.length && (
        <h2 className="text-center my-4 text-red-500 font-medium">
          You have not added any data to wishlist
        </h2>
      )}
    </div>
  );
};

export default UserWishlist;
