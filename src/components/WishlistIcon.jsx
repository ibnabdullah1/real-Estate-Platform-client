import { PiHeart } from "react-icons/pi";
import { Link } from "react-router-dom";

const WishlistIcon = () => {
  return (
    <Link
      to={"/dashboard/wishlist"}
      className="bg-gray-50 h-8 w-8 rounded-full hidden md:flex justify-center items-center"
    >
      <PiHeart className="text-xl text-gray-500" />
    </Link>
  );
};

export default WishlistIcon;
