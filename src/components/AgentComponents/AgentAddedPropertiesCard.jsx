import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import useAxiosSecure from "../../Api/useAxiosSecure";
const AgentAddedPropertiesCard = ({
  _id,
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
  status,
  refetch,
}) => {
  const statusStyles = {
    verified: {
      bgColor: "#FF6400",
      text: "verified",
    },
    verify: {
      bgColor: "#24d53b",
      text: "Pending",
    },
    rejected: {
      bgColor: "#f44b0e",
      text: "rejected",
    },
  };

  const statusInfo = statusStyles[status] || {
    bgColor: "transparent",
    text: "",
  };

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
        axiosSecure.put(`/agentPropertyDeletedStatus/${_id}`).then((res) => {
          if (res.data.acknowledged) {
            refetch();
            Swal.fire("Deleted!", "Your Property has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div
      className={`flex-1 border border-primary/30 ${
        basis ? basis : "basis-[18rem]"
      } bg-[#fffcf7]  rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <div className="!opacity-100">
          <img
            src={image}
            alt={name}
            className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-2  left-2 flex-align-center gap-x-2">
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
          {distance} away
        </span>
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
          for {purpose}
        </span>
      </div>
      <div className="p-3">
        <div className="flex justify-between mt-3">
          <div className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">{name}</h1>
          </div>
          <h4
            className="border py-[3px] px-3 flex text-sm rounded-full capitalize text-white justify-center items-center "
            style={{ backgroundColor: statusInfo.bgColor }}
          >
            {statusInfo.text}
          </h4>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{number_of_beds} Beds</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{dimensions}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-4 justify-between">
          <Link to={`update/${_id}`}>
            <button
              disabled={status === "rejected"}
              className={` flex gap-[4px] justify-center items-center font-medium rounded-full
             px-3 py-[6px] text-xs ${
               status === "rejected"
                 ? " bg-gray-300 text-gray-400 "
                 : " transform duration-500 bg-[#24d53b90] hover:bg-[#24d53b] text-white"
             }
              `}
            >
              <GrUpdate className="text-sm" />
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex justify-center gap-1 items-center px-3 py-[6px]  font-medium bg-[#f0151590] text-xs transform duration-500 rounded-full hover:bg-[#f01515] text-white "
          >
            <ImCancelCircle className="text-sm" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentAddedPropertiesCard;
