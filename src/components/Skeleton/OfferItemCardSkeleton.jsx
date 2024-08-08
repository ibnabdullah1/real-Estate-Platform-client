import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OfferItemCardSkeleton = () => {
  return (
    <>
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="relative md:grid gap-3 mt-3   overflow-hidden rounded-lg bg-[#ffffff] grid-cols-7"
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
              <div className="flex gap-2 items-center mt-3">
                <Skeleton circle width={40} height={40} />
                <div className="">
                  <Skeleton width={120} height={15} />
                  <Skeleton width={100} height={15} />
                </div>
              </div>
              <div className="p-3 space-y-1">
                <Skeleton width={260} height={20} />

                <div className="flex gap-3 py-3">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={100} height={20} />
                  <Skeleton width={100} height={20} />
                </div>
                <div className="mt-4 flex-center-between">
                  <Skeleton width={80} height={20} borderRadius={"30px"} />

                  <Skeleton width={80} height={20} borderRadius={"30px"} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default OfferItemCardSkeleton;
