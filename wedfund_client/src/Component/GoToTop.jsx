import { useState, useEffect } from 'react'
import '../style/GoToTop.css'

function GoToTop() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 150){
                setBackToTop(true);
            }else{
                setBackToTop(false);
            }
        })
    },[])

    const toggleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        <>
            {backToTop && (
                <button className='back-to-top' onClick={toggleScroll}><i className="fa-solid fa-arrow-up"></i></button>
            )}
        </>
    )
}

export default GoToTop