"use client"
import React, { useState } from "react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./Portfolio.css";

const portfolioData = [
  {
    id: 1,
    img: "/assets/portfolio/ui_ux.png",
    title: "UI/UX",
  },
  {
    id: 2,
    img: "/assets/portfolio/web.png",
    title: "Web Development",
  },
  {
    id: 3,
    img: "/assets/portfolio/software.png",
    title: "Software",
  },
  {
    id: 4,
    img: "/assets/portfolio/graphic.png",
    title: "Graphic & Branding",
  },
  {
    id: 5,
    img: "/assets/portfolio/seo.png",
    title: "SEO",
  },
];



const portfolioAllData = [

{
    id : 1,
    title : "UI/UX",
    img : "/assets/portfolio/ui1.png",
},
{
    id : 2,
    title : "UI/UX",
    img : "/assets/portfolio/ui2.png",
},
{
    id : 3,
    title : "UI/UX",
    img : "/assets/portfolio/ui3.png",
},
{
    id : 4,
    title : "UI/UX",
    img : "/assets/portfolio/ui4.png",
},
{
    id : 5,
    title : "Web Development",
    img : "/assets/portfolio/ui3.png",
},
{
    id : 6,
    title : "Web Development",
    img : "/assets/portfolio/ui4.png",
},
{
    id : 7,
    title : "Web Development",
    img : "/assets/portfolio/ui1.png",
},
{
    id : 8,
    title : "Web Development",
    img : "/assets/portfolio/ui2.png",
},
{
    id : 9,
    title : "Software",
    img : "/assets/portfolio/ui2.png",
},
{
    id : 10,
    title : "Software",
    img : "/assets/portfolio/ui3.png",
},
{
    id : 11,
    title : "Software",
    img : "/assets/portfolio/ui4.png",
},
{
    id : 12,
    title : "Software",
    img : "/assets/portfolio/ui1.png",
},
{
    id : 13,
    title : "Graphic & Branding",
    img : "/assets/portfolio/ui4.png",
},
{
    id : 14,
    title : "Graphic & Branding",
    img : "/assets/portfolio/ui1.png",
},
{
    id : 15,
    title : "Graphic & Branding",
    img : "/assets/portfolio/ui2.png",
},
{
    id : 16,
    title : "Graphic & Branding",
    img : "/assets/portfolio/ui3.png",
},
{
    id : 17,
    title : "SEO",
    img : "/assets/portfolio/ui1.png",
},
{
    id : 18,
    title : "SEO",
    img : "/assets/portfolio/ui4.png",
},
{
    id : 19,
    title : "SEO",
    img : "/assets/portfolio/ui3.png",
},
{
    id : 20,
    title : "SEO",
    img : "/assets/portfolio/ui2.png",
}
];

const Portfolio = () => {
    const [data, setData] = useState("UI/UX")

    const portfolioFilterData = portfolioAllData.filter((info)=> info.title === data)
    // console.log(portfolioFilterData)
  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
        <div className="flex flex-col items-center">
          <HeadingIcon text={headingIconText.portfolio__headingIconText} />
          <h3 className="text-center text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-secondary pt-[5px] leading-normal">
            At Go Kundu <span className="text-primary">Our Latest Work</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 pt-[25px]">
          <div className="md:col-span-1 border-[6px] rounded-l-[16px] border-primary">
            {portfolioData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="group hover:bg-primary hover:cursor-pointer border-b-[6px] border-primary py-[25px] px-[6px]" onClick={()=>setData(data.title)}
                >
                  <Image
                    src={data.img}
                    alt="portfolio image"
                    width={89}
                    height={89}
                    className="w-[89] h-[89] mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                  <h5 className="group-hover:text-white text-center text-primary text-[25px]">
                    {data.title}
                  </h5>
                </div>
              );
            })}
          </div>

          <div className="md:col-span-4 border-[6px] rounded-r-[16px] border-primary px-[34px] py-[63px]">
            <div className="grid grid-cols-2 gap-[27px]">
            
              {portfolioFilterData.map((data, index) => {
                return (
                  <div key={index} className="">
                    <Image
                      src={data.img}
                      alt="ui/ux image"
                      width={480}
                      height={296}
                    />
                  </div>
                );
              })}

              
            </div>
            <div className="w-full flex justify-center pt-[55px]">
                <button className="portfolio_btn text-base text-white font-normal flex items-center justify-center gap-[10px] py-[7px] px-[23px]">
                  See More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                  >
                    <path
                      d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM0 6.75H15V5.25H0V6.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
