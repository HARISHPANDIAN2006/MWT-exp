// src/components/ForgetForm.jsx
import React, { useState, useEffect } from "react";
import videoBg from "/Vibe_coding_video.mp4"; // adjust path as needed

const ForgetForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // OTP timer effect
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const sendOTP = async () => {
    if (!username || !email || !phno) {
      setMessage("All fields are required!");
      return;
    }

    // Simulate API call
    setMessage("✅ OTP sent successfully!");
    setOtpSent(true);
    setTimeLeft(60);
  };

  const verifyOTP = async () => {
    if (!otp) {
      setMessage("Please enter OTP!");
      return;
    }
    // Simulate verification
    if (otp === "1234") {
      setMessage("✅ OTP Verified!");
      setOtpVerified(true);
      setTimeLeft(0);
    } else {
      setMessage("❌ Invalid OTP!");
    }
  };

  const resetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setMessage("Both password fields are required!");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Simulate reset
    setMessage("✅ Password reset successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/login"; // replace with React Router if used
    }, 2000);
  };

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  };

  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Form */}
      <div className="flex justify-center items-center h-full relative z-10 px-4">
        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border-2 border-white shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Forgot Password
          </h2>

          <p
            className={`text-sm text-center mb-4 h-5 ${
              message.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>

          {/* Username, Email, Phone */}
          {!otpSent && !otpVerified && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
                className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                onClick={sendOTP}
                disabled={otpSent && timeLeft > 0}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold disabled:opacity-50"
              >
                Send OTP
              </button>

              {timeLeft > 0 && (
                <p className="text-sm text-red-400 text-center">
                  OTP expires in {timeLeft}s
                </p>
              )}
            </div>
          )}

          {/* OTP Section */}
          {otpSent && !otpVerified && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={verifyOTP}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold"
              >
                Verify OTP
              </button>
            </div>
          )}

          {/* Password Reset Section */}
          {otpVerified && (
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="password"
                  id="newpassword"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  className="absolute top-2.5 right-3 cursor-pointer"
                  onClick={() => togglePassword("newpassword")}
                >
                  👁️
                </span>
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 bg-transparent border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  className="absolute top-2.5 right-3 cursor-pointer"
                  onClick={() => togglePassword("confirmpassword")}
                >
                  👁️
                </span>
              </div>

              <button
                onClick={resetPassword}
                className="w-full py-2 bg-green-600 hover:bg-green-700 transition rounded-md font-semibold"
              >
                Reset Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetForm;
