import { IoMdArrowDropright } from "react-icons/io";
import videoImage from "../../assets/images/details/video.jpg";

const PropertyVideo = () => {
  return (
    <div className="p-6 bg-slate-100  h-min  rounded space-y-4">
      <p className="text-xl font-semibold my-2">Property Video </p>{" "}
      <div className="relative">
        <img src={videoImage} alt="" className="rounded w-full h-full" />
        <div className="absolute w-[100px] h-[100px] top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-[#333333] text-white text-6xl hover:bg-primary duration-500 flex justify-center items-center">
          <IoMdArrowDropright />
        </div>
      </div>
    </div>
  );
};

export default PropertyVideo;
