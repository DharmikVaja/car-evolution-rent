import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import MainContent from "./Components/MainContent/MainContent";
import ContentMiddle from "./Components/ContentMiddle/ContentMiddle";

function App() {
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
    <>
      <div className="home_page">
        <Navbar  />
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
      <ContentMiddle />
    </>
  );
}

export default App;
