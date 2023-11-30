import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import OfferItemCard from "./OfferItemCard";
import { Helmet } from "react-helmet-async";

const UserPropertyBought = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState();
  const { refetch, data: offerItems = [] } = useQuery({
    queryKey: ["offerItems"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addedOffer/${user?.email}`);
      return res.data;
    },
  });
  console.log(offerItems);

  return (
    <div>
      <Helmet>
        <title>Real Estate/user/dashboard/property bought</title>
      </Helmet>
      {offerItems.length > 0 &&
        offerItems.map((offerItem, i) => (
          <OfferItemCard key={i} offerItem={offerItem} />
        ))}
    </div>
  );
};

export default UserPropertyBought;
