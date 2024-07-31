import Image from "next/image";
import React from "react";

import "./ContactUs.css";

const socialIcon = [
  "/assets/icons/facebook.png",
  "/assets/icons/x_icon.png",
  "/assets/icons/instragram.png",
  "/assets/icons/linkedin.png",
];

const ContactUs = () => {
  return (
    <div className="homeSection__bg ">
      <div className="padding__top ">
        <div className="">
          <div className=" full__section_r_p pl-8 md:pl-0 contactUs_bg">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-[30px]">
              <div className="md:col-span-3">
                <div>
                  <Image
                    src="/assets/gokundu_home/Contact Us.png"
                    alt="contact us image"
                    width={701}
                    height={697}
                    className="w-[701px] h-[697px]"
                  />
                </div>
              </div>
              <div className="md:col-span-2 ml-[40px] mr-[40px] md:mr-0 md:-ml-[200px] -mt-[100px] flex items-center">
                <div className="contactUs_cart_bg py-[43px] px-[26px]">
                  <h5 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-center pb-[17px]">
                    Contact Us
                  </h5>
                  <p className="flex items-center gap-[15px] text-lg font-normal">
                    <Image
                      src="/assets/icons/map.png"
                      alt="map icon"
                      width={30}
                      height={30}
                    />
                    13809 Hollow Canyon Lane Rosharon, TX 77583
                  </p>
                  <p className="flex items-center gap-[15px] text-lg xl:text-[20px] font-normal py-[22px]">
                    <Image
                      src="/assets/icons/phone.png"
                      alt="phone icon"
                      width={30}
                      height={30}
                    />
                    +88 01764898569
                  </p>
                  <p className="flex items-center gap-[15px] text-lg xl:text-[20px] font-normal">
                    <Image
                      src="/assets/icons/email_icon.png"
                      alt="email icon"
                      width={30}
                      height={30}
                    />
                    gokundu.com@gmail.com
                  </p>

                  <div className="flex items-center gap-[50px] pt-[29px] pb-[25px]">
                    {socialIcon.map((icon, index) => (
                      <div key={index} className="">
                        <Image
                          src={icon}
                          alt={`social icon ${index}`}
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <h5 className="pb-[12px] text-[25px] md:text-[30px] font-bold">
                    SEO Base Software Agency{" "}
                  </h5>
                  <Image
                    src="/assets/gokundu_home/contactUs_logo.png"
                    alt="contact us logo"
                    width={390}
                    height={80}
                  />
                </div>
              </div>
              <div className="md:col-span-3 mx-[40px] md:mx-0 flex items-center">
                <div>
                  <h5 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-primary">
                    Give Us Feedback
                  </h5>
                  <form className="pt-[25px]">
                    <div className="w-full flex justify-between items-center gap-[20px]">
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-[#393434]"
                          htmlFor="name"
                        >
                          Your Name <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-white placeholder:font-normal"
                          type="text"
                          placeholder="Robot Fox"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-[#393434]"
                          htmlFor="email"
                        >
                          Your Email <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-white placeholder:font-normal"
                          type="email"
                          placeholder="info@example.com"
                        />
                      </div>
                    </div>

                    <div className="w-full flex items-center gap-[20px] py-[25px]">
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-[#393434]"
                          htmlFor="subject"
                        >
                          Subject <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-white placeholder:font-normal"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-[#393434]"
                          htmlFor="phone"
                        >
                          Your Phone <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-white placeholder:font-normal"
                          type="number"
                          placeholder="+88 01764912536"
                        />
                      </div>
                    </div>

                    <div className="w-full pb-[35px]">
                      <label
                        className="text-lg font-normal text-[#393434]"
                        htmlFor="message"
                      >
                        Message <sup>*</sup>
                      </label>
                      <textarea
                        className="w-full input_bg pt-[16px] pb-[30px] pl-[16px] placeholder:text-white placeholder:font-normal"
                        name="message"
                        placeholder="Write Message"
                      ></textarea>
                    </div>
                    <div className="flex justify-center pb-[28px] md:pb-0">
                      <button className="contact_btn text-white flex items-center gap-[5px] text-base font-normal py-[7px] px-[33px]">
                        Submit{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                        >
                          <path
                            d="M15.5303 6.09478C15.8232 5.80189 15.8232 5.32702 15.5303 5.03412L10.7574 0.261152C10.4645 -0.0317411 9.98959 -0.0317411 9.6967 0.261152C9.40381 0.554046 9.40381 1.02892 9.6967 1.32181L13.9393 5.56445L9.6967 9.80709C9.40381 10.1 9.40381 10.5749 9.6967 10.8678C9.98959 11.1606 10.4645 11.1606 10.7574 10.8678L15.5303 6.09478ZM0 6.31445H15V4.81445H0V6.31445Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
