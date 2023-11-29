import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../../Api/auth";
import {
  AddAdvertiseProperty,
  addedAdvertisedStatus,
  removeAdvertiseProperty,
} from "../../Api/properties";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Advertisement = () => {
  const { data: reqProperties = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getAllProperties(),
  });

  const handleAddAdvertise = async (item) => {
    console.log(item?.adsStatus);
    try {
      const data = await AddAdvertiseProperty(item);
      console.log(data);
      if (data.message === "success") {
        await addedAdvertisedStatus(item._id, "Advertised");
        refetch();
        toast.success("Advertisement property added successfully");
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
          console.log(data);
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
  //   const handleRemoveAds = async (item, id) => {
  //     try {
  //       await addedAdvertisedStatus(item._id, "Advertise");
  //       refetch();
  //       const data = await removeAdvertiseProperty(item, id);
  //       console.log(data);
  //       if (data.message === "success") {
  //         toast.success("Advertisement property added successfully");
  //       } else {
  //         toast.error(data.message);
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="text-left bg-[#1c4456] ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Property image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Property title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Agent Name
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
                <img
                  className="w-[60px] h-auto rounded"
                  src={item?.image}
                  alt=""
                />
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item.title}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.agent?.name}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                ${item.price}
              </td>
              <td>
                <div className="flex gap-3 pr-3">
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
  );
};

export default Advertisement;
