import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const Filters = () => {
  return (
    <div className="md:max-w-[80%] w-full mx-auto relative lg:-mt-10 mt-4">
      <div className=" bg-white rounded-md  lg:grid  lg:grid-cols-5 gap-4  card card-shadow  px-4 py-3">
        <div className="col-span-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex-1 bg-slate-100 w-full p-2 border rounded-lg bg-slate-100/50">
            <h1 className="font-bold">Location</h1>
            <div className="flex justify-center items-center gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter location of the property"
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg  bg-slate-100/50  card-bordered">
            <h1 className="font-bold">Property Type</h1>
            <div className="flex justify-center items-center gap-x-2">
              <BiBuildings />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none  opacity-70"
              >
                <option value="condors">Condors</option>
                <option value="office buildings">Office Buildings</option>
                <option value="apartments">Apartments</option>
                <option value="mansions">Mansions</option>
                <option value="real estate">Real Estate</option>
                <option value="penthouse">Penthouse</option>
                <option value="living room">Living Room</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full p-2 border rounded-lg  bg-slate-100/50  card-bordered 4">
            <h1 className="font-bold">Price range</h1>
            <div className="flex justify-center items-center gap-x-2">
              <BiMoney />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none  opacity-70"
              >
                <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                <option value="$500,000 - $1000,000">
                  $500,000 - $1000,000
                </option>
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg  bg-slate-100/50  ">
            <h1 className="font-bold">For</h1>
            <div className="flex justify-center items-center gap-x-2">
              <BiBriefcase />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none opacity-70 "
              >
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex lg:col-span-1 w-full mt-4 lg:mt-0   justify-center items-center">
          <button className="px-4 py-2 h-10  w-full rounded-md text-white uppercase bg-primary">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
