import { useState } from "react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="Vibe_coding_video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Signup Form Container */}
      <div className="flex justify-center items-center h-full relative z-10 p-4">
        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 w-full max-w-md text-white shadow-lg border-2 border-white">
          <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
          <form action="/signup" method="POST" className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                required
                className="p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                required
                className="p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="tel"
                name="phno"
                placeholder="Phone Number"
                required
                className="p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
              />
            </div>

            {/* Username & DOB */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
              />
              <input
                type="date"
                name="dob"
                required
                className="p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
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
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
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
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full p-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
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
              <a href="/loginsignup/login" className="text-blue-300 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
