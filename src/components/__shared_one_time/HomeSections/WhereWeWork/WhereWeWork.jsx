
"use client";

import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    slidesPerView: 6,
    spaceBetween: 30,
  },
  1536: {
    slidesPerView: 8,
    spaceBetween: 30,
  },
};

const slideData = [
    "/assets/where_we_work/www1.png",
    "/assets/where_we_work/www2.png",
    "/assets/where_we_work/www3.png",
    "/assets/where_we_work/www4.png",
    "/assets/where_we_work/www5.png",
    "/assets/where_we_work/www6.png",
    "/assets/where_we_work/www1.png",
    "/assets/where_we_work/www2.png",
]

const WhereWeWork = () => {
  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
      <div className="">
       <div className="flex justify-center">
            <HeadingIcon text={headingIconText.whereWeWork__headingIconText}/>
       </div>
        
        <h3 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] leading-normal font-bold text-primary text-center pb-[30px]">At Go Kundu <span className="text-secondary">We Worked With Global Brand</span></h3>
        {/* ==================== swiper slider ================ */}
        <Swiper
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
                <Image src={slideInfo} alt="where we work image" height={23} width={125} className="w-auto h-[22px] "/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default WhereWeWork;
