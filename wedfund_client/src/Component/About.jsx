import Rect from '../assets/img/Rectangle 11.png';
import '../style/About.css'
import { Link } from 'react-router-dom';
function About () {
    return(
        <>
            <section className='backAbout' />
            <div className='container'>
                <h2 className='textAbout text-center'> About Us </h2>
                <img src={Rect} alt="about" className="img-fluid rounded mx-auto d-block" />
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <p className='paraAbout mt-5'>So you came all the way here that means you want to know more about us..</p>
                    <p className='para-textAbout'>WedFund is a financial technology company that provides tailored business loans to micro, small, and medium enterprises (MSMEs) in the Indian wedding industry. We are committed to empowering businesses in this sector with flexible and accessible financing options, so they can achieve their growth goals.</p>
                    <p className='para-textAbout'>Our mission is to bridge the financial gap for wedding businesses, so they can expand their operations, invest in new products and services, and create jobs. We believe that every business deserves the opportunity to succeed, and we are here to help them make that happen.</p>
                    <p className='para-textAbout'>WedFund is backed by a team of experienced professionals with a deep understanding of the Indian wedding industry. We know the unique challenges faced by entrepreneurs in this niche, and we are here to provide the solutions they need.We offer a variety of loan products to meet the specific needs of our clients. Our loans are available for a variety of purposes, including:</p>
                    <div className='col-md-6 mb-5 mt-4'>
                        <li className='para-textAbout'>Expanding your business</li>
                        <li className='para-textAbout'>Investing in new products or services</li>
                        <li className='para-textAbout'>Purchasing inventory</li>
                    </div>
                    <div className='col-md-6 mb-5 mt-4'>
                        <li className='para-textAbout'>Covering working capital expenses</li>
                        <li className='para-textAbout'>Refurbishing your venue</li>
                        <li className='para-textAbout'>Paying for marketing and advertising</li>
                    </div>
                    <p className='para-textAbout'>WedFund is also committed to providing our clients with excellent customer service. We understand that getting a loan can be a daunting process, and we are here to make it as smooth and easy as possible.If you are a wedding business owner who is looking for financing, we encourage you to contact WedFund today. We would be honored to help you achieve your growth goals.</p>
                    <h5>Here are some of the benefits of working with WedFund:</h5>
                    <div className='col-md-6 mb-2 mt-4'>
                        <li className='para-textAbout'>Tailored business loans to meet your specific needs</li>
                        <li className='para-textAbout'>Flexible repayment termss</li>
                        <li className='para-textAbout'>Competitive interest rates</li>
                    </div>
                    <div className='col-md-6 mb-2 mt-4'>
                        <li className='para-textAbout'>Fast and easy application process</li>
                        <li className='para-textAbout'>Excellent customer service</li>
                    </div>
                    <Link to="/" className='contactLink mt-3'><strong>Contact WedFund today to learn more about how we can help your business grow.</strong></Link>
                </div>
            </div>
        </>
    )
}

export default About