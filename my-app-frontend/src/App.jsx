import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./HomeSections/HeroSection";
import FooterSection from "./HomeSections/FooterSection";
import CopySection from "./HomeSections/CopySection";
import RemainingSection from "./HomeSections/RemainingSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CopySection />
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
