import './style/Document.css'
function Document () {
    return(
        <>
        
        <div className="container my-5">
                <div className="row my-5">
                <h2 className="docH" style={{background:''}}>Documents <span style={{ color: "#6C0505" }}>Required</span></h2>
                    <div className="col-lg-12 document-back">
                        <ul className="list-group list-group-horizontal info-timeline docUl med7" style={{ marginBottom: "-5rem" }}>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">PAN Card</li>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">Aadhar Card</li>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">Business Reg</li>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">GST</li>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">Bank Statement</li>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">Company PAN*</li>
                            <li className="btn btn-outline mx-2 mob7" style={{ border: '2px solid #6c0505', cursor: "auto" }} data-mdb-ripple-color="dark">Partnership Deed*</li>
                        </ul>
                    </div>
                </div>
                <p className="docP" style={{background:''}}>*Only for Partnership companies, Pvt.Ltd or LCC companies</p>
            </div>
        </>
    )
}

export default Document