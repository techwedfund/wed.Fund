import React from "react";
import check from '../assets/img/checked 1.png'
import '../style/Alert.css'

const Alert = (props) => {
    const redirectHome = () => {
        // window.location.href = '/';
        const newTab = window.open('/', '_blank');
    if (newTab) {
        newTab.opener = null; // Detach the new tab from the current window
        newTab.location = '/'; // Set the new tab's location
    }
    }
    return (
        <>
            <div className="alert alert-success alert-dismissible fade show" id="alertBox" role="alert" style={{ textAlign: "center" }}>
                <div>
                    <button type="button" className="btn-close" aria-label="Close" onClick={redirectHome}></button>
                    <h5 className="text-center thankU" style={{ color: "#6C0505", marginTop: "7rem" }}>
                        Thank You for applying, we will reach out to you shortly
                    </h5>
                </div>
                <div className="checkImg">
                    <img src={check} className="rounded mx-auto d-block check mt-4" alt="thankYou"></img>
                </div>
            </div>
        </>
    )
}

export default Alert;