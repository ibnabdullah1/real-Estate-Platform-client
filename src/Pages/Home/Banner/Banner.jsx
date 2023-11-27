import { SlCursor } from "react-icons/sl";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/n1jKrSL/hero.webp')",
        backgroundPosition: "right center",
        backgroundColor: "#C7E6F4",
        backgroundRepeat: "no-repeat",
        minHeight: "110vh",
        width: "100%",
      }}
      className=" flex md:justify-start items-center "
    >
      <div className="space-y-3 pl-6 md:pl-16">
        <h2 className="md:text-5xl text-3xl text-white md:text-[#1c4456] font-bold">
          Find a perfect property <br />
          Where you’ll love to live
        </h2>
        <p className="text-xl text-white md:text-[#1c4456] md:w-[600px]">
          We helps businesses customize, automate and scale up their ad
          production and delivery.
        </p>

        <button className="flex justify-center gap-2 items-center transform duration-500 px-12 py-3 text-sm font-medium text-[#1c4456] border border-[#1c4456] rounded hover:bg-[#1c4456] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none">
          Explore More <SlCursor />
        </button>
      </div>
    </div>
  );
};

export default Banner;
