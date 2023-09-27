import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function Popup_Modal() {

    const [isOpen, setIsOpen] = useState(false)

    
    useEffect(() => {
        setTimeout(openModal, 1)
    }, [])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return(
        <>
            <Modal isOpen={isOpen}>
                <div className='modal-content'>
                <span className="close" onClick={closeModal}>&times;</span>
                    <h1>Welcome This is modal</h1>
                    <p>modal Para</p>
                </div>
            </Modal>
        </>
    )
}

// export default Popup_Modal