import Skeleton from "react-loading-skeleton";

const AgentAddedPropertySkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex-1 border border-primary/30 basis-[18rem] bg-[#fffcf7] rounded-lg overflow-hidden relative group"
          >
            <div className="group !opacity-100 overflow-hidden leading-[0] relative ">
              <Skeleton height={250} className="w-full " />
            </div>
            <div className="absolute top-2 left-2 flex-align-center gap-x-2">
              <Skeleton
                width={80}
                height={20}
                className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary"
              />
              <Skeleton
                width={80}
                height={20}
                className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between mt-3">
                <Skeleton
                  width={150}
                  height={20}
                  className="group-hover:text-primary transition-a"
                />
                <Skeleton
                  width={80}
                  height={20}
                  className="border py-[3px] px-3 flex text-sm rounded-full capitalize text-white justify-center items-center"
                />
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex-align-center gap-x-2">
                  <Skeleton
                    width={28}
                    height={28}
                    className="icon-box !w-7 !h-7 bg-primary/20"
                  />
                  <Skeleton width={60} height={20} />
                </div>
                <div className="flex-align-center gap-x-2">
                  <Skeleton
                    width={28}
                    height={28}
                    className="icon-box !w-7 !h-7 bg-primary/20"
                  />
                  <Skeleton width={60} height={20} />
                </div>
                <div className="flex-align-center gap-x-2">
                  <Skeleton
                    width={28}
                    height={28}
                    className="icon-box !w-7 !h-7 bg-primary/20"
                  />
                  <Skeleton width={60} height={20} />
                </div>
              </div>
              <div className="flex gap-3 mt-4 justify-between">
                <Skeleton
                  width={80}
                  height={30}
                  className="py-[6px] text-xs flex items-center justify-center rounded-full bg-[#24d53b90] text-white"
                />
                <Skeleton
                  width={80}
                  height={30}
                  className="py-[6px] text-xs flex items-center justify-center rounded-full bg-[#f0151590] text-white"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AgentAddedPropertySkeleton;
