import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addWishlist } from "../../Api/properties";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import ReviewModal from "../../Modal/ReviewModal";
import ReportModal from "../../Modal/ReportModal";
import { Helmet } from "react-helmet-async";

const PropertiesDetails = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  let [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  let [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  function closeModal() {
    setReviewModalIsOpen(false);
    setReportModalIsOpen(false);
  }
  const {
    _id,
    location,
    bedrooms,
    bathrooms,
    rooms,
    square_footage,
    year_built,
    price,
    image,
    status,
    title,
    agent,
    description,
  } = useLoaderData();
  const wishlistData = {
    _id,
    location,
    bedrooms,
    bathrooms,
    rooms,
    square_footage,
    year_built,
    price,
    image,
    buyerEmail: user?.email,
    buyerName: user?.displayName,
    status,
    title,
    agent,
    description,
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await addWishlist(wishlistData);
      console.log(data);
      if (data.insertedId) {
        toast.success("Your Property added in wishlist");
      }
      const isExist = data?.message?.trim() === "Is already added in wishlist";
      if (isExist) {
        toast.error("Is already added in wishlist");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-36 lg:flex md:px-20 px-5 justify-between items-stretch bg-[#f5fcff]">
      <Helmet>
        <title>Real Estate/properties/details</title>
      </Helmet>

      <div className="flex-1 rounded-l">
        <img className="w-full rounded-l" src={image} alt="" />
      </div>
      <div className="flex-1 rounded-r border border-[#c7e6f4] p-10 space-y-1">
        <h2 className="text-2xl font-semibold text-[#1c4456]">{title} </h2>
        <p className="text-lg text-[#1c4456]">{location} </p>

        <p className="text-lg text-[#1c4456]">
          <span className="font-semibold">Price</span>: ${price}
        </p>
        <p className="text-lg text-[#1c4456]">
          <span className="font-semibold">Description</span>: {description}
        </p>

        <button
          onClick={handleSubmit}
          className="mt-4 transform duration-500 px-4 py-3 text-sm font-medium  border bg-[#3f6c81] border-[#1c4456] rounded hover:bg-[#1c4456] text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
        >
          Add to wishlist
        </button>

        <ReviewModal
          closeModal={closeModal}
          agent={agent}
          reviewModalIsOpen={reviewModalIsOpen}
          title={title}
        />
        <ReportModal
          closeModal={closeModal}
          agent={agent}
          reportModalIsOpen={reportModalIsOpen}
          title={title}
          _id={_id}
        />

        <button
          onClick={() => setReviewModalIsOpen(true)}
          className="transform ml-3 duration-500 px-4 py-3 text-sm font-medium  border bg-[#3f6c81] border-[#1c4456] rounded hover:bg-[#1c4456] text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
        >
          Add a review
        </button>
        <button
          onClick={() => setReportModalIsOpen(true)}
          className="transform ml-3 duration-500 px-4 py-3 text-sm font-medium  border bg-[#3f6c81] border-[#1c4456] rounded hover:bg-[#1c4456] text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
        >
          Add a report
        </button>
      </div>
    </div>
  );
};

export default PropertiesDetails;
