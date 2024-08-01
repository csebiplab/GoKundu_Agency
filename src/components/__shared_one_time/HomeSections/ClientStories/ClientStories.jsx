"use client";
import React from "react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./ClientStories.css";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
};

const clientReview = [
  {
    id: 1,
    img: "/assets/icons/review_google.png",
    review: "/assets/icons/yellow_star.svg",
    desc: "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc: "Thank you, Go Kundu!",
    man: "/assets/icons/man.png",
    name: "John D.",
    location: "Local Guide",
    quote: "/assets/icons/quote.png",
  },
  {
    id: 2,
    img: "/assets/icons/review_google.png",
    review: "/assets/icons/yellow_star.svg",
    desc: "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc: "Thank you, Go Kundu!",
    man: "/assets/icons/man.png",
    name: "John D.",
    location: "Local Guide",
    quote: "/assets/icons/quote.png",
  },
  {
    id: 3,
    img: "/assets/icons/review_google.png",
    review: "/assets/icons/yellow_star.svg",
    desc: "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc: "Thank you, Go Kundu!",
    man: "/assets/icons/man.png",
    name: "John D.",
    location: "Local Guide",
    quote: "/assets/icons/quote.png",
  },
  {
    id: 4,
    img: "/assets/icons/review_google.png",
    review: "/assets/icons/yellow_star.svg",
    desc: "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc: "Thank you, Go Kundu!",
    man: "/assets/icons/man.png",
    name: "John D.",
    location: "Local Guide",
    quote: "/assets/icons/quote.png",
  },
  {
    id: 5,
    img: "/assets/icons/review_google.png",
    review: "/assets/icons/yellow_star.svg",
    desc: "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc: "Thank you, Go Kundu!",
    man: "/assets/icons/man.png",
    name: "John D.",
    location: "Local Guide",
    quote: "/assets/icons/quote.png",
  },
  {
    id: 6,
    img: "/assets/icons/review_google.png",
    review: "/assets/icons/yellow_star.svg",
    desc: "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc: "Thank you, Go Kundu!",
    man: "/assets/icons/man.png",
    name: "John D.",
    location: "Local Guide",
    quote: "/assets/icons/quote.png",
  },
];

const ClientStories = () => {
  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start">
              <HeadingIcon
                text={headingIconText.clientStories__headingIconText}
              />
            </div>

            <h3 className="text-center md:text-left text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-secondary pt-[5px] leading-normal">
              Go Kundu's{" "}
              <span className="text-primary">Happy Client Stories</span>
            </h3>
            <p className="text-center md:text-left text-lg font-normal text-secondary pt-[10px] md:pt-[15px] lg:pt-[17px] xl:pt-[20px] 5xl:pt-[25px]">
              Our clients' voices resonate with confidence and satisfaction,
              reflecting the profound impact of our tailored solutions. At Go
              Kundu, our clients are more than just partners; they are the heart
              of our success story. Their experiences and triumphs drive us to
              innovate.
            </p>

            <div className="flex items-center justify-between gap-[30px]">
              <div>
                <h6 className="flex items-center gap-[8px] text-xs font-semibold">
                  Review On{" "}
                  <Image
                    src="/assets/icons/red_star.svg"
                    alt="red star"
                    width={70}
                    height={32}
                  />
                </h6>
                <p className="flex items-center gap-[16px] text-xs font-normal">
                  {" "}
                  <Image
                    src="/assets/icons/clutch.png"
                    alt="clutch icon"
                    width={64}
                    height={18}
                  />{" "}
                  (50 Reviews)
                </p>
              </div>
              <div>
                <h6 className="flex items-center gap-[8px] text-xs font-semibold">
                  Review On{" "}
                  <Image
                    src="/assets/icons/yellow_star.svg"
                    alt="yello2 star"
                    width={70}
                    height={32}
                  />
                </h6>
                <p className="flex items-center gap-[16px] text-xs font-normal">
                  {" "}
                  <Image
                    src="/assets/icons/google.png"
                    alt="google icon"
                    width={64}
                    height={18}
                  />{" "}
                  (50 Reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <div>
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
                {clientReview.map((data, index) => (
                  <SwiperSlide
                    key={index}
                    className={`!h-auto !md:h-full relative rounded-[10px] bg-white shadow-custom py-[17px] px-[13px]`}
                  >
                    <div className="">
                      <Image
                        src={data.img}
                        alt="google review"
                        width={118}
                        height={47}
                        className="pb-[5px]"
                      />
                      <Image
                        src={data.review}
                        alt="5 star review"
                        width={110}
                        height={17}
                      />
                      <p className="text-lg font-normal pt-[12px]">
                        "{data.desc}"
                      </p>
                      <p className="text-lg font-bold">"{data.boldDesc}"</p>
                      <div className="flex items-center gap-[3px]">
                        <Image
                          src={data.man}
                          alt="man"
                          width={53}
                          height={53}
                          className="w-[53px] h-[53px] rounded-full"
                        />
                        <div className="pt-[13px]">
                          <h6>{data.name}</h6>
                          <p>{data.location}</p>
                        </div>
                      </div>
                      <Image
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        src={data.quote}
                        alt="quote icon"
                        width={102}
                        height={102}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStories;
