import { FaBed } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import { PiArrowsInSimpleBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AllAdvisementPropertiesCard = ({ advertisement }) => {
  const {
    _id,
    location,
    bedrooms,
    bathrooms,
    rooms,
    square_footage,
    year_built,
    price,
    image,
    status,
    title,
    agent,
  } = advertisement;
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
          <h4 className="border flex items-center justify-center border-[#417086] px-2 text-[#417086] rounded">
            {status}
          </h4>
        </div>

        <h2 className="text-[#2b4d5e] mb-3 font-semibold text-xl">{title}</h2>

        <p className="flex text-[#417086] items-center gap-1">
          <FaLocationDot />
          {location}
        </p>
        <div className="flex justify-between mt-3">
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <FaBed /> {bedrooms} Bed Rooms
          </p>
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <GiBathtub />
            {bathrooms} Bath
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <PiArrowsInSimpleBold /> {square_footage} sqft
          </p>
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <HiOutlineHomeModern />
            {rooms} Room
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <Link to={`/properties/${_id}`}>
            <button className="transform duration-500 px-12 py-3 text-sm font-medium  border bg-[#3f6c81] border-[#1c4456] rounded hover:bg-[#1c4456] text-white active:bg-#1c4456 focus:outline-none focus:ring-none">
              Details
            </button>
          </Link>
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            $ {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllAdvisementPropertiesCard;
