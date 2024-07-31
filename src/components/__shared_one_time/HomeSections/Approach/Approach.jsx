"use client";

import "./Approach.css";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";


const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1536: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const services = [
  {
    step: "Step 01",
    img: "/assets/gokundu_home/approach1.png",
    title: "Discovery & Consultation",
    para: "The Discovery & Consultation phase is a crucial step where we collaborate with clients to understand their business needs, goals, and challenges. Through detailed discussions and analysis, we identify key requirements.",
  },
  {
    step: "Step 02",
    img: "/assets/gokundu_home/approach2.png",
    title: "Planning and Strategy",
    para: "During the Planning and Strategy phase, we meticulously outline the project roadmap, defining milestones, timelines, and resource allocation to ensure a clear path forward. We develop a strategic plan that aligns.",
  },
  {
    step: "Step 03",
    img: "/assets/gokundu_home/approach3.png",
    title: "Design & Development",
    para: "In the Design & Development phase, we transform project requirements into tangible solutions through iterative design and coding. Our design team crafts intuitive and engaging user interfaces",
  },
  {
    step: "Step 04",
    img: "/assets/gokundu_home/approach4.png",
    title: "Quality Assurance",
    para: "The Quality Assurance phase is dedicated to meticulously testing and validating the software to ensure it meets the highest standards of quality and reliability. Our QA team employs a variety of testing methodologies",
  }
];

const Approach = () => {
  return (
    <div className="homeSection__bg">
      <div className="!overflow-hidden padding__top">
        <div className="">
          <div className="container">
            <div className="flex flex-col items-center md:items-start justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon text={headingIconText.approach__headingIconText}/>
              </div>
              <h3 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] leading-normal font-bold text-black text-center md:text-left pb-[25px]">
              Go Kundu <span className="text-primary">Approach to Client</span>
              </h3>
            </div>

            <div className="w-full h-[3px] bg-[#0C1C3C]" />

            <div className="">
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="">

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-[#0C1C3C]" />
                      </div>
                    </div>
                      
                    <div className="">
                      <Image
                        src={service.img}
                        width={120}
                        height={120}
                        alt="benifits image"
                        className="w-[120px] h-[120px] mx-auto p-2 border-2 border-[#0C1C3C] rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-[#0C1C3C]" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[330px] h-[300px] cart pl-[15px] py-[30px]">
                      <div className="">
                        <p className="text-primary text-xs font-bold">{service.step}</p>
                        <h5 className="text-[#0B0C0C] text-[25px] font-bold py-[9px]">
                          {service.title}{" "}
                        </h5>
                        <p className="text-[#0C1C3C] text-base font-normal">
                          {service.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;