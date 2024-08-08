import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import "./CheckoutForm.css";

const CheckoutForm = ({ closeModal, offerData }) => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const offerPrice = offerData?.offerPrice;

  useEffect(() => {
    if (offerPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: offerPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, offerPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      toast.success("Payment Successfully");
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      toast.error("Something went wrong");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        navigate("/dashboard/property-bought");
        const updateData = {
          status: "bought",
          transactionId: paymentIntent.id,
        };
        await axiosSecure.put(`/offerDataUpdate/${offerData._id}`, updateData);
      }
    }
  };
  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex gap-4 mt-2 ">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              `Pay $${offerData?.offerPrice}`
            )}
          </button>
        </div>
        {transactionId && (
          <p className="text-green-600">Your transaction id: {transactionId}</p>
        )}
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
