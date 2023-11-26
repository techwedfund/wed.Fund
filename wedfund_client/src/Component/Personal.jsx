import React, { useEffect } from 'react'
import '../style/Personal.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Personal() {

    const [showPersonal, setShowPersonal] = useState(false)
    const [recentlyClosed, setRecentlyClosed] = useState(false);

const handleClose = (e) => {
    e.preventDefault();
    const closeBtn = document.getElementById('close');
    if (closeBtn) {
        setShowPersonal(false);
        setRecentlyClosed(true);
    }
};

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 950 && !recentlyClosed) {
            setShowPersonal(true);
        } else {
            setShowPersonal(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [recentlyClosed]); 

  return (
    <div>
        {showPersonal && 
        <section className='personal'>
            <div className='text-end p-2'>
                <i class="fa-solid fa-square-xmark mb-2" id='close' onClick={handleClose} style={{color: '#fff', cursor: 'pointer'}}></i>
            </div>
            <div className='container'>
                <h3 className='personalHead mb-3' id='showCont'>WedFund  is more than just a business lending company. We are dedicated to being your financial partner, assisting you not only in your company's growth but also your personal financial growth.  Apply for a customised personal loan from WedFund to avail funds on demand.</h3>
                
                <p id='hideCont'>Can't get a business loan? Apply for WedFund's personal loan instead.</p>

                <div className='row'>
                    <div className='d-flex justify-content-center mb-2'>
                        <Link to='https://wedfund-personal.el.r.appspot.com/' rel="noopener noreferrer" className='btn btn-Apply' target='_blank'>APPLY NOW</Link>
                    </div>
                </div>
            </div>
        </section>
        }
    </div>
  )
}

export default Personal