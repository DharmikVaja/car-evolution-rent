import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import jaguar from "../../assets/images/popular-deals/jaguar.png";
import audi from "../../assets/images/popular-deals/Audi 1.png";
import bmw from "../../assets/images/popular-deals/bmw.png";
import lambo from "../../assets/images/popular-deals/lamborghini.png";
import { FaRegUser, FaStar } from "react-icons/fa6";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./PopularDeals.css";

const CarData = [
  {
    id: 0,
    img: { jaguar },
    carName: "Jaguar XE L P250",
    rating: 4.9,
    reviews: 2438,
    passengers: "4 Passengers",
    gear: "auto",
    ac: "Air conditioning",
    doors: "4 doors",
    price: 1700,
  },
  {
    id: 1,
    img: { audi },
    carName: "Audi R8",
    rating: 4.6,
    reviews: 2896,
    passengers: "2 Passengers",
    gear: "auto",
    ac: "Air conditioning",
    doors: "2 doors",
    price: 2100,
  },
  {
    id: 2,
    img: { bmw },
    carName: "BMW M3",
    rating: 4.4,
    reviews: 3894,
    passengers: "4 Passengers",
    gear: "auto",
    ac: "Air conditioning",
    doors: "4 doors",
    price: 1600,
  },
  {
    id: 3,
    img: { lambo },
    carName: "Lamborghini Huracan",
    rating: 4.7,
    reviews: 3981,
    passengers: "2 Passengers",
    gear: "auto",
    ac: "Air conditioning",
    doors: "2 doors",
    price: 2300,
  },
];

export default CarData;
