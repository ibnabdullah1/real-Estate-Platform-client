import { useState } from "react";
import { getAllRequestedProperties, getReqProperty } from "../../Api/auth";
import { agentRequestUpdate } from "../../Api/properties";
import { useQuery } from "@tanstack/react-query";

const ManageProperties = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: reqProperties = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getAllRequestedProperties(),
  });
  const handleAddProperty = async (id) => {
    setIsLoading(true);

    try {
      const updateProperty = await agentRequestUpdate(id, "verified");
      if (updateProperty.modifiedCount > 0) {
        refetch();
        await getReqProperty(id);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePropertyRejected = async (id) => {
    setIsLoading(true);
    try {
      await getReqProperty(id);
      const updateProperty = await agentRequestUpdate(id, "rejected");
      console.log(updateProperty);
      if (updateProperty.modifiedCount > 0) {
        refetch();
      }
      setIsLoading(false);
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
              className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
            >
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.title}
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item.location}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.agent?.name}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.agent?.email}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                ${item.price}
              </td>
              <td>
                <div className="flex gap-3 pr-3">
                  {item.status === "verified" ? (
                    <button className=" text-xs px-2 py-1 font-medium  rounded bg-[#24d53b] text-white">
                      verified
                    </button>
                  ) : (
                    <button
                      disabled={item.status === "rejected"}
                      onClick={() => handleAddProperty(item?._id)}
                      className={
                        item.status === "rejected"
                          ? "bg-gray-300 text-gray-400 text-xs px-2 py-1  rounded  font-medium "
                          : " transform duration-500  text-xs px-2 py-1 font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none "
                      }
                    >
                      verify
                    </button>
                  )}

                  {item.status === "rejected" ? (
                    <button className=" text-xs px-2 py-1 font-medium  rounded bg-[#f01515] text-white ">
                      rejected
                    </button>
                  ) : (
                    <button
                      disabled={item.status === "verified"}
                      onClick={() => handlePropertyRejected(item?._id)}
                      className={
                        item.status === "verified"
                          ? "bg-gray-300 text-gray-400 text-xs px-2 py-1  rounded  font-medium "
                          : "text-xs px-2 py-1 transform duration-500   font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
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
  );
};

export default ManageProperties;
