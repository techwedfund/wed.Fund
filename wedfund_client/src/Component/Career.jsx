import { useState } from 'react';
import '../style/Career.css'
import Alert from './Alert'
import axios from 'axios';
// import emailjs from '@emailjs/browser';


function Career () {

// const formData = useRef() 

const [showAlert, setSheowAlert] = useState(false)

const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '', // Corrected field name
    cv: null
  });

  const handleChange = (e) => {

    const {name, value, type, files } = e.target;
    const inputValue = type === 'file' ? files[0] : value;

    setForm({
      ...form,
      [name]: inputValue
    });
  }
  const [error, setError] = useState({});

  const validationForm = () => {
    let isValid = true;
    const newError = {};

    if (!form.name.match(/^[\p{L} .'-]+$/u)) {
      newError.name = "Name is Required";
      isValid = false;
    } else if (form.name.length < 5) {
      newError.name = 'At least 5 characters';
    } else {
      newError.name = ''; // Clear the name
    }

    // Check validation for the "email" field
    if (!form.email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      newError.email = "Enter valid Email";
      isValid = false;
    } else {
      newError.email = ''; // Clear the email error message
    }

    // Check validation for the "phone" field
    if (!form.phone.match(/^[6-9]{1}[0-9]{9}$/)) {
      newError.phone = "Provide correct Number";
      isValid = false;
    } else {
      newError.phone = ''; // Clear the phone error message
    }

    if (form.cv === null || form.cv === undefined || form.cv === '') {
        newError.cv = "Please select file";
        isValid = false;
    } else {
        newError.cv = ''; // Clear the cv error message
    }
    // console.log('newError.cv:', newError.cv);

    setError(newError);
    return isValid;
  }

const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    formDataToSend.append('name', form.name)
    formDataToSend.append('email', form.email)
    formDataToSend.append('phone', form.phone)
    formDataToSend.append('cv', form.cv)
    
    if(validationForm()){
    try {
        await axios.post('http://localhost:5000/api/upload', formDataToSend, {
            headers: {
                "Content-Type" : "multipart/form-data",
            }
        })

        alert('Form Submitted Successfully')
        // setSheowAlert(true)
        setForm({
            name: "",
            email: "",
            phone: "",
            cv: '' && null,
        })
        document.getElementById("cv").value = "";
      } catch (error) {
        console.log(error);
        alert('Resubmit Your Form, Please');
      }
}
}

//   const emailSubmit = (e) => {
//     e.preventDefault()

//     emailjs.sendForm('service_mwrc7qe', 'template_lchd0eb', formData.current, 'zAIfKljmVje73gZNF')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//   }
    return(
        <>
        { showAlert ? (<Alert />) : (<div>
        <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-12 mb-4'>
                        <h2 className='h2Edit'>Join Us at WedFund - Where Passion Meets Purpose</h2>
                        <p className='paraEditCareer'>Are you ready to embark on a journey that combines your skills, passion, and purpose? At WedFund, we're building more than just a company; we're creating a community of dedicated individuals who are driven to make a meaningful impact on the Indian MSMEs</p>
                        <h2 className='h2Edit mt-2'>Our Mission</h2>
                        <p className='paraEditCareer'>WedFund's mission is to empower small and medium enterprises across India by providing them with the financial support they need to flourish. We're on a quest to transform the way businesses access capital, making it easier, faster, and more efficient.</p>
                        <h2 className='h2Edit mt-2'>Why WedFund?</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col highlighted-tag-margin">
                                    <div className="highlighted-tag">
                                        &#8226; &nbsp;Impact:
                                    </div>
                                </div>
                                <div className="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        Join a team that's actively shaping the future of the Indian business landscape. We're not just providing loans; we're fuelling dreams and fostering growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col highlighted-tag-margin">
                                    <div className="highlighted-tag">
                                        &#8226; &nbsp;Innovation:
                                    </div>
                                </div>
                                <div className="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        Be part of a dynamic environment where innovation is at the forefront. We're constantly exploring new technologies and solutions to better serve our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col highlighted-tag-margin">
                                    <div className="highlighted-tag">
                                        &#8226; &nbsp;Team Spirit:
                                    </div>
                                </div>
                                <div className="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        Collaborate with a group of passionate, forward-thinking individuals who thrive on solving complex challenges together.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col highlighted-tag-margin">
                                    <div className="highlighted-tag">
                                        &#8226; &nbsp;Growth:
                                    </div>
                                </div>
                                <div className="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        We invest in our team members' personal and professional growth. Your success is our success, and we're committed to helping you reach your full potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2 className='h2Edit mt-2'>Who We're Looking For</h2>
                        <p className='paraEditCareer'>We're searching for individuals with diverse skills and backgrounds, including fintech, lending, technology, product development, and operations. Whether you're a seasoned industry expert or a fresh talent eager to learn, if you're passionate about making a difference, we want to hear from you.</p>
                    </div>
                </div>
            </div>
            <div className='container career mb-4'>
                <div className='row'>
                    <div className='col-lg-12 my-5'>

                        <h2 className=' mt-2 text-center'>Join the WedFund Family</h2>
                        <p className='JoinWed'>If you're ready to be part of a team that's rewriting the rules of financial accessibility for MSMEs in India, we invite you to explore our current job openings below. Your journey starts here, and together, we'll build a brighter future for businesses across the nation.</p>
                        {/* <p className='ready'>Ready to Join Us </p> */}
                        <div className='d-flex justify-content-center'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mt-4 ">
                                    <input type="text" className={`form-control ${error.name && "is-invalid"} placeholder-xs`} id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" style={{ fontFamily: "Montserrat" }} />
                                    {error.name && <span className="error mx-2 invalid-feedback" style={{ marginBottom: "-0.4rem", marginTop: "-0.1rem" }}>{error.name}</span>}
                                </div>
                                <div className="form-group mt-2 ">
                                    <input type="email" className={`form-control ${error.email && "is-invalid"} placeholder-xs`} id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" style={{ fontFamily: "Montserrat" }} />
                                    {error.email && <span className="error mx-2 invalid-feedback" style={{ marginBottom: "-0.4rem", marginTop: "-0.1rem" }}>{error.email}</span>}
                                </div>
                                <div className="form-group mt-2 ">
                                    <input type="phone" className={`form-control ${error.phone && "is-invalid"} placeholder-xs`} id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone" style={{ fontFamily: "Montserrat" }} />
                                    {error.phone && <span className="error mx-2 invalid-feedback" style={{ marginBottom: "-0.4rem", marginTop: "-0.1rem" }}>{error.phone}</span>}
                                </div>
                                <div className="form-group mt-2 ">
                                    <input type="file" id="cv" name="cv" className={`form-control-file form-control ${error.cv && 'is-invalid'} placeholder-xs`} accept=".pdf,.doc,.docx" onChange={handleChange}/>
                                    {error.cv && <span className="error mx-2 invalid-feedback" style={{ marginBottom: "-0.4rem", marginTop: "-0.1rem" }}>{error.cv}</span>}
                                </div>

                                <div className='mb-4 text-center'>
                                    <button type="submit" className="btn btn-primary btnEdit text-center" style={{ background: "#6c0505", border: 'none', width: "100px" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>)
        }
        </>
    )
}

export default Career;