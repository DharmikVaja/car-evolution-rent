import { Link } from "react-router-dom";
import "./Navbar.css";
import carLogo from "../../assets/images/logo-car.png";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container  ">
      <div className="row d-flex justify-content-between align-items-center">

        <div className="col-lg-4 col-6 text-white fs-1">
          <div className="nav-logo d-flex flex-row align-items-center">
            <img
              src={carLogo}
              style={{ filter: "brightness(0) invert(1)" }}
              className="car_logo pe-2"
              alt=""
            />
            <p className="nav_brand">EV-olution</p>
          </div>
        </div>
        <div className="d-lg-none col-2 navbar_toggler ">
          <RiMenu3Line
            className="text-light pt-2 fs-2 cursorPointer"
            onClick={toggleMenu}
          />
        </div>
        {showMenu && (
        <div className="mobile-menu position-absolute top-25 start-0  text-white py-3">
          <ul className="d-flex flex-column px-0">
            <li>
              <Link to="/" className="mobile_list ">
                Home
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/" className="mobile_list">
                Explore
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/" className="mobile_list">
                About
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/" className="mobile_list">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
        <div className="col-lg-8 col-6 pt-2 navbar_lists">
          <ul className="nav_menu d-flex justify-content-end text-white home_menu_li ">
            <Link to="/" className="home_link">
              Home
            </Link>
            <Link to="/" className="home_menu_li">
              Explore
            </Link>
            <Link to="/" className="home_menu_li">
              About
            </Link>
            <Link to="/" className="contact_link">
              Contact
            </Link>
          </ul>
        </div>
       
      </div>
      
    </div>
  );
};

export default Navbar;
