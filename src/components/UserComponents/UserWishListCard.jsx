import { BiBed, BiMap, BiMapAlt, BiSolidOffer, BiTab } from "react-icons/bi";
import { MdDeleteSweep, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RemoveWishlist } from "../../Api/properties";

const UserWishListCard = ({
  _id,
  name,
  location,
  price,
  description,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  refetch,
}) => {
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
        if (res.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your Property has been deleted.", "success");
        }
      }
    });
  };

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
          <Link
            to={`/properties/${_id}`}
            className="group-hover:text-primary transition-a"
          >
            <h1 className="text-lg font-bold capitalize text-gray-700">
              {name}
            </h1>
          </Link>

          <div className=" flex-align-center gap-x-2 text-gray-500">
            <BiMap />
            <p>{location}</p>
          </div>
          <p className="text-gray-500 text-sm">{`${description?.slice(
            0,
            180
          )}...`}</p>
          <div className="flex justify-between py-3">
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

          <div className="mt-4 md:flex-center-between">
            <h1 className="text-lg font-semibold text-primary">${price}</h1>
            <div className="flex gap-3">
              <Link to={`offer/${_id}`}>
                <button className="flex gap-1 justify-center items-center font-medium rounded-full px-6 py-[6px] text-sm transform duration-500 bg-[#24d53b90] hover:bg-[#24d53b] text-white">
                  Offer
                  <BiSolidOffer className="text-lg" />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="flex gap-1 justify-center items-center font-medium rounded-full
             px-4 py-[6px] text-sm transform duration-500 bg-[#f0151590] hover:bg-[#f01515] text-white "
              >
                Remove
                <MdDeleteSweep className="text-lg" />
              </button>
              <Link to={`/properties/${_id}`}>
                <button className="flex gap-1 justify-center items-center font-medium rounded-full px-6 py-[6px] text-sm transform duration-500 bg-[#33333390] hover:bg-[#333333] text-white">
                  Details
                  <MdKeyboardDoubleArrowRight className="text-lg" />
                </button>
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWishListCard;
