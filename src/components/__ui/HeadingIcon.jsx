import Image from 'next/image';
import React from 'react';

const HeadingIcon = ({text="empty text"}) => {
    return (
        <div className='flex gap-2 items-center'>
            <Image src="/assets/gokundu_home/heading_icon.png" width={20} height={20} alt='heading icon'/>
            <p className="text-base">{text}</p>
        </div>
    );
};

export default HeadingIcon;