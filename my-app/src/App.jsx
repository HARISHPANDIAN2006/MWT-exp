import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import PopularServices from "./PopularServices";
import CopySection from "./CopySection";
import CombinedSection from "./CombinedSection";
import ImageGallery from "./ImageGallery";
import RemainingSection from "./RemainingSection";
import FooterSection from "./FooterSection";
import LoginSignup from "./LoginSignup";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgetForm from "./ForgetForm";

function App(){
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PopularServices />
      <CopySection />
      <CombinedSection />
      <ImageGallery />
      <RemainingSection />
      <FooterSection />
      <LoginSignup />
      <LoginForm />
      <SignupForm />
      <ForgetForm />
    </div>
  );
}

export default App;