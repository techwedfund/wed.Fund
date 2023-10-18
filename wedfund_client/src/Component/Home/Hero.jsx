import React from 'react';
import './style/Hero.css'
import hero1 from './assets/img/il1 1.png'
import hero2 from './assets/img/hero2.png'
import Collateral from './Collateral';
import HowWorks from './HowWorks';
import WhyWed from './WhyWed';
import Terms from './Terms';
import Document from './Document';
import Lending from './Lending';
import Need from './Need';

function Hero() {
    return(
        <>
        <div className='back-img'>
            <div className='container '>
                <div className="backgrounImg">
                <h1 className='text-center fw-700 heroText' id='heroText'><strong>Ready to Revolutionize</strong></h1>
                <h1 className='text-center heroText' id='weddingHead'>Your Business?</h1>

                <p className='text-center paraHero'>Avail the Power of B2B Financing in your Industry</p>

                </div>
                <div className='text-center mt-5'>
                    <a href="https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE" className='btn btn_Hero' rel="noreferrer noopener" target='_blank'>Apply Now</a>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={hero1} className="img-fluid" id='heroImg1' alt="currency"/>
                    </div>
                    <div className='col-lg-6'>
                        <img src={hero2} className="img-fluid" id='heroImg2' alt="globe"/>
                    </div>
                </div>
            </div>
            <Collateral />
            <HowWorks />
            <WhyWed />
            <Terms />
            <Document />
            <Lending />
            <Need />
            </div>
        </>
    )
}

export default Hero;