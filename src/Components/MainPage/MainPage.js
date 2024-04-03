import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
const MainPage = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayerStatus] = useState(false);
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passion" },
    { text1: "Give into ", text2: "your passion" },
  ];
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <div className="home_page">
        <Navbar />
        <Background playStatus={playStatus} heroCount={heroCount} />
        <MainContent
          setPlayerStatus={setPlayerStatus}
          heroData={heroData}
          currentHero={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
    </div>
  );
};

export default MainPage;
