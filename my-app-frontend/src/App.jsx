import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./HomeSections/HeroSection";
import FooterSection from "./HomeSections/FooterSection";
import CopySection from "./HomeSections/CopySection";
import RemainingSection from "./HomeSections/RemainingSection";
import PopularServices from "./HomeSections/PopularServices";
import ServicesSection from "./HomeSections/ServicesSection";
import CombinedSection from "./HomeSections/CombinedSection";
import ImageGallery from "./HomeSections/ImageGallery";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PopularServices />
      <CopySection />
      <CombinedSection />
      <ImageGallery />
      <RemainingSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
