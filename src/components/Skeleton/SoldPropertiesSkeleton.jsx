import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SoldPropertiesSkeleton = () => {
  return (
    <div className="">
      <h2 className="heading text-center my-5">Sold Properties</h2>
      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-[#1c4456]">
            <tr>
              {[
                "Property Title",
                "Property Location",
                "Buyer Email",
                "Buyer Name",
                "Sold Price",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  <Skeleton width={150} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <tr
                  key={index}
                  className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
                >
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <td
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                      >
                        <Skeleton width={150} height={20} />
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldPropertiesSkeleton;
