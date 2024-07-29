import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaLocationArrow,
  FaMapLocationDot,
  FaPhoneVolume,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import contactImg from "../../../../public/assets/images/contact__us.png";

const GiveUsFeedbackSection = () => {
  return (
    <div className="custom-container padding__top">
      <div className="px-2">
        <div className="grid lg:grid-cols-10 md:grid-cols-7 lg:relative 2xl:py-16 py-10 px-2 md:mx-0">
          {/* contact part */}
          <div className="bg-primary lg:absolute md:col-span-3 md:order-1 flex justify-center items-center left-0 lg:left-[55%] xl:left-[50%] 2xl:left-[45%] 4xl:left-[47%] 4xl:top-[22%] 3xl:top-[18%] 2xl:top-[15%] xl:top-[20%] lg:top-[24%] 2xl:my-16 my-8  border shadow-md rounded-md border-black z-20  ">
            <div className="">
              <div className=" 2xl:py-8 py-5 lg:px-10 px-5">
                <h2 className="text-[28px] md:text-[32px] font-bold text-white md:text-start text-center  ">
                  Contact Us
                </h2>
                <a
                  href="https://maps.app.goo.gl/rh3dXrHssMQMsNH27"
                  className=" flex gap-1 md:gap-2 items-start md:items-center text-center text-sm md:text-base font-normal lg:py-8 py-5 md:justify-start justify-center "
                  target="_blank"
                >
                  <FaMapLocationDot className="2xl:w-5 lg:h-5 w-auto h-auto fill-white" />
                  <span className="text-white">Houston,Texas</span>
                </a>

                <a
                  href="tel:8328204035"
                  className="my-2 flex gap-2 items-center md:justify-start justify-center text-sm md:text-base font-normal "
                >
                  <FaPhoneVolume className="2xl:w-5 lg:h-5 w-auto h-auto fill-white" />
                  <span className="text-white">(832) 820-4035</span>
                </a>

                <a
                  href="mailto:maricela.maldonado@maricelasmagnificence.com"
                  className=" flex gap-2 my-auto items-center text-sm md:text-base font-normal 2xl:py-8 py-5 md:justify-start justify-center "
                >
                  <IoIosMail className=" 2xl:w-5 2xl:h-5 w-auto h-auto fill-white" />
                  <span className="text-white block md:hidden">
                    maricela.maldonado@
                    <br />
                    maricelasmagnificence.com
                  </span>
                  <span className="text-white hidden md:block">
                    maricela.maldonado@maricelasmagnificence.com
                  </span>
                </a>
                <div className=" flex gap-8  text-white md:justify-start justify-center">
                  <FaFacebook className=" 2xl:w-6 2xl:h-6 w-auto h-auto fill-white" />
                  <FaXTwitter className=" 2xl:w-6  2xl:h-6 w-auto h-auto fill-white " />
                  <FaInstagram className="2xl:w-6 2xl:h-6 w-auto h-auto fill-white" />
                  <FaLinkedin className="2xl:w-6 2xl:h-6 w-auto h-auto fill-white" />
                </div>
              </div>
            </div>
          </div>

          {/* form part */}
          <div className=" lg:col-span-6 md:col-span-4 md:order-1  lg:py-30 md:flex items-center 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[150px] 2xl:ml-[100px] xl:ml-[80px] lg:ml-[40px] md:ml-[20px]  ">
            <div className="rounded-lg  lg:col-span-3 items-center">
              <h2 className="lg:mb-8 mb-5 text-[28px] md:text-[32px] font-bold text-[#880769]">
                Give Us Feedback{" "}
              </h2>
              <form className="">
                <div className="text-base">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#880769] text-lg font-normal">
                        Your name *
                      </h5>
                      <label className="sr-only" htmlFor="text">
                        name
                      </label>
                      <input
                        className="w-full  placeholder-primary rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm font-normal" // Added pr-12 class for padding-right
                        placeholder="Robot Fox"
                        type="text"
                        id="text"
                      />
                    </div>

                    <div>
                      <h5 className="mb-2 text-[#880769] text-lg font-normal">
                        Email *
                      </h5>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full  placeholder-primary rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm font-normal"
                        placeholder="info.example@gmail.com"
                        type="email"
                        id="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <h5 className="mb-2 text-[#880769] text-lg font-normal">
                      Subjects *
                    </h5>
                    <label className="sr-only" htmlFor="email">
                      Subjects
                    </label>
                    <input
                      className="w-full placeholder-primary rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm font-normal"
                      placeholder="Subjects "
                      type="text"
                      id="text"
                    />
                  </div>

                  <div>
                    <h5 className="mb-2 text-[#880769] text-lg font-normal">
                      Your Phone *
                    </h5>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full  placeholder-primary rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm font-normal"
                      placeholder="832 820-4035"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <h5 className="mb-2 text-[#880769] text-lg font-normal">
                    Message *
                  </h5>
                  <textarea
                    className="w-full  placeholder-primary rounded-lg bg-[#C477B126] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm font-normal"
                    placeholder="Write Message"
                    rows="6"
                    id="message"
                  ></textarea>
                </div>

                <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                    type="submit"
                    className="rounded-md bg-[#FBCC21E4] px-10 py-4 md:px-20 text-lg font-bold  items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=" ml-2  " />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* image part */}
          <div className="w-full -z-10  xl:col-span-4 lg:col-span-4 lg:order-2 lg:block hidden">
            <Image
              src={contactImg}
              alt="Trusted general contractor"
              width={450}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveUsFeedbackSection;
