"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="bg-white shadow-default w-full max-w-[630px] rounded-lg overflow-hidden"
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#FFC221",
      }}
    >
      {/* slider1 */}
      <SwiperSlide>
        <div className="p-6 sm:p-8 md:pl-[60px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 h-full min-h-[180px] sm:min-h-[200px]">
          {" "}
          {/* Responsive padding, gap, and min-height */}
          {/* avatar img */}
          <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex-shrink-0">
            {" "}
            {/* flex-shrink-0 to prevent image shrinking */}
            <Image
              src="/assets_2/img/testimonials/avatar.jpg"
              fill
              className="object-cover rounded-full" // Changed to object-cover and rounded-full for avatar style
              quality={100}
              alt="Testimonial avatar"
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center sm:text-left flex flex-col gap-2">
            <p className="text-sm sm:text-base">
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-semibold text-primary text-sm sm:text-base">
              Jane Doe
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider2 - Apply similar responsive classes */}
      <SwiperSlide>
        <div className="p-6 sm:p-8 md:pl-[60px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 h-full min-h-[180px] sm:min-h-[200px]">
          {/* avatar img */}
          <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex-shrink-0">
            <Image
              src="/assets_2/img/testimonials/avatar.jpg"
              fill
              className="object-cover rounded-full"
              quality={100}
              alt="Testimonial avatar"
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center sm:text-left flex flex-col gap-2">
            <p className="text-sm sm:text-base">
              Another great testimonial about the quality and service provided.
              Highly satisfied!
            </p>
            <p className="font-semibold text-primary text-sm sm:text-base">
              John Smith
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider3 - Apply similar responsive classes */}
      <SwiperSlide>
        <div className="p-6 sm:p-8 md:pl-[60px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 h-full min-h-[180px] sm:min-h-[200px]">
          {/* avatar img */}
          <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex-shrink-0">
            <Image
              src="/assets_2/img/testimonials/avatar.jpg"
              fill
              className="object-cover rounded-full"
              quality={100}
              alt="Testimonial avatar"
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center sm:text-left flex flex-col gap-2">
            <p className="text-sm sm:text-base">
              The team was professional and delivered excellent results. Will
              use again.
            </p>
            <p className="font-semibold text-primary text-sm sm:text-base">
              Alice Brown
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
