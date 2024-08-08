import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import SoldPropertiesSkeleton from "../Skeleton/SoldPropertiesSkeleton";

const SoldProperties = () => {
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

  if (isSoldPropertiesLoading) {
    return <SoldPropertiesSkeleton />;
  }
  return (
    <div className="">
      <h2 className="heading text-center my-5">Sold Properties</h2>
      <Helmet>
        <title>Real Estate/agent/dashboard/sold properties</title>
      </Helmet>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-[#1c4456] ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Property Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Property location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Buyer Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Buyer name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Sold Price
              </th>
            </tr>
          </thead>
          <tbody>
            {soldProperties?.map((item) => (
              <tr
                key={item._id}
                className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
              >
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[200px]"> {item?.name}</div>
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[200px]"> {item?.location}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> {item?.buyerEmail}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> {item?.buyerName}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> {item?.offerPrice}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isSoldPropertiesLoading && !soldProperties.length && (
          <h2 className="text-center my-4 text-red-500 font-medium">
            You have not sold any property
          </h2>
        )}
      </div>
    </div>
  );
};

export default SoldProperties;
