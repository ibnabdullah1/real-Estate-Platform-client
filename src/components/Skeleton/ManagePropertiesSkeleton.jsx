import Skeleton from "react-loading-skeleton";

const ManagePropertiesSkeleton = () => {
  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Properties</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          <thead className="text-left bg-[#1c4456]">
            <tr>
              {[
                "Property Title",
                "Property Location",
                "Agent Name",
                "Agent Email",
                "Price Range",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  <Skeleton width={100} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <tr
                  key={index}
                  className="p-4 bg-white border-b border-b-[#1c4456]"
                >
                  {Array(6)
                    .fill(null)
                    .map((_, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                      >
                        <Skeleton width={150} />
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

export default ManagePropertiesSkeleton;
