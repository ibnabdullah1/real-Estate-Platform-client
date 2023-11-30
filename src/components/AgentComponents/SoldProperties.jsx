import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner8 } from "react-icons/im";
import { Helmet } from "react-helmet-async";

const SoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: soldProperties = [], isLoading: IsSoldPropertiesLoading } =
    useQuery({
      queryKey: ["requestOffers"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/soldProperties/${user?.email}`);
        return res.data;
      },
    });

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <Helmet>
        <title>Real Estate/agent/dashboard/sold properties</title>
      </Helmet>
      <table className="table w-full">
        {/* head */}
        <thead className="text-left bg-[#1c4456] ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Property Title
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
                <div className="w-[250px]"> {item?.title}</div>
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

      {IsSoldPropertiesLoading && (
        <div className="min-h-[60vh] flex justify-center">
          <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
        </div>
      )}
      {!IsSoldPropertiesLoading && !soldProperties.length && (
        <h2>You have not sold any property</h2>
      )}
    </div>
  );
};

export default SoldProperties;
