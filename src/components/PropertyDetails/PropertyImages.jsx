import propertyDetailsImage1 from "../../assets/images/details/property-details1.jpg";
import propertyDetailsImage2 from "../../assets/images/details/property-details2.jpg";
import propertyDetailsImage3 from "../../assets/images/details/property-details3.jpg";
import propertyDetailsImage4 from "../../assets/images/details/property-details4.jpg";
const PropertyImages = ({ image }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-4">
      <div className="col-span-1  grid grid-cols-2 gap-4">
        <img
          src={propertyDetailsImage1}
          alt=""
          className="w-full h-full rounded object-cover"
        />
        <img
          src={propertyDetailsImage2}
          alt=""
          className="w-full h-full rounded object-cover"
        />
        <img
          src={propertyDetailsImage3}
          alt=""
          className="w-full h-full rounded object-cover"
        />
        <img
          src={propertyDetailsImage4}
          alt=""
          className="w-full h-full rounded object-cover"
        />
      </div>
      <div className="col-span-2 ">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded object-cover"
        />
      </div>
    </div>
  );
};

export default PropertyImages;
