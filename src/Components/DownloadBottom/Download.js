import React from "react";
import triangleBg from "../../assets/images/why-us-img/triangle.png";
import "./Download.css";
import img1 from "../../assets/images/Down-Comp/image 2.png";
import img2 from "../../assets/images/Down-Comp/image 3.png";
import phone from "../../assets/images/Down-Comp/iPhone 14 Pro Space Black Mockup.png";

const Download = () => {
  return (
    <div>
      {/* <div className="spacer-y"></div> */}
      <div className="container">
        <img src={triangleBg} alt="" className="triangle_bg overflow-y-hidden"/>
        <div className="row triangleBg">
          <div className="col-lg-6 col-sm-12 pt-5 mt-5 d-flex flex-column justify-content-center ">
            <div className="hiw_heading fw-bold px-3 py-2 fs-6 ">Download</div>
            <div className="download_desc fs-1 fw-bold  pt-3">
              Download Rentcars App for {" "}
              <span className="text-primary">FREE</span>
            </div>
            <div className="">
              For faster, easier booking and exclusive deals.
            </div>
            <div className="d-flex flex-row pt-4 gap-2">
              <img src={img1} className="down_img cursorPointer" alt=""/>
              <img src={img2} className="down_img cursorPointer" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 d-flex justify-content-center">
            <img src={phone} className="down_phone" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
