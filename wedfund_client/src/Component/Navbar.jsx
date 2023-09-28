import React, { useEffect } from 'react';
import logo from '../assets/img/logo.png'
import '../style/Navbar.css'
import {  useLocation } from 'react-router-dom';

function Navbar () {

    let location = useLocation();
    useEffect( () => {},[location])

    const redirectHowWorks = () => {
        const howWorks = document.getElementById('how-It-Works')

        if(howWorks){
            howWorks.scrollIntoView({behavior: 'smooth'})
        }
    }
    const redirectFooter = () => {
        const footer = document.getElementById('footer');

        if(footer){
            footer.scrollIntoView({behavior: 'smooth'})
        }
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} rel="noopener noreferrer" className='img-fluid logo' alt='logo' />WedFund</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className={`nav-link ${location.pathname==="/"? "active": ""} px-4`} rel="noopener noreferrer" href="/" >Home</a>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link ${location.pathname==="/about"? "active": ""} px-4` } rel="noopener noreferrer"  href="/about" >About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link ${location.pathname==="/how-it-works"? "active": ""} px-4` } rel="noopener noreferrer" onClick={redirectHowWorks}  href="/#how-It-Works">How it Works</a>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link ${location.pathname==="/careers"? "active": ""} px-4` } rel="noopener noreferrer"  href="/careers" >Careers</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link px-4" href="https://www.lendingkart.com/dashboard/auth" rel="noopener noreferrer" target='_blank'>Track Your Application</a>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link ${location.pathname==="/#contact"? "active": ""} px-4` }  rel="noopener noreferrer"  href="/#contact" onClick={redirectFooter}>Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;