import React from "react";

import "./footer.css";
import Image from "next/image";

const socialIcon = [
  "/assets/footer/f.png",
  "/assets/footer/x.png",
  "/assets/footer/i.png",
  "/assets/footer/l.png",
  "/assets/footer/g.png",
];

const Footer = () => {
  return (
    <div>
      <div className="container footer__bg text-white pb-[41px] md:pb-[100px]">
        <div className="flex justify-center items-center pt-[46px] pb-[15px] gap-[40px] lg:gap-[50px] 5xl:gap-[67px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="707"
            height="19"
            viewBox="0 0 707 19"
            fill="none"
          >
            <path
              d="M706.66 9.56445L698 0.904199L689.34 9.56445L698 18.2247L706.66 9.56445ZM0 11.0645L698 11.0645V8.06445L0 8.06445L0 11.0645Z"
              fill="#7BB344"
            />
          </svg>
          <Image
            src="/assets/footer/footer__logo.png"
            alt="footer logo"
            width={390}
            height={80}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="707"
            height="19"
            viewBox="0 0 707 19"
            fill="none"
          >
            <path
              d="M0.339722 9.56445L9 18.2247L17.6602 9.56445L9 0.904199L0.339722 9.56445ZM707 8.06445L9 8.06445V11.0645L707 11.0645V8.06445Z"
              fill="#7BB344"
            />
          </svg>
        </div>

        <p className="text-white text-center">
          At GO Kundu Software Agency, our mission is clear to deliver
          exceptional software solutions that drive results. We pride ourselves
          on our strategic planning unwavering focus, and commitment to
          excellence.
        </p>

        <div className="flex gap-10 justify-center items-center py-[25px]">
          {socialIcon.map((icon, i) => {
            return (
              <Image
                key={i}
                src={icon}
                alt="social icon"
                width={26}
                height={26}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-[60px] lg:gap-[70px] xl:gap-[80px] 3xl:gap-[90px] 5xl:gap-[100px]">
          {/* Our Services  */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h5 className="text-[20px] 5xl:text-[25px] font-bold pb-[25px]">
              Our Services{" "}
            </h5>
            <ul className="text-base 5xl:text-lg  flex flex-col items-center md:items-start">
              <li>{">>"} Website Design & Development</li>
              <li className="py-[32px]">{">>"} custom Web Applications</li>
              <li>{">>"} UI/UX Design</li>
              <li className="py-[32px]">{">>"} Content Management Systems</li>
              <li>{">>"} Management Software</li>
              <li className="pt-[32px]">{">>"} Graphic & Branding</li>
            </ul>
          </div>
          {/* Quick Link  */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h5 className="text-[20px] 5xl:text-[25px] font-bold pb-[25px]">
              Quick Link{" "}
            </h5>
            <ul className="text-base 5xl:text-lg flex flex-col items-center md:items-start">
              <li>{">>"} Services</li>
              <li className="py-[32px]">{">>"} FAQ</li>
              <li>{">>"} Blog</li>
              <li className="pt-[32px]">{">>"} Contact Us</li>
            </ul>
          </div>
          {/* Our Approach  */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h5 className="text-[20px] 5xl:text-[25px] font-bold pb-[25px]">
              Our Approach{" "}
            </h5>
            <ul className="text-base 5xl:text-lg  flex flex-col items-center md:items-start">
              <li>{">>"} Discovery & Consultation</li>
              <li className="py-[32px]">{">>"} Planning and Strategy</li>
              <li>{">>"} Design & Development</li>
              <li className="pt-[32px]">{">>"} Quality Assurance</li>
            </ul>
          </div>
          {/* Contact Us  */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h5 className="text-[20px] 5xl:text-[25px] font-bold pb-[25px]">
              Contact Us{" "}
            </h5>
            <p className="text-base text-center md:text-left 5xl:text-lg">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <div className="flex justify-center md:justify-start items-center gap-[16px] lg:gap-[18px] 2xl:gap-[20px] 5xl:gap-[25px] pt-[24px]">
              <Image
                src="/assets/footer/clock.png"
                alt="clock icon"
                width={36}
                height={36}
              />
              <ul >
                <li className="text-base 5x:text-lg font-bold">
                  Opening Hours:
                </li>
                <li className="text-base 5xl:text-lg font-normal">
                  Mon - Sat: 10.00 AM - 4.00 PM
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-[16px] lg:gap-[18px] 2xl:gap-[20px] 5xl:gap-[25px] pt-[20px]">
              <Image
                src="/assets/footer/phone.png"
                alt="phone icon"
                width={36}
                height={36}
              />
              <ul>
                <li className="text-base 5xl:text-lg font-bold">
                  Phone Call:
                </li>
                <li className="text-base 5xl:text-lg font-normal">
                  <a href="tel:+1 (405) 586-4112" className="text-white">
                  +1 (405) 586-4112
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="block md:hidden flex flex-col items-center">
            <p className="w-full h-[2px] bg-white "/>
          <p className="text-base 2xl:text-lg font-bold pt-[35px]">
            © All Copyright 2024 by GO KUNDU
          </p>
          <p className="text-base 2xl:text-lg font-bold pt-[15px]">
            Terms & Condition <span className="pl-10">Privacy Policy</span>
          </p>
          </div>
        </div>
      </div>
      {/* footer bootom  */}
      <div className="">
        <div className="container footer_bottom_bg flex items-center justify-between text-white py-[18px[">
          <p className="w-full md:w-auto flex items-center justify-center gap-1 md:gap-3 text-xs md:text-base 2xl:text-lg font-medium md:font-bold">
            WEBSITE DESIGN AND SEO BY :-{" "}
            <Image
              src="/assets/footer/footer_bottom_logo_icon.png"
              alt="footer bottom logo icon"
              width={141}
              height={36}
            />
          </p>
          <p className="text-base 2xl:text-lg font-bold hidden md:block">
            © All Copyright 2024 by GO KUNDU
          </p>
          <p className="text-base 2xl:text-lg font-bold hidden md:block">
            Terms & Condition <span className="pl-10">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
