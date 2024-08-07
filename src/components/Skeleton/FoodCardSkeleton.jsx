import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FoodCardSkeleton = () => {
  return (
    <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="bg-[#ffffff] border rounded-xl"
      >
        <Skeleton
          borderRadius={"10px 10px 0px 0px"}
          height={170}
          className="relative -top-1 "
        />

        <div className="px-4 pt-4 ">
          <div className="flex items-center gap-1">
            <Skeleton width={15} height={15} borderRadius={"50%"} />
            <Skeleton width={15} height={15} borderRadius={"50%"} />
            <Skeleton width={15} height={15} borderRadius={"50%"} />
            <Skeleton width={15} height={15} borderRadius={"50%"} />
            <Skeleton width={15} height={15} borderRadius={"50%"} />
          </div>
          <Skeleton width={"80%"} height={20} className="mt-2" />
          <Skeleton width={"100%"} height={20} className="mt-2" />
          <Skeleton width={"100%"} height={20} className="mt-2" />

          <div className="flex justify-between pt-3 pb-4 items-center">
            <Skeleton width={100} height={25} />
            <Skeleton width={40} height={40} borderRadius={"50%"} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default FoodCardSkeleton;
