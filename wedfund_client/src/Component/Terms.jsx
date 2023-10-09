import fyghj from '../assets/img/fyghj 1.png'
import jhbjk from '../assets/img/jhbjk 1.png'
import uygu from '../assets/img/uygu 1.png'
import guj from '../assets/img/guj 1.png'
import '../style/Terms.css'

function Terms () {
    return(
        <>
        <div className='terms-bg'>
            <div className='container'>
                <div className='terms-container'>
                    <h1 className='text-center'><strong style={{background:'#fff'}}>Terms <span style={{color:"#6c0505"}}>we offer</span></strong></h1>
                    <div className='row'>
                        <div className='col-xl-3 col-md-6 mt-5 terms-align'>
                            <div className='terms-style'>
                                <div id='terms-img1'>
                                <img src={fyghj} className='img-fluid mt-3 terms-imgWidth' id='terms-imgWidth1' alt='assurance'/>
                                </div>
                                <p className='terms-text' style={{background:'#fff'}}>Loan Amount : <span style={{color: '#6c0505'}}> ₹1 lakh- ₹35 lakhs</span></p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-6 mt-5 terms-align'>
                            <div className='terms-style'>
                            <div id='terms-img2'>
                                <img src={jhbjk} className='img-fluid mt-3 terms-imgWidth' alt='exercise'/>
                                </div>
                                <p className='terms-text' style={{background:'#fff'}}>Interest Rates** : <span style={{color: '#6c0505'}}> 1.5% - 2.5% per month</span></p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-6 mt-5 terms-align'>
                            <div className='terms-style'>
                            <div id='terms-img3'>
                            <img src={uygu} className='img-fluid mt-3 terms-imgWidth' alt='image_15'/>
                            </div>
                                <p className='terms-text' style={{background:'#fff'}}>Loan Tenure : <span style={{color: '#6c0505'}}> 1 year - 3 years</span></p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-6 mt-5 terms-align'>
                            <div className='terms-style'>
                            <div id='terms-img4'>
                                <img src={guj} className='img-fluid mt-3 terms-imgWidth' alt='overtime'/>
                                </div>
                                <p className='terms-text' style={{background:'#fff'}}>Pre Closure Fee *** : <span style={{color: '#6c0505'}}> ₹ 0/-</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-md-6 terms-detail'>*Preclosures are only allowed after first EMI is payed in full.</div>
                    <div className='col-xl-4 col-md-6 terms-detail'>** Based on the health of your business, revenues and annual turnover.</div>
                    <div className='col-xl-4 col-md-6 terms-detail'>*** Preclosure charges maybe applicable on case-to-case basis.</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Terms