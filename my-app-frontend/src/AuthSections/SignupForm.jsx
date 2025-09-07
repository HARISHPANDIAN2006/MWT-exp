import { useState } from "react";
import bgVideo from "/Vibe_coding_video.mp4";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phno: "",
    email: "",
    username: "",
    dob: "",
    userType: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [currentStep, setCurrentStep] = useState("Fill in your details");

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
     setCurrentStep("Sending OTP...");

    try {
      const res = await fetch("http://localhost:5000/api/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // send all form data
      });

      const data = await res.json();

      if (res.ok) {
        setCurrentStep("✅ OTP sent! Redirecting to OTP page...");

        // Redirect to OTP page with email + formData
        localStorage.setItem("pendingSignup", JSON.stringify(formData));
        // store temporarily in localStorage
        setInterval(()=>window.location.href = "/loginsignup/otp",1500); // go to OTP page
      } else {
        alert(`❌ ${data.message}`);
        setCurrentStep(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Something went wrong. Please try again.");
      setCurrentStep("❌ Something went wrong. Please try again.");
    }
  };


  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Signup Form */}
      <div className="flex justify-center items-center h-full relative z-10 p-4">
        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 w-full max-w-md text-white shadow-lg border-2 border-white">
          <h2 className="text-3xl font-bold text-center mb-3">Create Account</h2>
          {/* ✅ Current Step Message */}
          <p className="text-center text-yellow-300 font-semibold mb-6">
            {currentStep}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="tel"
                name="phno"
                placeholder="Phone Number"
                value={formData.phno}
                onChange={handleChange}
                required
                className="p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
            </div>

            {/* Username & DOB */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="p-2 bg-transparent border border-white rounded-md text-white"
              />
            </div>

            {/* User Type */}
            <div className="space-y-1">
              <label className="text-sm">User Type</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="user"
                    checked={formData.userType === "user"}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="provider"
                    checked={formData.userType === "provider"}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Provider
                </label>
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-1">
              <label className="text-sm">Gender</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 cursor-pointer select-none"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-2.5 right-3 cursor-pointer select-none"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-semibold"
            >
              Sign Up
            </button>

            <p className="text-center text-sm mt-3">
              Already registered?{" "}
              <a
                href="/loginsignup/login"
                className="text-blue-300 hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
