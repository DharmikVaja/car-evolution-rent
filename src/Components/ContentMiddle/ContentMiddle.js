import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./ContentMiddle.css";
import img1 from "../../assets/images/hiw-img/ icon _car_ (1).png";
import img2 from "../../assets/images/hiw-img/ icon _car_ (2).png";
import img3 from "../../assets/images/hiw-img/ icon _car_ (3).png";
import carFrame from "../../assets/images/hiw-img/Frame 29.png";
import BgRight from "../../assets/images/hiw-img/Group.png";

const ContentMiddle = () => {
  return (
    <div className="content_middle">
      <div className="col-12 d-flex justify-content-end">
        <img src={BgRight} alt="" className="bg_right img" />
      </div>
      <div className="container">
        <div className="row my-5 d-flex mx-5 grp_4">
          <div className="col-lg-3 col-sm-12 col-12 ">
            <div className="d-flex align-items-center cursorPointer py-2">
              <CiLocationOn className="fs-2" />
              <div>
                <p className="m-0">Location</p>
                <p className="con_midd_text m-0">Search your location</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-12 ">
            <div className="d-flex align-items-center cursorPointer py-2">
              <CiLocationOn className="fs-2" />
              <div>
                <p className="m-0">Pickup the date</p>
                <p className="con_midd_text m-0">Tue 15 Feb, 09:00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-12 ">
            <div className="d-flex align-items-center cursorPointer py-2">
              <CiLocationOn className="fs-2" />
              <div>
                <p className="m-0">Return date</p>
                <p className="con_midd_text m-0">Thu 16 Feb, 11:00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-12 d-flex justify-content-end py-3">
            <button
              type="button"
              className="btn btn-primary w-100 py-2 rounded-2 "
            >
              Search
            </button>
          </div>
        </div>

        <div className="row my-3 pt-5">
          <div className="col-lg-12 col-12 d-flex justify-content-center">
            <div className="hiw_heading d-flex justify-content-center align-content-center">
              How it work
            </div>
          </div>
          <div className="d-flex justify-content-center fs-4 pt-3">
            Rent with following 3 working steps
          </div>
        </div>
        <div className="row d-flex flex-wrap justify-content-center text-center py-5">
          <div className="col-lg-4 col-sm-12 d-flex flex-wrap justify-content-center text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={img1} alt="" className="img-fluid img_grp mb-3" />
              <p className="fs-5 m-0">Choose Location </p>
              <p className="fs-6 text-secondary">
                Choose your and find your best car
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-wrap justify-content-center text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={img2} alt="" className="img-fluid img_grp mb-3" />
              <p className="fs-5 m-0">Pick up Date </p>
              <p className="fs-6 text-secondary">
                Select your pick up date and time to book your car
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-wrap justify-content-center text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={img3} alt="" className="img-fluid img_grp mb-3" />
              <p className="fs-5 m-0">Book your Car </p>
              <p className="fs-6 text-secondary">
              Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <img src={carFrame} className="img img-fluid w-100 pt-5" alt="" />
    </div>
  );
};

export default ContentMiddle;
