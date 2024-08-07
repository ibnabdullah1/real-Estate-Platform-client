import SingleProductCardFullWidthSkeleton from "../Skeleton/SingleProductCardFullWidthSkeleton";
import SingleProductCardFullWidth from "./SingleProductCardFullWidth";
const PropertyFullWidth = ({ properties, isLoading }) => {
  return (
    <div>
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <SingleProductCardFullWidthSkeleton key={i} />
          ))
        : properties?.map((property) => (
            <SingleProductCardFullWidth key={property._id} {...property} />
          ))}
    </div>
  );
};

export default PropertyFullWidth;
