import { FaBed, FaSquareParking } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import { PiArrowsInSimpleBold } from "react-icons/pi";

import floorPlan from "../../assets/images/details/floor-plan.jpg";

const FloorPlan = ({ number_of_beds, number_of_bathrooms, dimensions }) => {
  return (
    <div className="p-6 bg-slate-100  h-min  rounded space-y-3">
      <div className="flex justify-between items-start">
        <p className="text-xl font-semibold my-2">Floor Plan </p>
        <div className="flex gap-5 py-2">
          <p className="text-gray-400 flex items-center gap-2">
            <FaBed /> {number_of_beds}
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <GiBathtub />
            {number_of_bathrooms}
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <FaSquareParking />1
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            {" "}
            <PiArrowsInSimpleBold /> {dimensions?.split(" ")[0]}
          </p>
        </div>
      </div>
      <div>
        <img src={floorPlan} alt="" className="rounded" />
      </div>
    </div>
  );
};

export default FloorPlan;
