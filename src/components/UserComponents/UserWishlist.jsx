import { useEffect, useState } from "react";
import { getUserAllWishlist } from "../../Api/properties";
import useAuth from "../../Hooks/useAuth";
import UserWishListCard from "./UserWishListCard";

const UserWishlist = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const [wishlists, setWishlists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getUserAllWishlist(user?.email)
      .then((data) => {
        setWishlists(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  console.log(wishlists);
  return (
    <>
      {wishlists.map((wishlist, i) => (
        <UserWishListCard key={i} wishlist={wishlist} />
      ))}
    </>
  );
};

export default UserWishlist;
