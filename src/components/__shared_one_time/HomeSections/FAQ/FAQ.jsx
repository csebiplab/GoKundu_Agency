"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
const faqQuestionsNAns = [
  {
    id: 1,
    question:
      " What services does Go Kundu offer?",
    answer:
      "Go Kundu offers a wide range of services including UI/UX design, web development, software development, graphic and branding design, and SEO optimization."
  },
  {
    id: 2,
    question:
      "How should we evaluate SEO Go Kundu",
    answer:
      "Go Kundu offers a wide range of services including UI/UX design, web development, software development, graphic and branding design, and SEO optimization."
  },
  {
    id: 3,
    question:
      "Do you offer post-launch support?",
    answer:
      "Go Kundu offers a wide range of services including UI/UX design, web development, software development, graphic and branding design, and SEO optimization."
  },
  {
    id: 4,
    question:
      "How can I request support for an issue?",
    answer:
      "Go Kundu offers a wide range of services including UI/UX design, web development, software development, graphic and branding design, and SEO optimization."
  },
  {
    id: 5,
    question:
      "How do you determine the cost of a project?",
    answer:
      "Go Kundu offers a wide range of services including UI/UX design, web development, software development, graphic and branding design, and SEO optimization."
  },
  {
    id: 6,
    question:
      "Why is SEO important for my business?",
    answer:
      "Go Kundu offers a wide range of services including UI/UX design, web development, software development, graphic and branding design, and SEO optimization."
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="homeSection__bg">
      <div className="container padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="order-2 md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/gokundu_home/FAQ.png"
                width={900}
                height={732}
                alt="faq  image"
                className="w-[900px] h-auto"
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start">
              <div>
              <HeadingIcon text={headingIconText.faq__headingIconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center pb-2">
                Frequently Asked Questions At <br /> <span className="text-primary">Go Kundu</span>
                
                </h3>
              </div>
            </div>
            <>
              {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
                <Accordion
                  key={id}
                  open={open === id}
                  className="mb-1 text-white bg-primary"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className=" relative"
                  >
                    <div
                      className={`text-white  border-b-0 transition-colors px-5`}
                    >
                      <span className="text-white text-base font-bold">
                        {question}
                      </span>
                    </div>
                    <div className="absolute right-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M7.85438 8.80353L0.908939 1.3452C0.432523 0.833597 0.795322 -9.06148e-07 1.4944 -8.7698e-07L14.5803 -3.30987e-07C15.2793 -3.01819e-07 15.6421 0.833599 15.1657 1.3452L8.22029 8.80353C8.12142 8.9097 7.95324 8.9097 7.85438 8.80353Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="px-3 py-1 text-base font-normal bg-white text-black">
                    {answer}
                  </AccordionBody>
                </Accordion>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
