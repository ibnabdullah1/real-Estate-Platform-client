import Skeleton from "react-loading-skeleton";

const UserReviewsSkeleton = () => {
  return (
    <div>
      <h2 className="heading text-center my-5">My Reviews</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1c4456] border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          <thead className="text-left bg-[#1c4456]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <Skeleton width={150} />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <Skeleton width={150} />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <Skeleton width={300} />
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                <Skeleton width={80} />
              </th>
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
                  <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                    <Skeleton width={150} />
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                    <Skeleton width={150} />
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                    <Skeleton width={300} />
                  </td>
                  <td className="px-6 py-3 text-center text-xs font-medium tracking-wider">
                    <Skeleton width={80} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReviewsSkeleton;
