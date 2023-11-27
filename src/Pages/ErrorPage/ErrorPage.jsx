import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex text-center justify-center items-center min-h-[80vh]">
      <div className=" space-y-3">
        <div>
          <img
            className="md:w-[300px]"
            src="https://realstatic-nextjs.vercel.app/images/error.svg"
            alt=""
          />
        </div>
        <p className="text-2xl font-semibold ">Something went wrong!</p>
        <NavLink to="/">
          <button className=" inline-block px-12 py-3 text-sm font-medium text-[#1c4456] border border-[#1c4456] rounded hover:bg-[#1c4456] hover:text-white active:bg-[#1c4456] focus:outline-none focus:ring-none">
            Home Page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
