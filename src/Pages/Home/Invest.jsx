import { FiArrowRight, FiHome } from "react-icons/fi";
import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";
import avatar from "../../assets/images/avatar.png";
import property from "../../assets/images/property (1).jpeg";
const Invest = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 md:grid-cols-3">
        <div className="md:col-span-1">
          <img src={property} alt="" className="w-full h-full" />
        </div>
        <div className="relative flex-col gap-5 p-5 md:col-span-2 bg-secondary text-slate-100 flex-align-center md:flex-row">
          <div className="flex-shrink-0 p-3 -mt-16 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-dark-light/60 sm:-ml-72 md:-ml-20 sm:mt-0">
            <div className="flex-shrink-0 flex-align-center">
              <img
                src={avatar}
                alt=""
                className="flex-shrink-0 w-8 h-8 rounded-full"
              />
              <img
                src={avatar1}
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <img
                src={avatar2}
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <img
                src={avatar3}
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <div className="grid flex-shrink-0 w-8 h-8 -ml-2 text-white border-2 border-white rounded-full bg-primary place-items-center dark:border-dark">
                <h1>+5</h1>
              </div>
            </div>
            <h1 className="mt-2 text-secondary dark:text-slate-300">
              People Successfull Getting Homes
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              You invest in the apartment of your choice
            </h1>
            <div className="mt-5 flex-align-center gap-x-3">
              <div className="px-3 py-2 bg-white rounded-lg flex-align-center gap-x-2 dark:bg-dark-light ">
                <FiHome className="text-slate-700 dark:text-slate-300" />
                <input
                  type="text"
                  className="bg-transparent outline-none text-slate-700 dark:text-slate-300"
                  placeholder="Find your nicr home..."
                />
              </div>
              <button className="px-2 py-2 rounded-md bg-primary text-white hover:bg-[#f7751e] shadow-md shadow-primary/60">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
