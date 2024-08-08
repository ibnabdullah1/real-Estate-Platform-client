import Skeleton from "react-loading-skeleton";

const AllUserSkeleton = () => {
  return (
    <div className="bg-gray-100">
      <h2 className="heading text-center my-5">Manage Users</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          <thead className="text-left bg-[#1c4456]">
            <tr>
              {[
                "#",
                "User Name",
                "User Email",
                "Role",
                "Make Admin",
                "Make Agent",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  <Skeleton width={header === "Action" ? 200 : 100} />
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
                  className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
                >
                  {Array(7)
                    .fill(null)
                    .map((_, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                      >
                        <Skeleton width={cellIndex === 6 ? 200 : 150} />
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

export default AllUserSkeleton;
