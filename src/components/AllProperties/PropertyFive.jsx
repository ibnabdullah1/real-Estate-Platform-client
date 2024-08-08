import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronsLeft, FiChevronsRight, FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axiosPublic from "../../Api/axiosPublic";
import { closeFilterMenu, uiStore } from "../../features/uiSlice";
import AdvancedSearch from "./AdvancedSearch";
import CTA from "./CTA";
import HeaderFilters from "./HeadeFilters";
import PriceRange from "./PriceRange";
import PropertyFullWidth from "./PropertyFullWidth";
import PropertyList from "./PropertyList";
import SocialIcons from "./SocialIcons";
import Type from "./Type";

const PropertyFive = () => {
  const [layout, setLayout] = useState("grid");
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [filterTitle, setFilterTitle] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [debouncedFilterTitle, setDebouncedFilterTitle] = useState("");
  const itemsPerPage = 8;

  const handleCloseFilterMenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  // Create a debounced function for handling filter title changes
  const debouncedSetFilterTitle = useCallback(
    debounce((value) => {
      setDebouncedFilterTitle(value);
    }, 2000), // Adjust the debounce delay as needed
    []
  );

  const {
    refetch,
    data: properties = [],
    isLoading,
  } = useQuery({
    queryKey: ["properties", debouncedFilterTitle, sortOption],
    queryFn: async () => {
      const res = await axiosPublic.get(`/requestedProperty`, {
        params: { search: debouncedFilterTitle, sort: sortOption },
      });
      return res.data;
    },
    // Re-fetch data when debouncedFilterTitle or sortOption changes
    keepPreviousData: true,
  });

  const filteredProperties = properties
    .filter((property) =>
      property?.name
        ?.toLowerCase()
        .includes(debouncedFilterTitle?.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }
      if (sortOption === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });

  const totalItems = filteredProperties.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = filteredProperties.slice(startIndex, endIndex);

  const indexOfFirstItem = startIndex + 1;
  const indexOfLastItem = Math.min(endIndex, totalItems);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleClearFilters = () => {
    setFilterTitle("");
    setSortOption("");
    setDebouncedFilterTitle(""); // Clear debounced filter title
    setCurrentPage(0); // Reset to first page
  };

  // Check if any filters are active
  const hasFilters = filterTitle !== "" || sortOption !== "";

  return (
    <div className="pt-20 px-[1px] lg:px-[6%]">
      <Helmet>
        <title>Real Estate/Our Properties</title>
      </Helmet>
      <HeaderFilters
        totalItems={totalItems}
        layout={layout}
        setLayout={setLayout}
        filterTitle={filterTitle}
        setFilterTitle={(value) => {
          setFilterTitle(value);
          debouncedSetFilterTitle(value); // Use debounced function
        }}
        sortOption={sortOption}
        setSortOption={setSortOption}
        handleClearFilters={handleClearFilters}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        hasFilters={hasFilters}
      />
      <div className="grid lg:grid-cols-4 gap-x-4 mt-5">
        <div className="lg:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0">
          {layout === "grid" ? (
            <PropertyList properties={itemsToShow} isLoading={isLoading} />
          ) : (
            <PropertyFullWidth properties={itemsToShow} isLoading={isLoading} />
          )}
          {/* Pagination Component */}
          {totalItems > itemsPerPage && (
            <div className="flex-wrap md:flex justify-center py-16 gap-8">
              <button
                aria-label="Previous Page"
                className={`${
                  currentPage === 0 ? "text-primary/70" : "text-primary"
                } flex items-center justify-center w-8 h-8`}
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
              >
                <FiChevronsLeft />
              </button>
              {Array.from({ length: numberOfPages }, (_, index) => (
                <button
                  aria-label={`Page ${index + 1}`}
                  className={`w-7 h-7 rounded-md text-sm ${
                    currentPage === index
                      ? " bg-primary shadow shadow-primary text-white"
                      : "hover:bg-primary/70 hover:text-white"
                  }`}
                  key={index}
                  onClick={() => handlePageClick(index)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                aria-label="Next Page"
                className={`${
                  currentPage === numberOfPages - 1
                    ? "text-primary/70"
                    : "text-primary"
                } flex items-center justify-center w-8 h-8`}
                onClick={handleNextPage}
                disabled={currentPage === numberOfPages - 1}
              >
                <FiChevronsRight />
              </button>
            </div>
          )}
          {/* Pagination Component */}
        </div>
        <div className="lg:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen ? "open" : ""}`}
            onClick={handleCloseFilterMenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen ? "open" : ""}`}>
              <div className="flex-center-between border-b lg:hidden">
                <div
                  className="icon-box lg:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch />
              <Type />
              <PriceRange />
              <SocialIcons />
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFive;
