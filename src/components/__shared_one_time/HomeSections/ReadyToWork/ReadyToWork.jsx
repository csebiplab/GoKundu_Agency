import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./ReadyToWork.css"

const ReadyToWork = () => {
    return (
        <div className='homeSection__bg'>
            <div className='full__section_r_p padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/gokundu_home/Ready to Work with Go Kundu.png" alt="Ready to work with GoKundu " width={900} height={600} className='w-[900px] h-[600px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-start justify-center'>
                    <div className='pb-[5px]'>
                        <HeadingIcon text={headingIconText.readyToWork__headingIconText}/>
                    </div>

                    <h3 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] leading-normal font-bold text-secondary text-center md:text-left pb-[10px]">You Are Just One Step Away 
                    <span className='text-primary'> Start Conversation To Go Kundu Your Business</span> </h3>
                    <p className="text-secondary text-lg font-normal text-center md:text-left pb-[25px]">You're just one step away from transforming your business. Start a conversation with Kundu today and unlock new opportunities for growth and success. Our expert team is ready to provide you with personalized solutions, innovative strategies, and the support you need to elevate your business to new heights. Don't wait—take that crucial step towards a brighter future now!</p>
                    <a href='tel:01764-856958'>
                        <button className="readyToWorkBtn text-base font-normal text-white py-[11px] px-[28px]">Get Your Free Estimated</button>
                    </a>
                    <h5 className="text-[30px] font-semibold text-secondary pt-[20px]">or Call Us:<a href='tel:01764-856958'>  <span className='text-primary font-bold'>01764-856958 </span></a></h5>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReadyToWork;