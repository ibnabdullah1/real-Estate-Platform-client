import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const TotalSoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: soldProperties = [], isLoading: isSoldPropertiesLoading } =
    useQuery({
      queryKey: ["requestOffers"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/soldProperties/${user?.email}`);
        return res.data;
      },
    });

  const totalPrices = soldProperties.reduce(
    (sum, property) => sum + property.offerPrice,
    0
  );

  const offerPrices = soldProperties.map((property) => property.offerPrice);

  return (
    <div className="px-10">
      <h2 className="heading">
        Total Sold Price:{" "}
        <span className="text-2xl text-[#ffc933] font-semibold">
          ${totalPrices}
        </span>
      </h2>
      <div className="flex justify-center items-center">
        {isSoldPropertiesLoading && <p>Loading...</p>}
      </div>
      {!isSoldPropertiesLoading && !soldProperties?.length && (
        <h2 className="text-center my-4 text-red-500 font-medium">
          You have not sold any property
        </h2>
      )}
    </div>
  );
};

export default TotalSoldProperties;
