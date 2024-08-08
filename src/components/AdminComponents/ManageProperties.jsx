import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllRequestedProperties, getReqProperty } from "../../Api/auth";
import { agentRequestUpdate } from "../../Api/properties";
import ManagePropertiesSkeleton from "../Skeleton/ManagePropertiesSkeleton";

const ManageProperties = () => {
  const {
    data: reqProperties = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getAllRequestedProperties(),
  });

  const handleAddProperty = async (id) => {
    try {
      const updateProperty = await agentRequestUpdate(id, "verified");
      if (updateProperty.modifiedCount > 0) {
        refetch();
        await getReqProperty(id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePropertyRejected = async (id) => {
    try {
      await getReqProperty(id);
      const updateProperty = await agentRequestUpdate(id, "rejected");
      if (updateProperty.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <ManagePropertiesSkeleton />;
  }

  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Properties</h2>
      <Helmet>
        <title>Real Estate/admin/dashboard/manage properties</title>
      </Helmet>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          <thead className="text-left bg-[#1c4456]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Property Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Property location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Agent Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Agent Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Price Range
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reqProperties?.map((item) => (
              <tr
                key={item._id}
                className="p-4 bg-white border-b border-b-[#1c4456]"
              >
                <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  <div className="w-[200px]">{item?.name}</div>
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  <div className="w-[200px]"> {item.location}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  <div className="w-[150px]"> {item?.agent?.name}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  {item?.agent?.email}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                  <div className="w-[150px]"> ${item.price}</div>
                </td>
                <td>
                  <div className="flex gap-3 pr-3">
                    {item.status === "verified" ? (
                      <button className="text-xs px-2 py-1 font-medium rounded bg-[#24d53b] text-white">
                        verified
                      </button>
                    ) : (
                      <button
                        disabled={item.status === "rejected"}
                        onClick={() => handleAddProperty(item?._id)}
                        className={
                          item.status === "rejected"
                            ? "bg-gray-300 text-gray-400 text-xs px-2 py-1 rounded font-medium"
                            : "transform duration-500 text-xs px-2 py-1 font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
                        }
                      >
                        verify
                      </button>
                    )}

                    {item.status === "rejected" ? (
                      <button className="text-xs px-2 py-1 font-medium rounded bg-[#f01515] text-white">
                        rejected
                      </button>
                    ) : (
                      <button
                        disabled={item.status === "verified"}
                        onClick={() => handlePropertyRejected(item?._id)}
                        className={
                          item.status === "verified"
                            ? "bg-gray-300 text-gray-400 text-xs px-2 py-1 rounded font-medium"
                            : "text-xs px-2 py-1 transform duration-500 font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
                        }
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
    </div>
  );
};

export default ManageProperties;
