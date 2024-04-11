import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video
        src={video1}
        className="background fade-in"
        autoPlay
        loop
        muted
      ></video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="" />;
  }
};

export default Background;
