import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MenuSkeleton = () => {
  return (
    <>
      {" "}
      <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
        <div className="relative w-full ">
          <Skeleton
            baseColor="#efefef60"
            color="#e0e0e040"
            highlightColor="#f5f5f5"
            className="rounded w-full h-[300px]"
          />
          <div className="absolute bottom-0 top-0 left-0 right-0 p-4 m-auto  flex items-center justify-center">
            <div className="text-center">
              <Skeleton height={40} width={400} />{" "}
              <Skeleton width={200} height={20} className="mt-3" />
            </div>
          </div>
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
        <div className="pt-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="pt-8">
              <div className="flex justify-center">
                <Skeleton height={40} width={200} />{" "}
              </div>

              <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mt-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 space-x-2 px-3 md:px-10 py-4"
                  >
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
                      <Skeleton height={2} />

                      <p className="text-xs">
                        <Skeleton count={2} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mb-10 mt-8">
                <Skeleton height={40} width={120} />
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </>
  );
};

export default MenuSkeleton;
