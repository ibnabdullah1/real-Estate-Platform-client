import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner8 } from "react-icons/im";

const SoldProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: soldProperties = [],
    isLoading: IsSoldPropertiesLoading,
  } = useQuery({
    queryKey: ["requestOffers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/soldProperties/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
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
                {item?.title}
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.location}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.buyerEmail}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.buyerName}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.offerPrice}
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
