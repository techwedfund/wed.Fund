import React from 'react';
import collateral from './assets/img/property-insurance 1.png'
import trade from './assets/img/vbhbn 1.png'
import digital from './assets/img/image 11.png'
import './style/Collateral.css'

function Collateral() {
    return(
        <>
            <div className='container'>
                <div className='collateral-style'>
                <div className='row mx-auto'>
                    <div className='col-xl-4 col-md-6 justify-content-center'>
                        <img src={collateral} className='img-fluid' alt="collateral"/>
                        <p className='collateral-text'>100% Collateral Free</p>
                    </div>
                    <div className='col-xl-4 col-md-6 justify-content-center'>
                        <img src={trade} className='img-fluid' alt="trade"/>
                        <p className='collateral-text'>Lowest Cost on Trade Credit</p>
                    </div>
                    <div className='col-xl-4 col-md-6 justify-content-center'>
                        <img src={digital} className='img-fluid' alt="digital"/>
                        <p className='collateral-text'>Digital & Hassel Free Process</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Collateral;