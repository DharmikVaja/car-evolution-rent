import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/images/footer/footer_logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_page text-light">
      <hr />
      <div className="container mt-5">
        <div className="row d-flex">
          <div className="col-12 col-lg-4 col-sm-12 d-flex flex-column">
            <div className="d-flex flex-column text-start footer_text_links">
              <div className="d-flex gap-2 align-items-center py-1 fs-4">
                <img src={FooterLogo} alt="" className="footer_rentcars" />
                <p className="my-2 fw-bold">RentCars</p>
              </div>
              <div className="d-flex gap-2 align-items-center py-1">
                <FaLocationDot />
                <p className="my-2 footer_p">
                  25566 Hc 1, Glenallen, Alaska, 99588, USA
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center py-1">
                <IoCall />
                <p className="my-2 footer_p">+603 4784 273 12</p>
              </div>
              <div className="d-flex gap-2 align-items-center py-1">
                <IoMdMail />
                <p className="my-2 footer_p">rentcars@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-sm-12 d-flex flex-wrap footer_text_links">
            <div className="col-12 col-lg-3">
              <div className="p-2 fw-bold fs-6">Our Products</div>
              <ul className="m-0 p-2">
                <li className="py-1">Career</li>
                <li className="py-1">Car</li>
                <li className="py-1">Package</li>
                <li className="py-1">Features</li>
                <li className="py-1">Priceline</li>
              </ul>
            </div>
            <div className="col-12 col-lg-3">
              <div className="p-2 fw-bold fs-6">Resource</div>
              <ul className="m-0 p-2">
                <li className="py-1">Download</li>
                <li className="py-1">Help centre</li>
                <li className="py-1">Guides</li>
                <li className="py-1">Partner network</li>
                <li className="py-1">Cruises</li>
                <li className="py-1">Developer</li>
              </ul>
            </div>
            <div className="col-12 col-lg-3">
              <div className="p-2 fw-bold fs-6"> About RentCars</div>
              <ul className="m-0 p-2">
                <li className="py-1">Why choose us</li>
                <li className="py-1">Our Story</li>
                <li className="py-1">Investor Relations</li>
                <li className="py-1">Press Center</li>
                <li className="py-1">Advertise</li>
              </ul>
            </div>
            <div className="col-12 col-lg-3">
              <div className="p-2 fw-bold fs-6">Follow Us</div>
              <div className="socials_footer d-flex flex-row m-0 py-2">
                <div className=" social_icons">
                  <FaFacebook className="s_icon" />
                  <FaInstagram className="s_icon" />
                  <FaYoutube className="s_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
