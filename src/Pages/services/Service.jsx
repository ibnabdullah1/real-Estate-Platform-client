import { Helmet } from "react-helmet-async";
import ServiceDescription from "./ServiceDescription";
import ServicesFilter from "./ServicesFilter";
const Service = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <Helmet>
        <title>Real Estate/Our Services</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-3">
          <ServiceDescription />
        </div>
        <div className="md:col-span-1">
          <ServicesFilter />
        </div>
      </div>
    </div>
  );
};

export default Service;
