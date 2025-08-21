import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import PopularServices from "./PopularServices";
import CopySection from "./CopySection";
import CombinedSection from "./CombinedSection";
import ImageGallery from "./ImageGallery";
import RemainingSection from "./RemainingSection";
import FooterSection from "./FooterSection";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgetForm from "./ForgetForm";

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
