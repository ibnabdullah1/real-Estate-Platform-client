import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MenuCardSkeleton = () => {
  return (
    <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
      <div className="bg-white rounded-3xl">
        <h2 className="Norican font-bold text-2xl pl-10 pt-5">
          <Skeleton width={100} />
        </h2>
        {Array(3)
          .fill()
          .map((_, i) => (
            <div key={i} className="flex gap-3 space-x-2 px-3 md:px-10 py-4">
              <Skeleton width={70} height={70} className="rounded mt-2" />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-base">
                    <Skeleton width={100} />
                  </h3>
                  <p className="text-[#FFCC00] font-semibold">
                    <Skeleton width={50} />
                  </p>
                </div>
                <hr className="md:w-[70vw] lg:w-full my-1 h-[1.5px] bg-[#d8d7d7]" />
                <p className="text-xs">
                  <Skeleton count={2} />
                </p>
              </div>
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
};

export default MenuCardSkeleton;
