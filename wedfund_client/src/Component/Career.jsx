import '../style/Career.css'

function Career () {
    return(
        <>
        <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-12 mb-4'>
                        <h2 className='h2Edit'>Join Us at WedFund - Where Passion Meets Purpose</h2>
                        <p className='paraEditCareer'>Are you ready to embark on a journey that combines your skills, passion, and purpose? At WedFund, we're building more than just a company; we're creating a community of dedicated individuals who are driven to make a meaningful impact on the Indian MSMEs</p>
                        <h2 className='h2Edit mt-2'>Our Mission</h2>
                        <p className='paraEditCareer'>WedFund's mission is to empower small and medium enterprises across India by providing them with the financial support they need to flourish. We're on a quest to transform the way businesses access capital, making it easier, faster, and more efficient.</p>
                        <h2 className='h2Edit mt-2'>Why WedFund?</h2>
                        <div class="container">
                            <div class="row">
                                <div class="col highlighted-tag-margin">
                                    <div class="highlighted-tag">
                                        &#8226; &nbsp;Impact:
                                    </div>
                                </div>
                                <div class="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        Join a team that's actively shaping the future of the Indian business landscape. We're not just providing loans; we're fuelling dreams and fostering growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col highlighted-tag-margin">
                                    <div class="highlighted-tag">
                                        &#8226; &nbsp;Innovation:
                                    </div>
                                </div>
                                <div class="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        Be part of a dynamic environment where innovation is at the forefront. We're constantly exploring new technologies and solutions to better serve our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col highlighted-tag-margin">
                                    <div class="highlighted-tag">
                                        &#8226; &nbsp;Team Spirit:
                                    </div>
                                </div>
                                <div class="col-lg-10 careerPara">
                                    <p className='paraEdit'>
                                        Collaborate with a group of passionate, forward-thinking individuals who thrive on solving complex challenges together.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col highlighted-tag-margin">
                                    <div class="highlighted-tag">
                                        &#8226; &nbsp;Growth:
                                    </div>
                                </div>
                                <div class="col-lg-10 careerPara">
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
                            <form>
                                <div className="form-group mt-4 ">
                                    <input type="text" className="form-control placeholder-xs" id="name" name="name" placeholder="Enter your name" style={{ fontFamily: "Montserrat" }} />
                                </div>
                                <div className="form-group mt-2 ">
                                    <input type="email" className="form-control placeholder-xs" id="email" name="email" placeholder="Enter your email" style={{ fontFamily: "Montserrat" }} />
                                </div>
                                <div className="form-group mt-2 ">
                                    <input type="phone" className="form-control placeholder-xs" id="phone" name="phone" placeholder="Enter your phone" style={{ fontFamily: "Montserrat" }} />
                                </div>
                                <div className="form-group mt-2 ">
                                    <input type="file" id="cv" name="cv" className="form-control-file form-control placeholder-xs" accept=".pdf,.doc,.docx" />
                                </div>

                                <div className='mb-4 text-center'>
                                    <button type="button" className="btn btn-primary btnEdit text-center" style={{ background: "#6c0505", border: 'none', width: "100px" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career;