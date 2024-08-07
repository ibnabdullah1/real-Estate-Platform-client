import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the CSS

const SingleProductCardFullWidthSkeleton = () => {
  return (
    <div className="relative grid gap-3 mt-3 overflow-hidden rounded-lg bg-[#f9f7f4] grid-cols-7">
      <div className="col-span-2 ">
        <div className=" relative h-full leading-[0] ">
          <Skeleton width={"100%"} height={"100%"} />
        </div>
        <div className="p-3 ">
          <Skeleton width={100} height={24} />
          <Skeleton width={80} height={20} className="mt-2" />
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="p-3">
          <Skeleton width={200} height={24} className="mb-3" />
          <Skeleton width={150} height={20} className="mt-2" />
          <Skeleton count={3} height={20} className="mt-2" />
          <div className="flex justify-between mt-3">
            <div className="flex-align-center gap-x-2">
              <Skeleton width={28} height={28} className="rounded-full" />
              <Skeleton width={60} height={20} />
            </div>
            <div className="flex-align-center gap-x-2">
              <Skeleton width={28} height={28} className="rounded-full" />
              <Skeleton width={60} height={20} />
            </div>
            <div className="flex-align-center gap-x-2">
              <Skeleton width={28} height={28} className="rounded-full" />
              <Skeleton width={60} height={20} />
            </div>
          </div>
          <div className="mt-4 flex-center-between">
            <Skeleton width={100} height={24} />
            <Skeleton width={80} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardFullWidthSkeleton;
