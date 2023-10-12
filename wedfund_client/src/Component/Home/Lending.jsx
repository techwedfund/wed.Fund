import lending from './assets/img/Lending.jpg'
import './style/Lending.css'

function Lending () {
    return(
        <>
            <div className='container lendingPartners'>
                <div className='row'>
                    <h1 className='text-center mb-3 lending-text' style={{background:'#fff'}}>Our <span style={{color:'#6c0505'}}> Lending Partner</span></h1>
                    <div className='col-md-4 m-auto'>
                        <img src={lending} className='img img-fluid' alt='lendingPartner' />
                        <div className="linkEdit">
                            <a href='https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE' className='linkButton btn text-center' rel="noreferrer noopener" target='_blank'>Contact Lending Partner</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lending;