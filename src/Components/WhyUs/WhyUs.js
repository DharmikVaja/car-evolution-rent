import React from "react";
import "./WhyUs.css";
import audi from "../../assets/images/why-us-img/Audi 1.png";
import audivector from "../../assets/images/why-us-img/audi-vector.png";
import Bgvector from "../../assets/images/why-us-img/Vector.png";
import whyus1 from "../../assets/images/why-us-img/whyus1.png";
import whyus2 from "../../assets/images/why-us-img/whyus2.png";
import whyus3 from "../../assets/images/why-us-img/whyus3.png";
import whyus4 from "../../assets/images/why-us-img/whyus4.png";


const WhyUs = () => {
  return (
    <div className="WhyUs">
      <div className="spacer-y"></div>
      <div className="container-fluid">
        <div className="row align-content-center why_us_page ">
          <div className="col-lg-6 col-12  d-flex justify-content-start align-content-left">
            <img
              src={audivector}
              alt=""
              className="img img-fluid audi_whyus_bg "
            />
          </div>
          <div className="col-lg-6 col-12 col-sm-12 pt-2 why_us_right_content">
            <div className="ps-3">
              <div className="hiw_heading ">Why choose us</div>
              <div className="fs-3 fw-bold py-2">
                We offer the best experience with our rental deals
              </div>
            </div>
            <div className="pt-3">
              <div className="d-flex align-items-center p-3">
                <img
                  src={whyus1}
                  alt=""
                  className="img img-fluid whyus_img_grp"
                />
                <div className="ps-2">
                  <p className="fw-bold mb-0">Best price guaranteed</p>
                  <p className="text-secondary whyus_grey_text mb-0">
                    Find a lower price? We’ll refund you 100% of the difference.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <img
                  src={whyus2}
                  alt=""
                  className="img img-fluid m-0 whyus_img_grp"
                />
                <div className="ps-2">
                  <p className="fw-bold  mb-0">Experience driver</p>
                  <p className="text-secondary whyus_grey_text mb-0">
                    Don’t have driver? Don’t worry, we have many experienced
                    driver for you.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <img
                  src={whyus3}
                  alt=""
                  className="img img-fluid m-0 whyus_img_grp"
                />
                <div className="ps-2">
                  <p className="fw-bold  mb-0">24 hour car delivery</p>
                  <p className="text-secondary whyus_grey_text mb-0">
                    Book your car anytime and we will deliver it directly to
                    you.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <img
                  src={whyus4}
                  alt=""
                  className="img img-fluid m-0 whyus_img_grp"
                />
                <div className="ps-2">
                  <p className="fw-bold mb-0">24/7 technical support</p>
                  <p className="text-secondary whyus_grey_text mb-0">
                    Have a question? Contact Rentcars support any time when you
                    have problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
