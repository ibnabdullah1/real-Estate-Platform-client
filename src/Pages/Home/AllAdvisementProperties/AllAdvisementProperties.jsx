import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../Api/axiosPublic";
import AllAdvisementPropertiesCard from "./AllAdvisementPropertiesCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";
const AllAdvisementProperties = () => {
  const [noData, setNoData] = useState("No data available");
  const {
    refetch,
    data: advertisementProperties = [],
    isLoading: isAdvertisePropertyLoading,
  } = useQuery({
    queryKey: ["advertisementProperties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/advertisementProperties");
      return res.data;
    },
  });
  // console.log(advertisementProperties);
  return (
    <div className="py-20 bg-[#F5FCFF] min-h-screen px-10">
      <h2 className="text-3xl text-center  text-[#1c4456] mb-10 font-bold uppercase">
        Popular Properties
      </h2>

      {isAdvertisePropertyLoading ? (
        <div className="min-h-[60vh] flex justify-center">
          <ImSpinner8 className="w-14 h-14 text-[#1c4456] animate-spin" />
        </div>
      ) : advertisementProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 max-w-6xl mx-auto">
          {advertisementProperties.map((advertisement, i) => (
            <AllAdvisementPropertiesCard
              key={i}
              advertisement={advertisement}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-[60vh] py-10 flex justify-center">
          <>
            {noData && (
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[300px]"
                    src="https://static.rfstat.com/renderforest/images/v2/video-templates/search-no-result.svg"
                    alt=""
                  />
                </div>

                <p className="text-center text-[#1c4456] text-xl font-bold">
                  No Data Available
                </p>
                <p className="text-center text-[#1c4456] mt-3 mb-2  font-medium">
                  Explore all properties
                </p>
                <div className="text-center">
                  <Link to={"/all-properties"}>
                    <button className="relative inline-flex items-center justify-center  px-4 py-2 overflow-hidden font-medium text-[#1c4456] transition duration-300 ease-out border-2 border-[#1c4456] rounded shadow-md group">
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1c4456] group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-[#1c4456] transition-all duration-300 transform group-hover:translate-x-full ease">
                        Button Text
                      </span>
                      <span className="relative invisible">Button Text</span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default AllAdvisementProperties;
