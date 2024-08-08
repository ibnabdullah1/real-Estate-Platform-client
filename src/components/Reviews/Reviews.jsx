import { Helmet } from "react-helmet-async";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.css";
import { reviewLists } from "./ReviewList";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <div className=" pt-2 lg:px-10 px-10 ">
      <Helmet>
        <title>Real Estate Community/Reviews</title>
      </Helmet>
      <div className=" max-w-7xl mx-auto pt-2 pb-16 ">
        <div className="flex justify-between items-end py-8">
          <div className="md:text-center">
            <h1 className="mx-auto sub-heading"> What Our Client Say</h1>
            <h1 className="heading"> Testimonials</h1>
          </div>

          <div className="flex justify-end  gap-2 ">
            <button className="swiper-button-prev button text-xl  p-2 rounded-full border">
              <IoIosArrowBack />
            </button>
            <button className="swiper-button-next  button text-xl p-2 rounded-full border">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
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
            {reviewLists.map((review, i) => (
              <SwiperSlide key={i}>
                <ReviewsCard review={review} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
