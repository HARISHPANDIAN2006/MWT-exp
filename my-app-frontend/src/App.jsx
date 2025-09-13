import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./HomeSections/HeroSection";
import FooterSection from "./HomeSections/FooterSection";
import CopySection from "./HomeSections/CopySection";
import RemainingSection from "./HomeSections/RemainingSection";
import PopularServices from "./HomeSections/PopularServices";
import ServicesSection from "./HomeSections/ServicesSection";
import CombinedSection from "./HomeSections/CombinedSection";
import ImageGallery from "./HomeSections/ImageGallery";
import LoginSignup from "./AuthSections/LoginSignup";
import LoginForm from "./AuthSections/LoginForm";
import SignupForm from "./AuthSections/SignupForm";
import ForgetForm from "./AuthSections/ForgetForm";
import OtpPage from "./AuthSections/OtpPage";
import ServiceInfo from "./ServiceList/ServiceInfo";

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
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/loginsignup/login" element={<LoginForm />} />
        <Route path="/loginsignup/signup" element={<SignupForm />} />
        <Route path="/loginsignup/forgot" element={<ForgetForm />} />
        <Route path="/loginsignup/otp" element={<OtpPage />} />
        <Route path="/services/:id" element={<ServiceInfo />} />
        <Route path="/subcategory/:subId" element={<SubcategoryInfo />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/JustDialPages" element={<JustDialPages />} />

      </Routes>
    </Router>
  );
}

export default App;
