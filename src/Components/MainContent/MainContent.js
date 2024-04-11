import React from "react";
import ArrowBtn from "../../assets/images/arrow_btn.png";
import PauseBtn from "../../assets/images/pause_icon.png";
import PlayBtn from "../../assets/images/play_icon.png";
import { LuDot } from "react-icons/lu";
import "./MainContent.css";

const MainContent = ({
  currentHero, // Receive currentHero prop
  setHeroCount,
  playStatus,
  setPlayerStatus,
  heroCount,
}) => {
  return (
    <div className="container pt-5">
      <div className="hero_text mt-5">
        <p className="text-light hero_texts pt-5 m-0 ">{currentHero.text1}</p>
        <p className="text-light hero_texts m-0 pb-5">{currentHero.text2}</p>
      </div>
      <div className="hero_explore  d-flex flex-row ">
        <p className="text-dark m-0 px-1 ">Explore the features</p>
        <img src={ArrowBtn} alt="" className="arrow_btn cursorPointer" />
      </div>
      <div className="hero_dot_play d-flex flex-row mt-4 justify-content-between">
        <ul className="hero_dots d-flex flex-row mt-5">
          <li
            onClick={() => {
              setHeroCount(0);
            }}
            className={heroCount === 0 ? "hero_dot_orange" : "hero_dot"}
          >
            <LuDot className="fs-1 cursorPointer" />
          </li>
          <li
            onClick={() => {
              setHeroCount(2);
            }}
            className={heroCount === 2 ? "hero_dot_orange" : "hero_dot"}
          >
            <LuDot className="fs-1 cursorPointer" />
          </li>
          <li
            onClick={() => {
              setHeroCount(1);
            }}
            className={heroCount === 1 ? "hero_dot_orange" : "hero_dot"}
          >
            <LuDot className="fs-1 cursorPointer" />
          </li>
        </ul>
        <div className="hero_play d-flex flex-row ">
          <img
            className="pause-play_btn cursorPointer"
            onClick={() => {
              setPlayerStatus(!playStatus);
            }}
            src={playStatus ? PauseBtn : PlayBtn}
            alt=""
          />
          <p className="text-white m-0  px-2">See the Video</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
