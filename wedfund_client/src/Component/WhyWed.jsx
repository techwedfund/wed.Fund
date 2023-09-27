import React from 'react';
import '../style/WhyWed.css';
import assurance from '../assets/img/assurance 1.png'
import exercise from '../assets/img/exercise 1.png'
import image_15 from '../assets/img/image 15.png'
import overtime from '../assets/img/overtime 1.png'

function WhyWed() {
    return(
        <>
            <div className='container'>
                <div className='whywed-container'>
                    <h1 className='text-center' style={{background:'#fff'}}><strong>Why <span style={{color:"#6c0505"}}>WedFund</span></strong></h1>
                    <div className='row'>
                        <div className='col-xl-3 col-md-6 mt-5 whywed-align'>
                            <div className='whywed-style'>
                                <div className='wed-img'>
                                <img src={assurance} className='img-fluid mt-3' alt='assurance'/>
                                </div>
                                <p className='wed-text'>Collateral Free Financing</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-6 mt-5 whywed-align'>
                            <div className='whywed-style'>
                            <div className='wed-img'>
                                <img src={exercise} className='img-fluid mt-3' alt='exercise'/>
                                </div>
                                <p className='wed-text'>Competitive Interest Rates</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-6 mt-5 whywed-align'>
                            <div className='whywed-style'>
                            <div className='wed-img'>
                            <img src={image_15} className='img-fluid mt-3' alt='image_15'/>
                            </div>
                                <p className='wed-text'>Assured & Reliable Funding</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-6 mt-5 whywed-align'>
                            <div className='whywed-style'>
                            <div className='wed-img'>
                                <img src={overtime} className='img-fluid mt-3' alt='overtime'/>
                                </div>
                                <p className='wed-text'>Extra Financing for Peak Season</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyWed