import React, { useState } from "react";
import sampleImg from "./assets/image.png";
import { Link, Outlet } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center relative bg-gray-100">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src="/Homevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-0"></div>

      {/* Signup/Login Box */}
      <div className="flex w-[90%] max-w-5xl bg-white rounded-lg shadow-md overflow-hidden z-10 border-black border-2">
        {/* Left Content */}
        <div className="w-1/2 bg-[#7B2D43] text-white p-10 hidden md:block">
          <h2 className="text-3xl font-bold mb-6">Success starts here</h2>
          <ul className="space-y-2 text-lg">
            <li>✓ Over 700 categories</li>
            <li>✓ Quality work done faster</li>
            <li>✓ Access to talent and businesses across the globe</li>
          </ul>
          <img src={sampleImg} alt="work" className="mt-10 rounded-lg" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-10 bg-white z-10 mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            {isLogin ? "Sign in into your Account" : "Create a new account"}
          </h2>
          <p className="text-sm mb-6">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 hover:underline"
                >
                  Join Here
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>

          {/* Social Buttons */}
          <div className="space-y-4">
            <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="google"
                className="mr-2"
              />{" "}
              Continue with Google
            </button>
            <Link to={isLogin ? "/loginsignup/login" : "/loginsignup/signup"}>
              <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-100">
                <img
                  src="https://img.icons8.com/color/24/email.png"
                  alt="email"
                  className="mr-2"
                />
                Continue with Email
              </button>
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t w-full"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="border-t w-full"></div>
          </div>

          {/* Apple + Facebook */}
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/ios-filled/24/mac-os.png"
                alt="apple"
                className="mr-2"
              />{" "}
              Apple
            </button>
            <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/fluency/24/facebook-new.png"
                alt="facebook"
                className="mr-2"
              />{" "}
              Facebook
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-6">
            By joining, you agree to the{" "}
            <a href="#" className="text-blue-700 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-700 underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Close Button */}
          <center>
            <button
              onClick={() => window.location.href = "/"}
              className="mt-6 px-6 py-2 bg-[#7B2D43] text-white rounded-lg hover:bg-red-400 transition duration-300 shadow-md"
            >
              Close
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
