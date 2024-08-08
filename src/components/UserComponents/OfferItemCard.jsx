import { useState } from "react";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import PaymentModal from "../../Modal/PaymentModal";
const OfferItemCard = ({
  _id,
  name,
  location,
  offerPrice,
  price,
  description,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  status,
  agent,
  transactionId,
  buyerName,
}) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative md:grid  gap-3 mt-3 overflow-hidden rounded-lg bg-[#ffffff]  grid-cols-7 group">
      <div className="col-span-2 ">
        <div className="group !opacity-100 overflow-hidden relative h-full">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-125 transition-a"
          />
        </div>
        <div className="absolute top-2 left-2 flex-align-center gap-x-2">
          <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
            {distance} away
          </span>
          <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
            for {purpose}
          </span>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="p-3 space-y-1">
          <div className="flex gap-2 items-center">
            <img
              src={agent?.agentImage}
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div className="">
              <p className="text-gray-500 text-sm">
                {agent?.name} <br /> {agent?.email}
              </p>
            </div>
          </div>
          <h1 className="group-hover:text-primary transition-a text-lg font-bold capitalize text-gray-700">
            {name}
          </h1>
          <div className=" flex-align-center gap-1 text-gray-500">
            <BiMap />
            <p>{location}</p>
          </div>
          <p className="text-gray-500 text-sm">{`${description?.slice(
            0,
            180
          )}...`}</p>
          <div className="flex gap-3 py-3">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiBed />
              </div>
              <p className="text-sm text-gray-500">{number_of_beds} Beds</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiTab />
              </div>
              <p className="text-sm text-gray-500">
                {number_of_bathrooms} Bathrooms
              </p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiMapAlt />
              </div>
              <p className="text-sm text-gray-500">{dimensions}</p>
            </div>
          </div>

          <div className=" md:flex justify-between items-center">
            <h1 className=" font-semibold text-primary">
              <span className="text-[#33333395]"> Price:</span> ${price}
            </h1>{" "}
            <h1 className=" font-semibold text-primary">
              <span className="text-[#33333395]"> Offer Price:</span> $
              {offerPrice}
            </h1>
            <div className="flex gap-1 items-center">
              <h1 className=" font-semibold text-[#33333395]">Status:</h1>
              <button
                className={`font-medium rounded-full px-2 py-[2px] text-xs ${
                  status === "pending"
                    ? "bg-[#33333390]"
                    : status === "accepted"
                    ? "bg-[#24d53b]"
                    : status === "bought"
                    ? "bg-[#24d53b]"
                    : ""
                } " capitalize text-white`}
              >
                {status === "bought" ? "Pay Completed" : status}
              </button>
            </div>
          </div>

          {status === "accepted" && (
            <div className="flex items-center gap-1">
              <p className="text-[#33333395] font-semibold">Payment : </p>
              <Link
                to={`payment/${_id}`}
                className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-[#24d53b90] hover:bg-[#24d53b]  "
              >
                Continue
              </Link>
            </div>
          )}

          <p className="text-[#24d53b]">Your Transaction id: {transactionId}</p>

          <PaymentModal
            closeModal={closeModal}
            isOpen={isOpen}
            name={name}
            location={location}
            buyerName={buyerName}
            offerPrice={offerPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferItemCard;
