import React, { useEffect } from 'react';
import logo from '../assets/img/logo.png'
import '../style/Navbar.css'
import { Link, useLocation } from 'react-router-dom';

function Navbar () {

    let location = useLocation();
    useEffect( () => {},[location])

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
                    <Link className="navbar-brand" to="/"><img src={logo} className='img-fluid logo' alt='logo'/>WedFund</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/"? "active": ""} px-4`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/about"? "active": ""} px-4` }  to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/how-it-works"? "active": ""} px-4` }  to="/how-it-works">How it Works</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/careers"? "active": ""} px-4` }  to="/careers">Careers</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link px-4" to="https://www.lendingkart.com/dashboard/auth" target='_blank'>Track Your Application</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/#contact"? "active": ""} px-4` }  to="/#contact" onClick={redirectFooter}>Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;