import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const aboutUsdata1 = [
  {
    id: 1,
    img: "/assets/gokundu_home/about1.png",
    number: "150",
    desc: "We Have Completed",
  },
  {
    id: 2,
    img: "/assets/gokundu_home/about2.png",
    number: 98,
    desc: "Customer Satisfaction",
  },
  {
    id: 3,
    img: "/assets/gokundu_home/about3.png",
    number: "25+",
    desc: "Skilled Experts",
  },
  {
    id: 4,
    img: "/assets/gokundu_home/about4.png",
    number: "500+",
    desc: "Media Posts",
  },
];
const aboutUsdata2 = [
  {
    id: 1,
    img: "/assets/gokundu_home/about5.png",
    title: "Expertise and Innovation",
    desc: "We pride ourselves staying at the front of innovation, constantly pushingboundaries a redefining what is possible.",
  },
  {
    id: 2,
    img: "/assets/gokundu_home/about6.png",
    title: "Transparent Process",
    desc: "Our transparent process is designed to demystify the journey from concept to delivery.",
  },
  {
    id: 3,
    img: "/assets/gokundu_home/about7.png",
    title: "Client-Centric Approach",
    desc:
      "Our dedicated team takes the time to listen, & collaborate, ensuring that every interaction a step towards your success.",
  },
  {
    id: 4,
    img: "/assets/gokundu_home/about8.png",
    title: "Cost-Effective",
    desc:
      "Our commitment to providing cost-effective solutions is ingrained in our mission.",
  },
];

const AboutUs = () => {
  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-[20px]">
          <div className="md:col-span-3">
            <div>
              <Image
                src="/assets/gokundu_home/ABOUT US.png"
                alt="about use image"
                width={550}
                height={405}
                className="w-[550px] h-[405px]"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <HeadingIcon text={headingIconText.aboutUs__headingIconText} />
            <h3 className="text-[34px] md:text-[35px] lg:text-[36px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] leading-normal font-bold text-secondary text-left">
              Best For Your Start-Up{" "}
              <span className="text-primary">Creative Agency</span>
            </h3>
            <p className="text-lg font-normal text-black text-left pt-[15px]">
              Our action plan is focused and planned. We are result oriented
              organization and are committed to invest in initiatives for newer
              expanded customer relationship. We always strive to enhance
              productivity and improve. We are a Startup agency working with
              young talents on delivering unique ideas and creative work.
            </p>
          </div>
          <div className="md:col-span-2">
            <div>
              {aboutUsdata1.map((data) => {
                return (
                  <div className="flex items-start gap-[26px]" key={data.id}>
                    <Image
                      src={data.img}
                      alt="about us image"
                      width={54}
                      height={54}
                    />
                    <div className="pb-[25px]">
                      <h5 className="text-primary text-[42px] font-extrabold pb-[9px]">
                        {data.number}
                      </h5>
                      <p className="text-[#3F444B] text-[15px] font-medium pb-[20px]">
                        {data.desc}
                      </p>
                      <p className="border border-primary " />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[50px] pt-[45px] pr-[40px] md:pr-0 ">
          {aboutUsdata2.map((data) => (
            <div key={data.id}>
              <Image
                src={data.img}
                alt="about us image"
                width={70}
                height={70}
              />
              <h5 className="text-[25px] font-bold text-secondary text-left py-[29px]">{data.title}</h5>
              <p className="text-base font-normal text-[#3F444B] text-left">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
