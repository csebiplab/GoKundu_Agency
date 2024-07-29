import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

import "./WhatWeDo.css";

const whatWeDoData = [
  {
    id: 1,
    img: "/assets/what_we_do/wwd1.png",
    title: "Website Design & Development",
    desc: "Create a stunning website to attract more customers, boost your brand's visibility, and take your business to new heights.",
  },
  {
    id: 2,
    img: "/assets/what_we_do/wwd2.png",
    title: "Custom Web Applications",
    desc: "Custom web applications are tailored software solutions designed to meet the specific needs of a business or individual.",
  },
  {
    id: 3,
    img: "/assets/what_we_do/wwd3.png",
    title: "UI/UX Design",
    desc: "UI/UX design is a critical aspect of creating engaging and effective digital products. UI, or User Interface design, focuses on the look and feel of a product",
  },
  {
    id: 4,
    img: "/assets/what_we_do/wwd4.png",
    title: "Content Management Systems",
    desc: "Content Management Systems (CMS) are powerful tools that enable users to create, manage, and modify digital content without needing.",
  },
  {
    id: 5,
    img: "/assets/what_we_do/wwd5.png",
    title: "Management Software",
    desc: "Management software is designed to streamline and automate various business processes, enhancing efficiency and productivity across.",
  },
  {
    id: 6,
    img: "/assets/what_we_do/wwd6.png",
    title: "Graphic Design & Branding",
    desc: "Graphic design and branding are pivotal elements in establishing and maintaining a strong, recognizable presence in the market.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
        <div className="flex justify-center">
          <HeadingIcon text={headingIconText.whatWeDo__headingIconText} />
        </div>
        <h3 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] leading-normal font-bold text-center text-secondary">
          Offering Latest Services
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[15px] pt-[25px] ">
          {whatWeDoData.map((data) => {
            return (
              <div
                key={data.id}
                className="group bg_style py-[43px] hover:bg-primary"
              >
                <Image
                  src={data.img}
                  alt="what we do image"
                  width={77}
                  height={77}
                  className="w-[77px] h-[77px] mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert"
                />

                <h5 className="group-hover:text-white text-center font-bold text-[25px] text-primary px-[10px] md:px-[15px] 2xl:px-[35px] py-[15px]">
                  {data.title}
                </h5>


                <p className="group-hover:text-white text-lg font-normal text-black text-center px-[10px] md:px-[15px] 2xl:px-[48px] pb-[25px]">
                  {data.desc}
                </p>
                <button className="group-hover:text-white w-full mx-auto flex justify-center items-center gap-[6px] text-base font-bold text-[#150E0E]">
                  View Details
                  <svg
                    className="group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <path
                      d="M8.97064 10.4991C9.2463 10.5154 9.48292 10.305 9.49914 10.0294L9.76339 5.53713C9.7796 5.26146 9.56928 5.02484 9.29361 5.00863C9.01794 4.99241 8.78133 5.20274 8.76511 5.4784L8.53022 9.4715L4.53713 9.23661C4.26146 9.2204 4.02484 9.43072 4.00863 9.70639C3.99241 9.98205 4.20274 10.2187 4.4784 10.2349L8.97064 10.4991ZM0.626295 1.33218L8.62629 10.3322L9.3737 9.66782L1.3737 0.667818L0.626295 1.33218Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
