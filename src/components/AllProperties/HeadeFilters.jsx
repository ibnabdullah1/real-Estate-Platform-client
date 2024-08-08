import { FaList } from "react-icons/fa";
import { FiFilter, FiGrid } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../features/uiSlice";

const HeaderFilters = ({
  layout,
  setLayout,
  filterTitle,
  setFilterTitle,
  sortOption,
  setSortOption,
  handleClearFilters,
  indexOfFirstItem,
  indexOfLastItem,
  totalItems,
  hasFilters,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex-col gap-4 flex-center-between md:flex-row">
      <div className="w-full flex-center-between">
        <div className="gap-2 flex-align-center">
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 hover:bg-slate-200 sm:cursor-pointer transition-a dark:bg-card-dark  ${
              layout === "grid" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("grid")}
          >
            <FiGrid />
          </div>
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark ${
              layout === "list" && "!bg-primary text-white"
            }`}
            onClick={() => setLayout("list")}
          >
            <FaList />
          </div>
          <div
            className="grid w-10 h-10 lg:hidden rounded-xl place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a "
            onClick={() => dispatch(openFilterMenu())}
          >
            <FiFilter />
          </div>
        </div>
        <p>
          Showing {indexOfFirstItem} - {indexOfLastItem} of {totalItems} results
        </p>
      </div>
      <div className="w-full gap-4 flex-center-between">
        <select
          name="sort"
          id="sort"
          className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] w-full rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="price-asc">Low To High</option>
          <option value="price-desc">High To Low</option>
        </select>
        <input
          type="text"
          className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[4px] w-full rounded"
          placeholder="Enter Keywords.."
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <button
          className={` w-[300px] text-xs lg:text-base border px-4 py-[7px] rounded ${
            !hasFilters
              ? "opacity-50 cursor-not-allowed bg-gray-400 border-gray-500 text-gray-700"
              : "bg-white text-primary border-primary"
          }`}
          onClick={handleClearFilters}
          disabled={!hasFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default HeaderFilters;
