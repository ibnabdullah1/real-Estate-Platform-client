import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { offerRequestStatusUpdate } from "../../Api/properties";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import RequestOffersSkeleton from "../Skeleton/RequestOffersSkeleton";

const RequestOffers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: requestOffers = [],
    isLoading: isRequestOffersLoading,
  } = useQuery({
    queryKey: ["requestOffers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requestOffer/${user?.email}`);
      return res.data;
    },
  });

  const handleOfferRequestStatusUpdate = async (id, status) => {
    try {
      const updateRole = await offerRequestStatusUpdate(id, status);
      if (updateRole.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isRequestOffersLoading) {
    return <RequestOffersSkeleton />;
  }

  return (
    <div className=" ">
      <h2 className="heading text-center my-5">Manage Buyer Requests</h2>
      <Helmet>
        <title>Real Estate/agent/dashboard/request offer properties</title>
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
                  {requestOffer.name}
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
                      <button className="bg-[#24d53b] py-1 text-slate-50 px-4 rounded-full">
                        Accepted
                      </button>
                    )}
                    {requestOffer?.status === "bought" && (
                      <button className="bg-[#24d53b] py-1 text-slate-50 px-4 rounded-full">
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
                        className="flex gap-[2px]  justify-center items-center transform duration-500 px-3 py-1  font-medium text-[#24d53b] border border-[#24d53b] rounded-full hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase "
                      >
                        {requestOffer?.status}
                      </button>
                    )}
                    {requestOffer?.status === "rejected" && (
                      <button className="bg-gray-300 text-gray-400 px-3 py2 rounded-full">
                        Accept
                      </button>
                    )}

                    {requestOffer?.status === "rejected" && (
                      <button className="bg-[#ff0909] py-1 text-slate-50 px-4 rounded-full">
                        Rejected
                      </button>
                    )}

                    {requestOffer?.status === "accepted" ||
                      (requestOffer?.status === "bought" && (
                        <button className="bg-gray-300 text-gray-400 px-3 py-1 rounded-full">
                          reject
                        </button>
                      ))}

                    {requestOffer?.status === "pending" && (
                      <button
                        onClick={() =>
                          handleOfferRequestStatusUpdate(
                            requestOffer._id,
                            "rejected"
                          )
                        }
                        className=" transform duration-500 px-3 py-1  font-medium text-[#f01515] border border-[#f01515] rounded-full hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase "
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

        {!isRequestOffersLoading && !requestOffers.length && (
          <h2 className="text-center my-4 text-red-500 font-medium">
            You have not Buyer Request
          </h2>
        )}
      </div>{" "}
    </div>
  );
};

export default RequestOffers;
