import { FaRegCircleCheck } from "react-icons/fa6";

const PaymentFeature = () => {
  return (
    <div className="lg:flex  justify-center gap-6 px-10 py-20">
      <div className="flex-1">
        <div className="bg-[#D3F1FF] w-[300px] lg:w-[450px] md:w-[650px] rounded-md">
          <img
            className="w-[300px]  lg:w-[450px] md:w-[650px]  relative left-10 rounded-md -top-10"
            src="https://i.ibb.co/0hPVQjC/feature4.webp"
            alt=""
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className=" mh:w-[450px] text-3xl mt-10  text-[#1c4456] mb-5 font-bold uppercase">
          Secure payment system
        </h2>

        <p className="w-[300px] text-[#417086]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. In a free hour, when our power of choice is untrammelled.
        </p>
        <p className="flex justify-start items-center font-semibold mt-3 text-[#417086] gap-1">
          <FaRegCircleCheck />
          Find excellent deals
        </p>
        <p className="flex justify-start text-[#417086] font-semibold items-center gap-1">
          <FaRegCircleCheck />
          Friendly host & Fast support
        </p>
        <p className="flex justify-start text-[#417086] font-semibold items-center gap-1">
          <FaRegCircleCheck />
          Secure payment system
        </p>
      </div>
    </div>
  );
};

export default PaymentFeature;
