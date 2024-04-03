import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import jaguar from "../../assets/images/popular-deals/jaguar.png";
import audi from "../../assets/images/popular-deals/Audi 1.png";
import bmw from "../../assets/images/popular-deals/bmw.png";
import lambo from "../../assets/images/popular-deals/lamborghini.png";
import { FaRegUser, FaStar } from "react-icons/fa6";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import "./PopularDeals.css";
import { Link } from "react-router-dom";

const PopularDeal = () => {
  return (
    <div>
      <div className="container ">
        <div className="spacer-y"></div>
        <div className="row ">
          <div className="col-12  ">
            <div className="d-flex flex-column align-items-center justify-content-start text-center">
              <div className="hiw_heading">Popular Rental Deals</div>
              <div className="fs-2 fw-bold">Most popular car rental deals</div>
            </div>
          </div>
        </div>
        <div className="row py-5 d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-2">
            <Card className="pop_deal_card rounded-3 d-flex flex-column align-items-center">
              <img
                variant="top"
                src={jaguar}
                className="p-3 card_img img-fluid img-fluid"
                alt=""
              />
              <div className="px-3 text-center">
                <div className="fw-bold py-1">Jaguar XE L P250</div>
                <div className="d-flex flex-row fs-6 justify-content-center align-items-center">
                  <FaStar className="fs-5 me-2" style={{ fill: "#FAD001" }} />
                  <span className="fw-bold rating_number">4.9</span>{" "}
                  <span className="text-secondary pop_deal_icon_text">
                    (2346 reviews)
                  </span>
                </div>
                <div className="row d-flex text-secondary py-3">
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <FaRegUser />4 Passengers
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiGearStickPattern /> Auto
                    </span>
                  </div>
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <TiWeatherWindyCloudy /> AIr conditioning
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiCarDoor /> 4 doors
                    </span>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="list-group-flush w-100">
                  <div className="py-3">
                    <div className="d-flex justify-content-between">
                      <div className="fs-6">Price</div>
                      <div>
                        <span className="fw-bold">$1,800 </span>/ day
                      </div>
                    </div>
                    <Button
                      className="btn w-100 mt-3 text-center align-content-center rounded-3 mx-0"
                      type="button"
                      variant="primary"
                    >
                      Rent Now <MdOutlineKeyboardDoubleArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-2">
            <Card className="pop_deal_card rounded-3 d-flex flex-column align-items-center">
              <img
                variant="top"
                src={audi}
                className="p-3 card_img img-fluid"
                alt=""
              />
              <div className="px-3 text-center">
                <div className="fw-bold py-1">Jaguar XE L P250</div>
                <div className="d-flex flex-row fs-6 justify-content-center align-items-center">
                  <FaStar className="fs-5 me-2" style={{ fill: "#FAD001" }} />
                  <span className="fw-bold rating_number">4.9</span>{" "}
                  <span className="text-secondary pop_deal_icon_text">
                    (2346 reviews)
                  </span>
                </div>
                <div className="row d-flex text-secondary py-3">
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <FaRegUser />4 Passengers
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiGearStickPattern /> Auto
                    </span>
                  </div>
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <TiWeatherWindyCloudy /> AIr conditioning
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiCarDoor /> 4 doors
                    </span>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="list-group-flush w-100">
                  <div className="py-3">
                    <div className="d-flex justify-content-between">
                      <div className="fs-6">Price</div>
                      <div>
                        <span className="fw-bold">$1,800 </span>/ day
                      </div>
                    </div>
                    <Button
                      className="btn w-100 mt-3 text-center align-content-center rounded-3 mx-0"
                      type="button"
                      variant="primary"
                    >
                      Rent Now <MdOutlineKeyboardDoubleArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-2">
            <Card className="pop_deal_card rounded-3 d-flex flex-column align-items-center">
              <img
                variant="top"
                src={bmw}
                className="p-3 card_img img-fluid"
                alt=""
              />
              <div className="px-3 text-center">
                <div className="fw-bold py-1">Jaguar XE L P250</div>
                <div className="d-flex flex-row fs-6 justify-content-center align-items-center">
                  <FaStar className="fs-5 me-2" style={{ fill: "#FAD001" }} />
                  <span className="fw-bold rating_number">4.9</span>{" "}
                  <span className="text-secondary pop_deal_icon_text">
                    (2346 reviews)
                  </span>
                </div>
                <div className="row d-flex text-secondary py-3">
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <FaRegUser />4 Passengers
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiGearStickPattern /> Auto
                    </span>
                  </div>
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <TiWeatherWindyCloudy /> AIr conditioning
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiCarDoor /> 4 doors
                    </span>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="list-group-flush w-100">
                  <div className="py-3">
                    <div className="d-flex justify-content-between">
                      <div className="fs-6">Price</div>
                      <div>
                        <span className="fw-bold">$1,800 </span>/ day
                      </div>
                    </div>
                    <Button
                      className="btn w-100 mt-3 text-center align-content-center rounded-3 mx-0"
                      type="button"
                      variant="primary"
                    >
                      Rent Now <MdOutlineKeyboardDoubleArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-2">
            <Card className="pop_deal_card rounded-3 d-flex flex-column align-items-center">
              <img
                variant="top"
                src={lambo}
                className="p-3 card_img img-fluid"
                alt=""
              />
              <div className="px-3 text-center">
                <div className="fw-bold py-1">Jaguar XE L P250</div>
                <div className="d-flex flex-row fs-6 justify-content-center align-items-center">
                  <FaStar className="fs-5 me-2" style={{ fill: "#FAD001" }} />
                  <span className="fw-bold rating_number">4.9</span>{" "}
                  <span className="text-secondary pop_deal_icon_text">
                    (2346 reviews)
                  </span>
                </div>
                <div className="row d-flex text-secondary py-3">
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <FaRegUser />4 Passengers
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiGearStickPattern /> Auto
                    </span>
                  </div>
                  <div className="col-7">
                    <span className="pop_deal_icon_text">
                      <TiWeatherWindyCloudy /> AIr conditioning
                    </span>
                  </div>
                  <div className="col-5">
                    <span className="pop_deal_icon_text">
                      <GiCarDoor /> 4 doors
                    </span>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="list-group-flush w-100">
                  <div className="py-3">
                    <div className="d-flex justify-content-between">
                      <div className="fs-6">Price</div>
                      <div>
                        <span className="fw-bold">$1,800 </span>/ day
                      </div>
                    </div>
                    <Button
                      className="btn w-100 mt-3 text-center align-content-center rounded-3 mx-0"
                      type="button"
                      variant="primary"
                    >
                      Rent Now <MdOutlineKeyboardDoubleArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Link to="/" className="text-black show_vehicle rounded-2 my-2">Show all Vehicles <MdOutlineKeyboardDoubleArrowRight/></Link>
        </div>
      </div>
    </div>
  );
};

export default PopularDeal;
