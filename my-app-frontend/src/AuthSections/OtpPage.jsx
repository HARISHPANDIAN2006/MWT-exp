import React, { useState, useEffect, useRef } from "react";
import bgVideo from "/Vibe_coding_video.mp4";

const OtpPage = ({ onVerified }) => {
  const storedData = JSON.parse(localStorage.getItem("pendingSignup") || "{}");
  const email = storedData.email;

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const firstInputRef = useRef(null);

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle OTP input
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && element.nextSibling) element.nextSibling.focus();
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) return alert("Enter a 6-digit OTP");

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert("✅ OTP Verified Successfully");
        localStorage.removeItem("pendingSignup");
        onVerified && onVerified();
        window.location.href = "/";
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      setLoading(false);
      console.error("Verify OTP error:", err);
      alert("Server error");
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (timeLeft > 0) return;
    try {
      setResending(true);
      const res = await fetch("http://localhost:5000/api/otp/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setResending(false);

      if (res.ok) {
        alert("📩 OTP resent successfully");
        setTimeLeft(60);
        setOtp(new Array(6).fill("")); // clear inputs
        if (firstInputRef.current) firstInputRef.current.focus();
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      setResending(false);
      console.error("Resend OTP error:", err);
      alert("Server error");
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

      {/* OTP Form Box */}
      <div className="flex justify-center items-center h-full relative z-10 p-4">
        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 w-full max-w-md text-white shadow-lg border-2 border-white text-center">
          <h2 className="text-3xl font-bold mb-4">Enter OTP</h2>
          <p className="mb-6">
            OTP sent to <b>{email}</b>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((val, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  value={val}
                  ref={idx === 0 ? firstInputRef : null}
                  onChange={(e) => handleChange(e.target, idx)}
                  className="w-12 h-14 text-xl text-center bg-transparent border border-white rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-semibold"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>

          <p className="mt-6 text-sm">
            ⏳ Expires in:{" "}
            <span className="text-red-400 font-semibold">{timeLeft}</span>s
          </p>

          <button
            onClick={handleResend}
            disabled={timeLeft > 0 || resending}
            className={`mt-5 text-white text-2xl hover:underline ${
              timeLeft > 0 || resending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {resending ? "Resending..." : "Resend OTP"}
          </button> <span className="text-2xl text-white px-5">|</span> <a href="/loginsignup/login" className="text-2xl mt-5 hover:underline text-white">Login</a>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
