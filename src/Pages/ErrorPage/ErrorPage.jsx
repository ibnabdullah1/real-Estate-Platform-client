import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/404.png";
const ErrorPage = () => {
  return (
    <div className="flex text-center justify-center items-center min-h-screen ">
      <div className="flex-col text-center flex-center-center">
        <img src={NotFoundImg} alt="" className="w-[300px] -mt-20" />
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold opacity-50">
          Page Not Found!!
        </h1>
        <Link
          to={"/"}
          className="gap-2 mt-4 btn btn-primary flex-center-center"
        >
          <BiArrowBack />
          <span>go back</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
