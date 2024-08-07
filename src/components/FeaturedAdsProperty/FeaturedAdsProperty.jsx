import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axiosPublic from "../../Api/axiosPublic";
import SingleProductCard from "../SingleProductCard";
import SingleProductCardSkeleton from "../Skeleton/SingleProductCardSkeleton";
import "./FeaturedAdsProperty.css";

const FeaturedAdsProperty = () => {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/requestedProperty`);
      return res.data;
    },
  });

  return (
    <div className=" FeaturedAdsProperty h-min  rounded mt-10">
      <p className="text-xl font-semibold my-4">Featured Properties</p>
      <div>
        <Swiper
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div>
            {isLoading ? (
              <SwiperSlide>
                <SingleProductCardSkeleton />
              </SwiperSlide>
            ) : (
              properties?.slice(0, 5).map((featured, i) => (
                <SwiperSlide key={i}>
                  <SingleProductCard {...featured} />
                </SwiperSlide>
              ))
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedAdsProperty;
