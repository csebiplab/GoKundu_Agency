"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <>
      <div className="hero-section full__section_l_p">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[55px] md:text-[58px] lg:text-[61px] xl:text-[64px] 2xl:text-[67px] 3xl:text-[70px] 4xl:text-[72px] 5xl:text-[75px] font-normal text-left text-[#0C1C3C">
              The <span className="text-primary font-bold">#1</span> Digital Marketing Agency for Startup
              </h1>
              <p className="text-[20px] lg:text-[25px] font-normal mb-4 leading-6 mt-2 text-[#0C1C3C]">
              Digital agencies are strategic and creative marketing agencies focused on user experience, mobile, social, data gathering and analytics apart from providing services.
              </p>
              <input className="input_tag w-full "  placeholder="Enter your Email Address"   type="email" />
              {/* <div className="mb-4 md:mb-0">
                <a
                  href={`tel:(832) 820-4035`}
                  className="text-sm font-bold text-white"
                >
                  <Button className="hero_btn text-black text-xs lg:text-base font-bold capitalize flex items-center gap-x-2">
                    <span className="text-black">Get an Estimate </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                        fill="none"
                      >
                        <path
                          d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Button>
                </a>
              </div> */}
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
            <Image
              width={928}
              height={782}
              src="/assets/gokundu_home/hero_bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
