import { BarChart } from "@mui/x-charts";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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

  console.log(soldProperties);

  const totalPrices = soldProperties.reduce(
    (sum, property) => sum + property.offerPrice,
    0
  );
  const renderChart = () => {
    if (soldProperties.length === 0) {
      return <p>No sold properties data available.</p>;
    }

    const offerPrices = soldProperties.map((property) => property.offerPrice);

    return (
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: soldProperties.map((property) => property.title),
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: offerPrices,
          },
        ]}
        width={500}
        height={300}
      />
    );
  };

  return (
    <>
      <h2 className="text-2xl text-[#417086] font-semibold">
        Total Sold Price:{" "}
        <span className="text-2xl text-[#ffc933] font-semibold">
          ${totalPrices}
        </span>
      </h2>
      <div className="flex justify-center items-center">
        {isSoldPropertiesLoading ? <p>Loading...</p> : renderChart()}
      </div>
    </>
  );
};

export default TotalSoldProperties;
