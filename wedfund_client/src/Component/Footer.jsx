import '../style/Footer.css'
import logo from '../assets/img/completeLogo.png'

function Footer () {

    return(
        <>
            <footer style={{background: 'rgb(244, 235, 235)', marginBottom: '-2rem', marginTop: '8rem'}}>
                <div className="container bottom_footer" style={{ paddingTop: "100px"}}>
                    <img src={logo} className="wedLogo" alt="simple" />
                    <div className="row mt-3 mb-4 pb-5">
                        <div className="col-md-6">
                            <div>
                            </div>
                            <p style={{ color: "#6c0505" }}>We at WedFund understand your business requirement for fast & flexible financing. Our platform can help your business get the funding you need quickly, easily & hassle free</p>
                            <p className="mt-5">Businesses are expecting a surge in sales during the festival season. You can use WedFund to get credit to prepare your business for peak season without having to tie up you own cash.</p>

                            <a className='btn btn-footer' style={{border: '2px solid #6c0505', background: '#6c0505', color: '#fff', fontWeight:'500'}} href='https://www.lendingkart.com/business-loan/sme/Wedfund?lksrc=c3JjPVdlZGZ1bmQmdHlwZT1lY29tJnJlZmlkPVdlZGZ1bmQwMDE' target='_blank'>Apply Now</a>
                        </div>
                        <div className="col-md-4 offset-md-1 careerBottom1">
                            <div className='emailSection mt-4' id='footer'>
                                <p>EMAIL</p>
                                <a href="mailto:team@wed.fund" className='h5Edit' style={{color:'#000', fontSize: '1.25rem', textDecoration: 'none'}}><i className="fa-regular fa-envelope"></i> &nbsp; team@wed.fund</a>
                                <div className='border-career'></div>
                            </div>
                            <div className='phoneSection'>
                                <p>PHONE</p>
                                <h5 className='h5Edit'><i className="fa-solid fa-phone"></i>&nbsp; <span id="contactNo">+91 8595950140, +91 7209957963</span></h5>
                                <div className='border-career'></div>
                            </div>
                            <div className='socialSection'>
                                <p className='mb-4'>Follow Us</p>
                                <h5 className='h5Edit'><a href='https://www.linkedin.com/company/wedfund/' style={{color:'#000'}} target='_blank'><i className="fa-brands fa-linkedin mx-3"></i></a><a href='https://instagram.com/wed.fund?igshid=MzNlNGNkZWQ4Mg==' style={{color:'#000'}} target='_blank'><i className="fa-brands fa-instagram mx-2"></i></a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer