import { GrUpdate } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi2";
import useAxiosSecure from "../../Api/useAxiosSecure";
import Swal from "sweetalert2";

const AgentAddedPropertiesCard = ({ property, refetch }) => {
  const { _id, location, price, image, status, title, agent } = property;
  const axiosSecure = useAxiosSecure();
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/agentProperty/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your Property has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className=" rounded-md bg-[#F9FDFF]">
      <div className="">
        <img
          className="overflow-hidden object-cover h-[250px] w-full rounded-t-md "
          src={image}
          alt=""
        />
      </div>
      <div className="px-5 pt-4 pb-7 border border-t-0 rounded-b-md border-[#7accf2]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 mb-3">
            <img
              className="w-[40px] border-2 border-[#2b4d5e] h-[40px] rounded-[50%]"
              src={agent?.agentImage}
              alt={agent?.name}
            />
            <div>
              <h2 className="text-base text-[#2b4d5e] font-semibold">
                {agent?.name}
              </h2>
              <h2 className="text-base text-[#2b4d5e] -mt-1 font-semibold">
                {agent?.email}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-stretch">
          <h2 className="text-[#2b4d5e] mb-3 font-semibold text-xl">{title}</h2>
          {status === "verified" && (
            <h4 className="border flex uppercase items-center justify-center bg-[#ffc933] px-2 text-white rounded">
              {status}
            </h4>
          )}
          {status === "verify" && (
            <h4 className="border flex uppercase items-center justify-center bg-[#24d53b]  px-2 text-white rounded">
              Pending
            </h4>
          )}
          {status === "rejected" && (
            <h4 className="border flex uppercase items-center justify-center bg-[#f44b0e] px-2 text-white rounded">
              {status}
            </h4>
          )}
        </div>
        <p className="flex text-[#417086] items-center gap-1">
          <FaLocationDot />
          {location}
        </p>
        <p className="flex text-[#417086]  mb-3 gap-1   items-center ">
          <HiCurrencyDollar className=" text-xl" />

          {price}
        </p>
        <div className="flex gap-3">
          <Link to={`update/${_id}`}>
            <button
              disabled={status === "rejected"}
              className={
                status === "rejected"
                  ? "flex gap-[4px] justify-center items-center bg-gray-300 text-gray-400 text-sm px-6 py-2  rounded  font-medium "
                  : "flex gap-[4px] justify-center items-center transform duration-500 px-6 py-2 text-sm font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase"
              }
            >
              <GrUpdate className="text-lg" />
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex justify-center gap-[2px]  items-center transform duration-500 px-6 py-2 text-sm font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase"
          >
            <ImCancelCircle className="text-lg" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AgentAddedPropertiesCard;
