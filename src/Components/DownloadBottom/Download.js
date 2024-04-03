import React from "react";
import triangleBg from "../../assets/images/why-us-img/triangle.png"
import "./Download.css"

const Download = () => {
  return (
    <div>
      <div className="spacer-y">
        <div className="container">
        <img src={triangleBg} alt="" className="triangleBg"/>
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-6 col-sm-12">
              <div className="hiw_heading fw-bold px-3">Download</div>
            </div>
            <div className="col-lg-6 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
