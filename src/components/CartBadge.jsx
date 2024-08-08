import { IoNotificationsOutline } from "react-icons/io5";

const CartBadge = () => {
  return (
    <div className="bg-gray-100 h-8 w-8 rounded-full flex justify-center items-center">
      <div className="relative">
        <IoNotificationsOutline className="text-xl text-gray-500" />
        <div className="absolute top-[2px] right-0 w-2 h-2 rounded-full bg-red-600" />
      </div>
    </div>
  );
};

export default CartBadge;
