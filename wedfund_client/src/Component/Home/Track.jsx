import { useState } from "react";
import './style/Track.css'

function Track () {
    const [form, setForm] = useState({ track: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const submitTrack = async (e) => {
        e.preventDefault();
        try {
            console.log('Form submitted')
        } catch (error) {
            console.log('Error in submitting form', error)
        }
    }
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "#6c0505" }}>Track your application</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onClick={submitTrack}>
                            <div className="container mt-4 ">
                                <div className="form-group txt inputContainer">
                                    <input type="text" className="form-control placeholder-xs track" id="name" name="trackId" value={form.track} onChange={handleChange} placeholder="Enter Your Email" style={{ fontFamily: "Montserrat" }} />
                                </div>
                                <div className="form-group txt inputContainer">
                                    <input type="text" className="form-control placeholder-xs track" id="name" name="trackId" value={form.track} onChange={handleChange} placeholder="Enter Your Phone" style={{ fontFamily: "Montserrat" }} />
                                </div>
                            </div>
                            <div className="container btncontainer">
                                <button type="button" className="btn btn-primary" style={{ background: "#6c0505", border: 'none', width: "100px" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Track