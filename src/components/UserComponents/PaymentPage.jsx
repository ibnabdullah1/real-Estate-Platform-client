import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../Form/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentPage = () => {
  let [isOpen, setIsOpen] = useState(false);
  const offerData = useLoaderData();
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="">
      <Helmet>
        <title>Real Estate Community/Dashboard/payment</title>
      </Helmet>
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <h2 className="text-lg font-medium text-center leading-6 text-gray-900">
          Property Details
        </h2>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Property Title: {offerData?.title}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Location: {offerData?.location}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Buyer Name: {offerData?.buyerName}
          </p>
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Offer Price: ${offerData?.offerPrice}
          </p>
        </div>
        <hr className="mt-8 " />
        <Elements stripe={stripePromise}>
          <CheckoutForm closeModal={closeModal} offerData={offerData} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
