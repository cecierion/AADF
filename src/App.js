import Bazaar from "./components/Bazaar";
import Navbar from "./components/NavBar/Navbar";
import Statistics from "./components/Statistic/Statistics";
import Program from "./components/Programs/Program";
import ProgramTypes from "./components/Programs/ProgramTypes";
import Slider from "./components/Slider/Slider";
import PartnerSection from "./components/Partner/PartnerSection";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSection/HeroSlider";



function App() {
  return (
    <div className="w-full">
      <div className="bg-cover bg-no-repeat    md:bg-BackgroundImg-pattern bg-left z-0 ">

        <Navbar />
        <HeroSlider />
        <Statistics />
        <Bazaar />
        <Program />
        <ProgramTypes />
        <Slider />
        <PartnerSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
