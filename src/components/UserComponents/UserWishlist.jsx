import useAuth from "../../Hooks/useAuth";
import UserWishListCard from "./UserWishListCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UserWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: wishlists = [],
    idLoading: iswishlistLoading,
  } = useQuery({
    queryKey: ["offerItems"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user?.email}`);
      return res.data;
    },
  });
  console.log(wishlists);
  return (
    <div>
      <Helmet>
        <title>Real Estate/user/dashboard/wishlists</title>
      </Helmet>
      {wishlists.map((wishlist, i) => (
        <UserWishListCard key={i} wishlist={wishlist} refetch={refetch} />
      ))}
    </div>
  );
};

export default UserWishlist;
