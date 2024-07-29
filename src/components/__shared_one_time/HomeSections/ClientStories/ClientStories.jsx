import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const ClientStories = () => {
    return (
        <div className='homeSection__bg'>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-[50px]'>
                    <div className="md:col-span-2">
                        <div className='flex justify-center md:justify-start'>
                        <HeadingIcon text={headingIconText.clientStories__headingIconText}/>
                        </div>
                    
                    <h3 className='text-center md:text-left text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-secondary pt-[5px]'>Go Kundu's  <span className='text-primary'>Happy Client Stories</span></h3>
                    <p className='text-center md:text-left text-lg font-normal text-secondary pt-[10px] md:pt-[15px] lg:pt-[17px] xl:pt-[20px] 5xl:pt-[25px]'>Our clients' voices resonate with confidence and satisfaction, reflecting the profound impact of our tailored solutions. At Go Kundu, our clients are more than just partners; they are the heart of our success story. Their experiences and triumphs drive us to innovate.</p>
                    
                    <div className='flex items-center gap-[30px]'>
                    <div>
                        <h6 className="flex items-center gap-[8px]">Review On <Image src="/assets/icons/red_star.png" alt="red star" width={12} height={12}/></h6>
                        <p className="flex items-center gap-[16px]"> <Image src="/assets/icons/clutch.png" alt="clutch icon" width={64} height={18}/> (50 Reviews)</p>
                        
                    </div>
                    <div>
                        <h6 className="flex items-center gap-[8px]">Review On <Image src="/assets/icons/yellow_star.png" alt="yello2 star" width={12} height={12}/></h6>
                        <p className="flex items-center gap-[16px]"> <Image src="/assets/icons/google.png" alt="google icon" width={64} height={18}/> (50 Reviews)</p>
                        
                    </div>
                    </div>
                    </div>
                    <div className="md:col-span-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientStories;