
"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Brand.css";

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  1440: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
  1536: {
    slidesPerView: 7,
    spaceBetween: 30,
  },
};

const slideData = [
    "/assets/brand/brand1.png",
    "/assets/brand/brand2.png",
    "/assets/brand/brand3.png",
    "/assets/brand/brand4.png",
    "/assets/brand/brand5.png",
    "/assets/brand/brand6.png",
    "/assets/brand/brand7.png",
]

const Brand = () => {
  return (
    <div className="homeSection__bg">
      <div className="container pt-[10px]">
      <div className="">
    
        {/* ==================== swiper slider ================ */}
        <Swiper
        className="brand__bg border-2 border-gray-200 shadow-lg" 
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
              <div className="">
                <Image src={slideInfo} alt="where we work image" height={52} width={100} className="w-auto h-[52px] "/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Brand;
