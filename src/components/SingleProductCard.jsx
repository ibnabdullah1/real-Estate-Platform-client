import toast from "react-hot-toast";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import { addWishlist } from "../Api/properties";
import useAuth from "../Hooks/useAuth";
import CardHoverIcons from "./CardHoverIcons";

const SingleProductCard = ({
  _id,
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
  agent,
  description,
  category,
  status,
}) => {
  const { user } = useAuth();

  const wishlistData = {
    _id,
    name,
    location,
    price,
    purpose,
    number_of_beds,
    number_of_bathrooms,
    dimensions,
    image,
    agent,
    description,
    category,
    buyerEmail: user?.email,
    buyerName: user?.displayName,
    status,
  };

  const handlePropertyAddToWishlist = async (e) => {
    e.preventDefault();
    try {
      if (!user?.email) {
        return toast.error(
          "You are not logged in yet. Please log in and try again"
        );
      }

      const data = await addWishlist(wishlistData);
      if (data.insertedId) {
        toast.success("Your Property added in wishlist");
      }
      const isExist = data?.message?.trim() === "Is already added in wishlist";
      if (isExist) {
        toast.error("Is already added in wishlist");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } bg-[#f9f7f4]  rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <div className="!opacity-100">
          <img
            src={image}
            alt={name}
            className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </div>
        <CardHoverIcons
          handlePropertyAddToWishlist={handlePropertyAddToWishlist}
          image={image}
        />
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-2 left-2 flex-align-center gap-x-2">
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
          {distance} away
        </span>
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
          for {purpose}
        </span>
      </div>
      <div className="p-3">
        <Link
          to={`/properties/${_id}`}
          className="group-hover:text-primary transition-a"
        >
          <h1 className="text-lg font-bold capitalize">{name}</h1>
        </Link>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{number_of_beds} Beds</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{dimensions}</p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <h1 className="text-lg font-semibold text-primary">${price}</h1>
          <Link to={`/properties/${_id}`}>
            <button className="btn btn-secondary">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
