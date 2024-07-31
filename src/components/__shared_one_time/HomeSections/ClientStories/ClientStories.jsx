import React from "react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

import "./ClientStories.css";


const clientReview = [
  {
    id : 1,
    img : "/assets/icons/review_google.png",
    review : "/assets/icons/yellow_star.svg",
    desc : "Go Kundu helped us transform our business operations with their innovative solutions. The team's dedication and expertise were evident from the start, and their support throughout the project was outstanding",
    boldDesc : "Thank you, Go Kundu!",
    man : "/assets/icons/man.png",
    name : "John D.",
    location : "Local Guide",
    quote : "/assets/icons/quote.png"
  }
]

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

            <div className="flex items-center justify-center gap-[30px]">
              <div>
                <h6 className="flex items-center gap-[8px]">
                  Review On{" "}
                  <Image
                    src="/assets/icons/red_star.svg"
                    alt="red star"
                    width={70}
                    height={32}
                  />
                </h6>
                <p className="flex items-center gap-[16px]">
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
                <h6 className="flex items-center gap-[8px]">
                  Review On{" "}
                  <Image
                    src="/assets/icons/yellow_star.svg"
                    alt="yello2 star"
                    width={70}
                    height={32}
                  />
                </h6>
                <p className="flex items-center gap-[16px]">
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
          <div className="md:col-span-3">
            <div>
              {
                clientReview.map((data)=>{
                  return <div key={data.id} className="relative rounded-[10px] bg-white shadow-custom py-[17px] px-[13px]" >
                    <Image src={data.img} alt="google review" width={118} height={47} className="pb-[5px]"/>
                    <Image src={data.review} alt="5 star review" width={110} height={17}/>
                    <p className="text-lg font-normal pt-[12px]">"{data.desc}"</p>
                    <p className="text-lg font-bold">"{data.boldDesc}"</p>
                    <div className="flex items-center gap-[3px]">
                    <Image src={data.man} alt="man" width={53} height={53} className="w-[53px] h-[53px] rounded-full"/>
                    <div className="pt-[13px]">
                      <h6>{data.name}</h6>
                      <p>{data.location}</p>
                    </div>
                    </div>
                    <Image className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src={data.quote} alt="quote icon" width={102} height={102}/>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStories;
