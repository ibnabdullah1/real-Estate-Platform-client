import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { offerRequestStatusUpdate } from "../../Api/properties";

const RequestOffers = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: requestOffers = [] } = useQuery({
    queryKey: ["requestOffers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requestOffer/${user?.email}`);
      return res.data;
    },
  });

  const handleOfferRequestStatusUpdate = async (id, status) => {
    setLoading(true);

    try {
      const updateRole = await offerRequestStatusUpdate(id, status);
      if (updateRole.modifiedCount > 0) {
        refetch();
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Agent Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Agent Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Offered price
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {requestOffers?.map((requestOffer) => (
            <tr
              key={requestOffer._id}
              className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
            >
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {requestOffer.title}
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {requestOffer.location}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {requestOffer?.buyerName}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {requestOffer?.buyerEmail}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                ${requestOffer?.offerPrice}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="flex gap-2">
                  {requestOffer?.status === "accepted" && (
                    <button className="bg-[#24d53b] py-2 text-slate-50 px-4 rounded">
                      Accepted
                    </button>
                  )}
                  {requestOffer?.status === "bought" && (
                    <button className="bg-[#24d53b] py-2 text-slate-50 px-4 rounded">
                      Sold
                    </button>
                  )}
                  {requestOffer?.status === "pending" && (
                    <button
                      onClick={() =>
                        handleOfferRequestStatusUpdate(
                          requestOffer._id,
                          "accepted"
                        )
                      }
                      className="flex gap-[2px]  justify-center items-center transform duration-500 px-3 py-2  font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase "
                    >
                      {requestOffer?.status}
                    </button>
                  )}
                  {requestOffer?.status === "rejected" && (
                    <button className="bg-gray-300 text-gray-400 px-3 py2 rounded">
                      Accept
                    </button>
                  )}

                  {requestOffer?.status === "rejected" && (
                    <button className="bg-[#ff0909] py-2 text-slate-50 px-4 rounded">
                      Rejected
                    </button>
                  )}

                  {requestOffer?.status === "accepted" && (
                    <button className="bg-gray-300 text-gray-400 px-3 py2 rounded">
                      reject
                    </button>
                  )}
                  {requestOffer?.status === "bought" && (
                    <button className="bg-gray-300 text-gray-400 px-3 py2 rounded">
                      reject
                    </button>
                  )}

                  {requestOffer?.status === "pending" && (
                    <button
                      onClick={() =>
                        handleOfferRequestStatusUpdate(
                          requestOffer._id,
                          "rejected"
                        )
                      }
                      className=" transform duration-500 px-3 py-2  font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase "
                    >
                      Reject
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestOffers;
