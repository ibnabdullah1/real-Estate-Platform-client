import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the CSS

const SingleProductCardSkeleton = () => {
  return (
    <div className="flex-1 basis-[18rem] bg-[#f9f7f4] rounded-lg overflow-hidden relative group">
      {/* Image */}
      <div className="group  -top-2 !opacity-100 overflow-hidden relative">
        <Skeleton height={250} width="100%" className="object-cover" />
      </div>

      {/* Location & Distance Badge */}
      <div className="absolute top-2 left-2 flex-align-center gap-x-2">
        <Skeleton width={80} height={24} className="rounded-full" />
        <Skeleton width={80} height={24} className="rounded-full" />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <Skeleton width={120} height={24} className="mb-3" />
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
          <Skeleton width={80} height={24} />
          <Skeleton width={80} height={32} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardSkeleton;
