import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { getAllProperties } from "../../Api/auth";
import {
  AddAdvertiseProperty,
  addedAdvertisedStatus,
  removeAdvertiseProperty,
} from "../../Api/properties";
import ManageAdvertisementSkeleton from "../Skeleton/ManageAdvertisementSkeleton";

const Advertisement = () => {
  const {
    data: reqProperties = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getAllProperties(),
  });

  const handleAddAdvertise = async (item) => {
    try {
      const data = await AddAdvertiseProperty(item);

      if (data.message === "success") {
        await addedAdvertisedStatus(item._id, "Advertised");
        refetch();
        toast.success(
          "Successfully added the property to the advertisement list!"
        );

        refetch();
      } else {
        refetch();
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleRemoveAds = async (item, id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await addedAdvertisedStatus(item._id, "Advertise");
          refetch();
          const data = await removeAdvertiseProperty(item, id);
          if (data) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isLoading) {
    return <ManageAdvertisementSkeleton />;
  }

  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Advertisement</h2>
      <Helmet>
        <title>Real Estate/admin/dashboard/Advertisement</title>
      </Helmet>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-[#1c4456] ">
            <tr>
              <th className="px-6 py-3  text-left text-xs font-medium text-white uppercase tracking-wider">
                Property image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Property Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Agent Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Price
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
                  <img
                    className="w-[60px] h-auto rounded"
                    src={item?.image}
                    alt=""
                  />
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[200px]"> {item?.name}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> {item?.agent?.name}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> ${item.price}</div>
                </td>
                <td>
                  <div className="flex gap-3 pr-3 w-[230px]">
                    <button
                      onClick={() => handleAddAdvertise(item)}
                      disabled={item?.adsStatus === "Advertised"}
                      className={
                        item?.adsStatus === "Advertised"
                          ? "bg-gray-300 text-gray-400 text-xs px-2 py-1  rounded  font-medium "
                          : "text-xs px-2 py-1 transform duration-500   font-medium text-[#15f077] border border-[#15f077] rounded hover:bg-[#15f077] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
                      }
                    >
                      {item?.adsStatus === "Advertised"
                        ? item?.adsStatus
                        : "Advertise"}
                    </button>
                    <button
                      disabled={item?.adsStatus === "Advertise"}
                      onClick={() => handleRemoveAds(item, item._id)}
                      className={
                        !item?.adsStatus || item?.adsStatus === "Advertise"
                          ? "bg-gray-300 text-gray-400 text-xs px-2 py-1  rounded  font-medium "
                          : "text-xs px-2 py-1 transform duration-500   font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
                      }
                    >
                      Remove Advertise
                    </button>
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

export default Advertisement;
