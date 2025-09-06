import React, { useState, useEffect } from "react";

const OtpPage = ({ onVerified }) => {
  // Get email from localStorage (set in signup page)
  const storedData = JSON.parse(localStorage.getItem("pendingSignup") || "{}");
  const email = storedData.email;

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

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

        // Clear pending signup from localStorage
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
    if (timeLeft > 0) return; // prevent spam
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-2">Enter OTP</h2>
        <p className="mb-4">
          OTP sent to <b>{email}</b>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-4">
            {otp.map((val, idx) => (
              <input
                key={idx}
                type="text"
                maxLength="1"
                value={val}
                onChange={(e) => handleChange(e.target, idx)}
                className="w-12 h-14 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          ⏳ Expires in:{" "}
          <span className="text-red-500 font-semibold">{timeLeft}</span>s
        </p>

        <button
          onClick={handleResend}
          disabled={timeLeft > 0 || resending}
          className={`mt-3 text-blue-600 hover:underline ${
            timeLeft > 0 || resending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {resending ? "Resending..." : "Resend OTP"}
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
