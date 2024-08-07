import SingleProductCard from "../SingleProductCard";
import SingleProductCardSkeleton from "../Skeleton/SingleProductCardSkeleton";

const PropertyList = ({ properties, basis, isLoading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <SingleProductCardSkeleton key={i} />
          ))
        : properties?.map((property) => (
            <SingleProductCard key={property._id} {...property} basis={basis} />
          ))}
    </div>
  );
};

export default PropertyList;
