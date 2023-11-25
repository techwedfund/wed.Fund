import lending from './assets/img/Lending.jpg'
import fibe from './assets/img/unnamed(43).png'
import './style/Lending.css'

function Lending () {
    return(
        <>
            <div className='container lendingPartners'>
                <div className='row'>
                    <h1 className='text-center mb-3 lending-text' style={{background:''}}>Our <span style={{color:'#6c0505'}}> Lending Partners</span></h1>
                    <div className='col-lg-12 lndingItems'>
                    <div className='col-md-4 m-auto'>
                        <img src={lending} className='img img-fluid imgHeight' alt='lendingPartner' />
                        <div className="linkEdit">
                            <a href='https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE' className='linkButton btn text-center' rel="noreferrer noopener" target='_blank'>Contact Lending Partner</a>
                        </div>
                    </div>
                    <div className='col-md-4 m-auto'>
                        <img src={fibe} className='img img-fluid imgHeight' alt='lendingPartner' />
                        <div className="linkEdit">
                            <a href='https://portal.fibe.in/co-branded?utm_source=Wedfund' className='linkButton btn text-center' rel="noreferrer noopener" target='_blank'>Contact Lending Partner</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lending;