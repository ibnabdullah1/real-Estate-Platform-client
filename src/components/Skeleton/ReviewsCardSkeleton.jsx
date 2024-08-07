import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ReviewsCardSkeleton = () => {
  return (
    <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
      <div className="bg-white min-h-[200px] max-h-[240px] rounded-md p-6 pb-5">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div>
              <Skeleton circle={true} height={40} width={40} />
            </div>
            <div>
              <Skeleton width={100} height={16} />
              <Skeleton width={80} height={12} />
            </div>
          </div>
          <div>
            <Skeleton width={80} height={16} />
          </div>
        </div>
        <div className="mt-3">
          <Skeleton count={3} height={12} />
        </div>
        <div className="py-3">
          <Skeleton width={100} height={12} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ReviewsCardSkeleton;
