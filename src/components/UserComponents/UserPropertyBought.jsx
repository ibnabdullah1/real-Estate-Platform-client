import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import OfferItemCardSkeleton from "../Skeleton/OfferItemCardSkeleton";
import OfferItemCard from "./OfferItemCard";

const UserPropertyBought = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: offerItems = [], isLoading: isOfferItemLoading } = useQuery({
    queryKey: ["offerItems"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addedOffer/${user?.email}`);
      return res.data;
    },
  });

  if (isOfferItemLoading) {
    return <OfferItemCardSkeleton />;
  }

  return (
    <div>
      <Helmet>
        <title>Real Estate/user/dashboard/property bought</title>
      </Helmet>

      {offerItems.map((offerItem, i) => (
        <OfferItemCard key={i} {...offerItem} />
      ))}
      {!isOfferItemLoading && !offerItems.length && (
        <h1 className="text-center my-4 text-red-500 font-medium">
          You are not interested in buying any data.
        </h1>
      )}
    </div>
  );
};

export default UserPropertyBought;
