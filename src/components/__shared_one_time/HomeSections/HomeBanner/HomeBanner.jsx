"use client";
import Image from "next/image";
import "./HomeBanner.css";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const HomeBanner = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <>
      <div className="hero-section full__section_l_p">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-tight xl:leading-snug 5xl:leading-normal text-[55px] md:text-[58px] lg:text-[61px] xl:text-[64px] 2xl:text-[67px] 3xl:text-[70px] 4xl:text-[72px] 5xl:text-[75px] font-normal text-left text-[#0C1C3C">
                The <span className="text-primary font-bold">#1</span> Digital
                Marketing Agency for Startup
              </h1>
              <p className="text-[20px] lg:text-[25px] font-normal mb-4 leading-tight  xl:leading-snug 5xl:leading-normal mt-2 text-[#0C1C3C] pb-[15px] xl:pb-[20px] 5xl:pb-[40px]">
                Digital agencies are strategic and creative marketing agencies
                focused on user experience, mobile, social, data gathering and
                analytics apart from providing services.
              </p>
              <div className="relative flex w-[330px] md:w-[450px] 2xl:w-[600px] 5xl:w-[700px]">
                <Input
                  type="email"
                  label="Enter your Email Address"
                  value={email}
                  onChange={onChange}
                  className="w-full pr-20 py-[25px] rounded-[100px] border-[2px] border-[#C6C8CB] !bg-[#85acfb80] "
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  // size="sm"
                  // color={email ? "gray" : "blue-gray"}
                  // disabled={!email}
                  className="!absolute right-2 top-1.5  rounded-[100px] bg-secondary border-[2px] border-[#2352B0] text-xs font-normal text-white pb-2"
                >
                  Work with Us
                </Button>
              </div>
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
