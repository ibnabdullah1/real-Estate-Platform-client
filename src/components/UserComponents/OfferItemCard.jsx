import { IoMdLocate } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";
import { RiPassPendingFill, RiSecurePaymentFill } from "react-icons/ri";
import PaymentModal from "../../Modal/PaymentModal";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const OfferItemCard = ({ offerItem }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  console.log(offerItem);
  const { location, title, image, offerPrice, status, agent, _id } = offerItem;
  return (
    <div className="lg:flex max-w-5xl mx-auto justify-start gap-8 mb-7 border  rounded-md border-[#7accf2] items-stretch bg-[#ecf6fb]">
      <div className="">
        <img
          className="overflow-hidden rounded-l-md md:w-full lg:w-[300px] object-cover h-full"
          src={image}
          alt=""
        />
      </div>
      <div className=" py-5 px-5">
        <h2 className="text-[#2b4d5e] mb-2 font-semibold text-xl">{title}</h2>
        <h2 className="text-base mb-2 text-[#2b4d5e] font-semibold">
          Agent: {agent?.name}
        </h2>
        <p className="flex text-[#417086] mb-2  items-center gap-1">
          <IoMdLocate className="text-[#f01515]" />
          {location}
        </p>

        <p className="flex text-[#417086]  mb-2 gap-1   items-center ">
          <RiPassPendingFill className="text-[#000000] text-xl" />
          Status: {status}
        </p>

        <p className="flex text-[#417086]  mb-2 gap-1   items-center ">
          <HiCurrencyDollar className="text-[#2aca5a] text-xl" />
          Offer Amount: {offerPrice}
        </p>

        {status === "accepted" && (
          <Link to={`payment/${_id}`}>
            <button className="flex gap-[2px] text-xl justify-center items-center transform duration-500 px-6 py-2  font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase">
              <RiSecurePaymentFill className="text-2xl" /> Pay
            </button>
          </Link>
        )}
        {status === "bought" && (
          <button className=" px-6 py-2  font-medium  border border-[#24d53b] rounded bg-[#24d53b] text-white uppercase">
            Pay Completed
          </button>
        )}
        {offerItem?.transactionId && (
          <p className="text-green-600">
            Your Transaction id: {offerItem?.transactionId}
          </p>
        )}

        <div>
          <PaymentModal
            closeModal={closeModal}
            isOpen={isOpen}
            offerItem={offerItem}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferItemCard;
