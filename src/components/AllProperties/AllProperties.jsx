import { useEffect, useState } from "react";
import { getAllProperties } from "../../Api/auth";
import { IoSearch } from "react-icons/io5";
import PropertiesCard from "./PropertiesCard";
import axiosPublic from "../../Api/axiosPublic";
const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [noData, setNoData] = useState("No data available");
  useEffect(() => {
    setIsLoading(true);
    getAllProperties()
      .then((data) => {
        setProperties(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosPublic(`/searchProperties/${e.target.name.value}`)
      .then((data) => {
        setIsLoading(false);
        if (data) {
          setIsLoading(false);
          setProperties(data.data);
        }
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleSortChange = (e) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);

    const sortedData = [...properties];
    if (selectedSortOrder === "-1") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (selectedSortOrder === "1") {
      sortedData.sort((a, b) => a.price - b.price);
    }

    setProperties(sortedData);
  };

  return (
    <div className="py-20 bg-[#F5FCFF] min-h-screen">
      <h2 className="text-3xl text-center mt-10  text-[#1c4456] mb-5 font-bold uppercase">
        All Properties
      </h2>
      <div className="search lg:my-10 md:flex px-4 md:px-0 justify-center my-5 mx-auto w-[100%] lg:w-[80%] md:w-[100%] ">
        <form className="lg:w-[70%] md:w-[68%] w-[80%]" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 text-xl flex items-center pl-3 pointer-events-none">
              <IoSearch />
            </div>
            <input
              type="search"
              id="default-search"
              name="name"
              className="block w-full p-4 pl-10 text-sm text-[#2b4d5e] rounded-lg border border-[#2b4d5e] focus:ring-[#1c4456]"
              placeholder="Search by properties title"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5  font-medium rounded text-sm px-4 py-2 bg-[#296581] hover:bg-[#1c4456] focus:ring-[#1c4456]"
            >
              Search
            </button>
          </div>
        </form>
        <div className="md:ml-3  md:mt-0 mt-3 lg:w-[10%] md:w-[28%] w-[20%] ">
          <select
            id="countries"
            className="w-[200px] px-4  border  py-[14px] border-[#1c4456] focus:outline-[#1c4456] rounded-md"
            onChange={handleSortChange}
          >
            <option value="">Sort</option>
            <option value="-1">High To low</option>
            <option value="1">Low To High</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="min-h-[60vh] flex justify-center">
          <div>
            <img
              className="w-14 h-14 animate-spin"
              src="https://www.svgrepo.com/show/448500/loading.svg"
              alt="Loading icon"
            />
          </div>
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 max-w-6xl mx-auto">
          {properties.map((property, i) => (
            <PropertiesCard key={i} property={property} />
          ))}
        </div>
      ) : (
        <div className="min-h-[60vh] py-10 flex justify-center">
          <h2>
            {noData && (
              <div>
                <img
                  className="w-[300px]"
                  src="https://static.rfstat.com/renderforest/images/v2/video-templates/search-no-result.svg"
                  alt=""
                />
                <h3 className="text-center">No customers found</h3>
                <p className="text-center">
                  Try changing the filters or search term
                </p>
              </div>
            )}
          </h2>
        </div>
      )}
    </div>
  );
};

export default AllProperties;
