import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContentMiddle from "./Components/ContentMiddle/ContentMiddle";
import WhyUs from "./Components/WhyUs/WhyUs";
import PopularDeal from "./Components/PopularDeal/PopularDeal";
import Testinomial from "./Components/Testinomial/Testinomial";
import Download from "./Components/DownloadBottom/Download";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <>
      <MainPage />
      <ContentMiddle />
      <WhyUs />
      <PopularDeal />
      <Testinomial />
      <Download />
      <Footer />
    </>
  );
}

export default App;
