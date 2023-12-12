import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import OfferItemCard from "./OfferItemCard";
import { Helmet } from "react-helmet-async";
import { ImSpinner8 } from "react-icons/im";

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
  console.log(offerItems);
  if (isOfferItemLoading) {
    <div className="min-h-[60vh] flex justify-center">
      <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
    </div>;
  }

  return (
    <div>
      <Helmet>
        <title>Real Estate/user/dashboard/property bought</title>
      </Helmet>
      {offerItems.length === 0 && (
        <h1 className="text-gray-400 text-2xl font-semibold flex justify-center  min-h-screen items-center">
          You are not interested in buying any data.
        </h1>
      )}
      {offerItems.length > 0 &&
        offerItems.map((offerItem, i) => (
          <OfferItemCard key={i} offerItem={offerItem} />
        ))}
    </div>
  );
};

export default UserPropertyBought;
