import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ServicesSection from "./HomeSections/ServicesSection";
import HeroSection from "./HomeSections/HeroSection";
import PopularServices from "./HomeSections/PopularServices";
import CopySection from "./HomeSections/CopySection";
import CombinedSection from "./HomeSections/CombinedSection";
import ImageGallery from "./HomeSections/ImageGallery";
import RemainingSection from "./HomeSections/RemainingSection";
import FooterSection from "./HomeSections/FooterSection";
import LoginForm from "./AuthSections/LoginForm";
import SignupForm from "./AuthSections/SignupForm";
import ForgetForm from "./AuthSections/ForgetForm";

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
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forget" element={<ForgetForm />} />
        
      </Routes>
    </Router>
  );
}

export default App;
