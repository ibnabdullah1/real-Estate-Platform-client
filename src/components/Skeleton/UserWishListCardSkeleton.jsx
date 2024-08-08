import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserWishListCardSkeleton = () => {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="relative md:grid gap-3 mt-3 overflow-hidden rounded-lg bg-[#ffffff] grid-cols-7"
          >
            <div className="col-span-2 relative leading-[0]">
              <div className="w-full md:h-full  h-[200px]">
                <Skeleton height="100%" />
              </div>
              <div className="absolute top-2 left-2 flex-align-center gap-x-2">
                <Skeleton width={80} height={20} borderRadius={"30px"} />
                <Skeleton width={80} height={20} borderRadius={"30px"} />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="p-3 space-y-1">
                <Skeleton width={200} height={24} />
                <Skeleton width={100} height={20} className="my-3" />
                <Skeleton count={2} />
                <div className="flex justify-between py-3">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={100} height={20} />
                  <Skeleton width={100} height={20} />
                </div>
                <div className="mt-4 flex-center-between">
                  <Skeleton width={100} height={20} />
                  <div className="flex gap-3">
                    <Skeleton width={80} height={20} borderRadius={"30px"} />
                    <Skeleton width={80} height={20} borderRadius={"30px"} />
                    <Skeleton width={80} height={20} borderRadius={"30px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserWishListCardSkeleton;
