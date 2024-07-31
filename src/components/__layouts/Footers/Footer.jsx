import React from "react";

import "./footer.css";
import Image from "next/image";

const socialIcon = [
  "/assets/footer/f.png",
  "/assets/footer/x.png",
  "/assets/footer/i.png",
  "/assets/footer/l.png",
  "/assets/footer/g.png",
]

const Footer = () => {
  return (
    <div>
      <div className="container footer__bg text-white pb-[100px]">
        <div className="flex justify-center items-center pt-[46px] pb-[15px]">
           <Image src="/assets/footer/footer__logo.png" alt="footer logo" width={390} height={80}/>
        </div>
        
        <p className="text-white text-center">
          At GO Kundu Software Agency, our mission is clear to deliver
          exceptional software solutions that drive results. We pride ourselves
          on our strategic planning unwavering focus, and commitment to
          excellence.
        </p>

        <div className="flex gap-10 justify-center items-center py-[25px]">
          {
            socialIcon.map((icon, i)=>{
              return <Image key={i} src={icon} alt="social icon" width={26} height={26}/>
            })
          }
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
        {/* Our Services  */}
          <div>
            <h5>Our Services </h5>
            <ul>
              <li>{'>>'} Website Design & Development</li>
              <li>{'>>'} custom Web Applications</li>
              <li>{'>>'} UI/UX Design</li>
              <li>{'>>'} Content Management Systems</li>
              <li>{'>>'} Management Software</li>
              <li>{'>>'} Graphic & Branding</li>
            </ul>
          </div>
          {/* Quick Link  */}
          <div>
            <h5>Quick Link </h5>
            <ul>
              <li>{'>>'} Services</li>
              <li>{'>>'} FAQ</li>
              <li>{'>>'} Blog</li>
              <li>{'>>'} Contact Us</li>
            </ul>
          </div>
          {/* Our Approach  */}
          <div>
            <h5>Our Approach </h5>
            <ul>
              <li>{'>>'} Discovery & Consultation</li>
              <li>{'>>'} Planning and Strategy</li>
              <li>{'>>'} Design & Development</li>
              <li>{'>>'} Quality Assurance</li>
            </ul>
          </div>
          {/* Contact Us  */}
          <div>
            <h5>Contact Us </h5>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <div className="flex items-center gap-[25px]">
              <Image src="/assets/footer/clock.png" alt="clock icon" width={36} height={36}/>
              <ul>
                <li className="text-sm 5x:text-lg font-bold">Opening Hours:</li>
                <li className="text-sm 5xl:text-lg font-normal">Mon - Sat: 10.00 AM - 4.00 PM</li>
              </ul>
            </div>
            <div className="flex items-center gap-[25px]">
              <Image src="/assets/footer/phone.png" alt="phone icon" width={36} height={36}/>
              <ul>
                <li className="text-sm 5xl:text-lg font-bold">Phone Call:</li>
                <li className="text-sm 5xl:text-lg font-normal">208-6666-0112, 308-5555-0113</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer bootom  */}
      <div className="">
      <div className="container footer_bottom_bg flex items-center justify-between text-white">
        <p className="flex items-center gap-3">WEBSITE DESIGN AND SEO BY :- <Image src="/assets/footer/footer_bottom_logo_icon.png" alt="footer bottom logo icon" width={141} height={36}/></p>
        <p>© All Copyright 2024 by GO KUNDU</p>
        <p>Terms & Condition <span className="pl-10">Privacy Policy</span></p>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
