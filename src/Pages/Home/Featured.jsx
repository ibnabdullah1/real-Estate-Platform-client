import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../Api/axiosPublic";
import SingleProductCard from "../../components/SingleProductCard";
import SingleProductCardSkeleton from "../../components/Skeleton/SingleProductCardSkeleton";
const Featured = () => {
  const {
    refetch,
    data: properties = [],
    isLoading,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/requestedProperty`);
      return res.data;
    },
  });

  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <h1 className="heading">explore featured latest properties</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SingleProductCardSkeleton key={i} />
            ))
          : properties
              ?.slice(0, 3)
              .map((featured) => (
                <SingleProductCard key={featured._id} {...featured} />
              ))}
      </div>
    </div>
  );
};

export default Featured;
