import hero4 from "../../../assets/images/hero-4.png";
import heroBg from "../../../assets/images/hero-bg-pattern.png";
const Banner = () => {
  return (
    <div
      className=" md:flex justify-between items-end md:items-center bg-red-400 pt-16"
      style={{
        background: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30  w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 ">
        <h1 className="text-3xl font-semibold capitalize lg:text-5xl">
          property consisting <br /> land and buildings
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente quibusdam
            culpa magni eius?
          </p>
        </div>
        <button className="mt-6 px-3 py-2 rounded-md text-white uppercase bg-primary">
          get started
        </button>
        <div className="mt-6 text-center flex items-center gap-x-4">
          <div>
            <h1 className="md:text-xl lg:text-3xl font-bold">
              12k <span className="text-lg text-primary">+</span>
            </h1>
            <p>Requested Projects</p>
          </div>
          <div>
            <h1 className="md:text-xl lg:text-3xl font-bold">
              15k <span className="text-lg text-primary">+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1 className="md:text-xl lg:text-3xl font-bold">
              100 <span className="text-lg text-primary">+</span>
            </h1>
            <p>Served Clients</p>
          </div>
        </div>
      </div>
      <div className=" w-[320px] lg:w-[600px]  ">
        <img src={hero4} alt="" className="w-ful" />
      </div>
    </div>
  );
};

export default Banner;
