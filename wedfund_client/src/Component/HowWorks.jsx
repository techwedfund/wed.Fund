import { useState, useEffect } from "react";
import "../style/HowWorks.css";
import person from "../assets/img/person-completing-crypto-transaction 1.png";
import image_16 from "../assets/img/image 16.png";
import image_17 from "../assets/img/image 17.png";
import image_18 from "../assets/img/image 18.png";
import image_19 from "../assets/img/image 19.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function HowWorks() {
    // const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 767 ? 1 : 4 );
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    // Update slidesPerView when the window size changes
    const handleResize = () => {
        setSlidesPerView(getSlidesPerView());
      };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getSlidesPerView() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 767) {
      return 1;
    } else if (windowWidth >= 767 && windowWidth <= 991) {
      return 2;
    } else if (windowWidth >= 991 && windowWidth <= 1399) {
      return 3;
    }else{
        return 4;
    }
  }
  return (
    <>
      <div className="container" id="how-It-Works">
        <div className="howWorks-container">
          <div className="row">
            <h1 className="text-center">
              <strong style={{background:'#fff'}}>
                How <span style={{ color: "#6c0505" }}>it Works?</span>
              </strong>
            </h1>
            <div className="col-lg-12 mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                speed={2500}
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop="true"
                className="how-pad"
              >
                <SwiperSlide className="d-flex justify-content-center howWorks-padding">
                  <div className="card">
                    <img src={person} className="card-img-top" alt="person" />
                    <div className="card-body">
                      <h5 className="card-title">Request for Credit Line</h5>
                      <p className="card-text"> Apply and get a call back </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex justify-content-center howWorks-padding">
                  <div className="card">
                    <img src={image_16} className="card-img-top" alt="thumb" />
                    <div className="card-body">
                      <h5 className="card-title">KYC</h5>
                      <p className="card-text">
                        Upload all the required documents for verification
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex justify-content-center howWorks-padding">
                  <div className="card">
                    <img src={image_17} className="card-img-top" alt="thumb" />
                    <div className="card-body">
                      <h5 className="card-title">Get your loan offer</h5>
                      <p className="card-text">
                        Avail a tailored offer specifying credit line amount,
                        interests rates, and repayments terms
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex justify-content-center howWorks-padding">
                  <div className="card">
                    <img src={image_18} className="card-img-top" alt="thumb" />
                    <div className="card-body">
                      <h5 className="card-title">Agreement & Onboarding</h5>
                      <p className="card-text">
                        Sign the agreement and complete the onboarding process
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex justify-content-center howWorks-padding">
                  <div className="card">
                    <img src={image_19} className="card-img-top" alt="thumb" />
                    <div className="card-body">
                      <h5 className="card-title">Grow your business</h5>
                      <p className="card-text">
                        Access funds as per your business needs
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowWorks;
