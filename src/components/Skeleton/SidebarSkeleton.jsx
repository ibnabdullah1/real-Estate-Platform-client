import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const SidebarSkeleton = () => {
  return (
    <div className="z-20 fixed flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)] bg-[#fff] w-[280px] space-y-6 pb-4 inset-y-0 left-0 transform -translate-x-full lg:translate-x-0 transition duration-200 ease-in-out px-2">
      <div>
        <div className="sticky py-2 top-0 bg-white z-40">
          <Link to="/">
            <div className="">
              <div className="flex items-center justify-center font-semibold relative text-2xl text-[#004068] ">
                <h1>Real</h1>
                <img
                  className=" w-10"
                  src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-house-real-estate-icon-png-image_6319467.png"
                  alt=""
                />
                <h3 className="text-primary">Estate</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
