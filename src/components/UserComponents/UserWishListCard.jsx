import { HiCurrencyDollar } from "react-icons/hi2";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdLocate } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { RemoveWishlist } from "../../Api/properties";
import Swal from "sweetalert2";
const UserWishListCard = ({ wishlist, refetch }) => {
  const { location, title, image, price, status, agent, _id } = wishlist;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await RemoveWishlist(id);
        // console.log(res);
        if (res.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your Property has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div className="flex max-w-5xl mx-auto justify-start gap-8 mb-7 border  rounded-md border-[#7accf2] items-stretch bg-[#ecf6fb]">
      <div className="">
        <img
          className="overflow-hidden rounded-l-md w-[300px] object-cover h-full"
          src={image}
          alt=""
        />
      </div>
      <div className=" py-5">
        <div className="flex gap-2 mb-3">
          <img
            className="w-[40px] border-2 border-[#2b4d5e] h-[40px] rounded-[50%]"
            src={agent.agentImage}
            alt={agent.name}
          />
          <div>
            <h2 className="text-base text-[#2b4d5e] font-semibold">
              Agent: {agent.name}
            </h2>
          </div>
        </div>

        <h2 className="text-[#2b4d5e] mb-3 font-semibold text-xl">{title}</h2>

        <p className="flex text-[#417086] items-center gap-1">
          <IoMdLocate className="text-[#f01515]" />
          {location}
        </p>

        <p className="flex text-[#417086] items-center gap-1">
          <MdVerified className="text-green-500 text-lg" />
          {status}
        </p>

        <p className="flex text-[#417086]  mb-3 gap-1   items-center ">
          <HiCurrencyDollar className="text-[#2aca5a] text-xl" />

          {price}
        </p>

        <div className="flex gap-3">
          <Link to={`offer/${_id}`}>
            <button className="flex gap-[2px] justify-center items-center transform duration-500 px-6 py-2 text-sm font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase">
              <BiSolidOffer className="text-xl" /> Offer
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex justify-center gap-[2px]  items-center transform duration-500 px-6 py-2 text-sm font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none uppercase"
          >
            <ImCancelCircle className="text-lg" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserWishListCard;
