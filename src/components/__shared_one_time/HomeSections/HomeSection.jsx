import React from 'react';
import "./HomeSection.css"
import HomeBanner from './HomeBanner/HomeBanner';
import ReadyToWork from './ReadyToWork/ReadyToWork';
import FAQ from './FAQ/FAQ';
import WhereWeWork from './WhereWeWork/WhereWeWork';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import AboutUs from './AboutUs/AboutUs';
import Approach from './Approach/Approach';
import Portfolio from './Portfolio/Portfolio';
import SeoBaseWorkingProcess from './SeoBaseWorkingProcess/SeoBaseWorkingProcess';
import ClientStories from './ClientStories/ClientStories';
import Brand from './Brand/Brand';
import ContactUs from './ContactUs/ContactUs';

const HomeSection = () => {
    return (
        <div>

            <section>
                <HomeBanner/>
            </section>

            <section>
                <Brand/>
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <WhatWeDo/>
            </section>

            <section>
                <Approach/>
            </section>

            <section>
                <Portfolio/>
            </section>

            <section>
                <SeoBaseWorkingProcess/>
            </section>

            <section>
                <ClientStories/>
            </section>

            <section>
                <WhereWeWork/>
            </section>

            <section>
                <ReadyToWork/>
            </section>

            <section>
                <FAQ/>
            </section>

            <section>
                <ContactUs/>
            </section>
            
        </div>
    );
};

export default HomeSection;