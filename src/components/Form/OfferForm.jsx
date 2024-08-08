import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const OfferForm = () => {
  const {
    name,
    location,
    agent,
    price,
    image,
    _id,

    description,
    distance,
    purpose,
    number_of_beds,
    number_of_bathrooms,
    dimensions,
  } = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [prices, setPrices] = useState("");
  const [minDate, setMinDate] = useState(getCurrentDate());
  const navigate = useNavigate();
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const handleFocus = () => {
    setMinDate(getCurrentDate());
  };
  const handlePriceChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    if (isNaN(inputValue) || inputValue > price) {
      toast.error("Price must be within the allowed range");
    } else {
      setPrices(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const buyerDate = e.target.date.value;
    const offerPrice = parseInt(e.target.offerPrice.value);
    const offerData = {
      _id,
      buyerEmail: user?.email,
      buyerName: user?.displayName,
      buyerDate,
      offerPrice,
      name,
      location,
      agent,
      price,
      image,
      description,
      distance,
      purpose,
      number_of_beds,
      number_of_bathrooms,
      dimensions,
      status: "pending",
    };
    try {
      const res = await axiosSecure.post(`/addedOffers`, offerData);
      if (res.data.insertedId) {
        toast.success("Your Offer Requested successfully!");
        navigate("/dashboard/wishlist");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full md:max-w-3xl py-10  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-bold capitalize">
        Give a offer
      </h2>

      <form onSubmit={handleSubmit} className="w-[80%] px-10">
        <div className="space-y-6">
          <div className="flex justify-between gap-4 w-full ">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="title" className="block text-gray-400">
                Property Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                defaultValue={name}
                disabled
              />
            </div>
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="location" className="block text-gray-400">
                Property Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                defaultValue={location}
                disabled
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 w-full ">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-400">
                Agent name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                defaultValue={agent?.name}
                disabled
              />
            </div>

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-400">
                Price Range
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                defaultValue={price}
                disabled
              />
            </div>
          </div>
          <div className="flex justify-between gap-4 w-full ">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="guest" className="block text-gray-400">
                Buyer Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                disabled
                defaultValue={user?.displayName}
              />
            </div>

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="guest" className="block text-gray-400">
                Buyer Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                disabled
                defaultValue={user?.email}
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 w-full ">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="bedrooms" className="block text-gray-600">
                Buying date
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="date"
                id="bedrooms"
                type="date"
                placeholder="Buying date"
                required
                onFocus={handleFocus}
                min={minDate}
              />
            </div>
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                type="number"
                name="offerPrice"
                placeholder="Offer price here.."
                required
                id="priceInput"
                value={prices}
                onChange={handlePriceChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#1c4456]"
        >
          Sand a Offer
        </button>
      </form>
    </div>
  );
};

export default OfferForm;
