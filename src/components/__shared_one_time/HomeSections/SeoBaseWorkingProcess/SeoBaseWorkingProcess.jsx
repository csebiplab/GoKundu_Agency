import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const seoBaseWorkingDada = [
  {
    id: 1,
    img: "/assets/gokundu_home/sbwp1.png",
    title: "Analysis at Go Kundu",
    desc: "Achieve SEO success by understanding your goals and analyzing your competitors' strengths to dominate the SERPs.",
  },
  {
    id: 2,
    img: "/assets/gokundu_home/sbwp3.png",
    title: "SEO Audit at Go Kundu",
    desc: "Elevate your online visibility with a thorough technical audit tailored to uncover gaps aligned with your target keywords.",
  },
  {
    id: 3,
    img: "/assets/gokundu_home/sbwp5.png",
    title: "Review at Go Kundu",
    desc: "Refine your SEO strategy through rigorous testing and continuous improvement to stay ahead in the digital landscape.",
  },
  {
    id: 4,
    img: "/assets/gokundu_home/sbwp4.png",
    title: "Research at Go Kundu",
    desc: "Unlock the potential of your online presence with meticulous keyword research and advanced rank tracking strategies",
  },
  {
    id: 5,
    img: "/assets/gokundu_home/sbwp5.png",
    title: "Optimize at Go Kundu",
    desc: "Maximize your website's potential by fine-tuning On-Page and Off-Page SEO features for optimal performance and visibility.",
  },
];


const SeoBaseWorkingProcess = () => {
  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
        <div className="flex flex-col items-center">
          <HeadingIcon
            text={headingIconText.seoBasedWorkingProcess__headingIconText}
          />
          <h3 className="text-center text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-secondary pt-[5px] leading-normal">
            Go Kundu's Proven{" "}
            <span className="text-primary">SEO Process for Success</span>
          </h3>
          <p className="text-center text-lg font-normal text-secondary pt-[10px] md:pt-[15px] lg:pt-[17px] xl:pt-[20px] 5xl:pt-[25px]">
            At Go Kundu, our proven SEO process is tailored to drive your
            business's success. We start with a comprehensive site audit,
            followed by extensive keyword research and on-page optimization to
            enhance your online visibility. Our technical experts address key
            performance issues, while our content strategy and ethical
            link-building practices establish your authority and drive relevant
            traffic. We continuously monitor performance and provide regular
            reports, ensuring sustained growth and maximum ROI.
          </p>
        </div>

        {/* large device  */}
        <div className="hidden md:block">
            <Image src="/assets/gokundu_home/seo_base_working_process.png" alt="seo base working process" width={1550} height={700} />
        </div>
        {/* small device  */}
        <div className="block md:hidden flex flex-col ">
            {
                seoBaseWorkingDada.map((data)=>{
                    return <div key={data.id} className="border-4 border-primary my-[20px] py-[35px] px-[30px] rounded-[12px]">
                        <Image src={data.img} alt="seo base working process" width={90} height={90} className="w-[90px] h-[90px] mx-auto"/>
                        <h5 className="text-[25px] font-bold text-black text-center py-[5px]">{data.title}</h5>
                        <p className="text-center text-base text-secondary font-normal">{data.desc}</p>
                    </div>
                })
            }
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-[80px]">
          {seoBaseWorkingDada.map((data) => {
            return (
              <div
                key={data.id}
                className="w-[300px] h-[300px] border-4 border-primary rounded-[20px] rotate-45 flex flex-col justify-center items-start"
              >
                <Image
                  src={data.img}
                  alt="seo base working process image"
                  width={90}
                  height={90}
                  className="h-[90px] w-[90px] -rotate-45 pl-7 ml-5"
                />
                <h5 className="text-secondary text-[25px] font-bold text-center -rotate-45 -mt-[20px] pb-5">
                  {data.title}
                </h5>
                <p className="text-base font-normal text-center text-secondary -rotate-45 pl-20">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div> */}
        
      </div>
    </div>
  );
};

export default SeoBaseWorkingProcess;
