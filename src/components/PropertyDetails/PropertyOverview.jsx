import { FaBed, FaSquareFontAwesomeStroke } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import { MdHomeWork, MdOutlineCarCrash } from "react-icons/md";

const PropertyOverview = ({
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  category,
}) => {
  return (
    <div className="p-6 bg-slate-100  lg:h-min  rounded">
      <p className="text-xl font-semibold my-2">Property Overview</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <FaBed className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Bedrooms</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            {number_of_beds} Bedrooms/ 1 Guestroom
          </p>
        </div>
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <GiBathtub className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Bathrooms</h3>{" "}
          <p className="text-[#333333]/60 text-xs text-center">
            {number_of_bathrooms} Bathrooms
          </p>
        </div>{" "}
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <MdOutlineCarCrash className="text-4xl text-[#333333]/60" />

          <h3 className="text-sm text-center font-medium">Parking</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Free Parking for 4 Cars
          </p>
        </div>{" "}
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <FaSquareFontAwesomeStroke className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Accommodation</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            6 Guest / {dimensions}
          </p>
        </div>{" "}
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <MdHomeWork className="text-4xl text-[#333333]/60" />

          <h3 className="text-sm text-center font-medium">Property Type</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Entire Place / {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
