import React from "react";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      {/* Background Video */}
      <video autoPlay muted loop className="video-bg">
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className="flex justify-evenly items-center py-6 bg-white text-black shadow fixed top-0 left-0 w-full z-10">
        <div className="text-4xl font-bold text-green-600">Servizio</div>
        <div className="flex items-center space-x-8 text-sm font-semibold">
          <a href="#" className="hover:underline">
            Activate Pro
          </a>
          <a href="#" className="hover:underline">
            Explore
          </a>
          <a href="#" className="hover:underline">
            Become a Seller
          </a>
          <a href="/login">
            <button className="border-2 px-4 py-1 rounded hover:bg-green-600 hover:text-white transition">
              Sign in
            </button>
          </a>
          <a href="/signup">
            <button className="border-2 px-4 py-1 rounded hover:bg-green-600 hover:text-white transition">
              Join
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center h-[80vh] px-24 relative z-5 mt-5">
        <h1 className="text-8xl font-bold mb-8 drop-shadow-lg font-sans text-outline-white">
          Our freelancers <br /> will take it from here
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-5xl flex bg-white rounded-2xl overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search for any service..."
            className="flex-grow px-8 py-3 text-black focus:outline-none"
          />
          <button className="bg-black text-white px-4 py-2 flex items-center justify-center text-xl">
            🔍
          </button>
        </div>

        {/* Popular Services */}
        <div className="mt-6 flex flex-wrap gap-3 justify-start text-lg">
          {[
            "Website development",
            "Architecture & Interior design",
            "UGC videos",
            "Video editing",
            "Vibe coding",
          ].map((service, index) => (
            <button
              key={index}
              className="bg-black text-white px-4 py-2 shadow hover:bg-white hover:text-black hover:border-black border-2 border-white rounded-2xl"
            >
              {service}
            </button>
          ))}
        </div>
      </section>

      {/* Brand Logos */}
      <section className="flex justify-start pl-24 -mt-24">
        <div className="flex justify-start gap-12 px-8 bg-black py-5 rounded-2xl shadow-lg">
          <span>
            <img src="images/meta.png" alt="Meta" className="w-14 h-7" />
          </span>
          <span>
            <img src="images/google.png" alt="Google" className="w-14 h-8" />
          </span>
          <span>
            <img src="images/netflix.png" alt="Netflix" className="w-14 h-7" />
          </span>
          <span>
            <img src="images/p&g.png" alt="P&G" className="w-10 h-6" />
          </span>
          <span>
            <img src="images/paypal.png" alt="PayPal" className="w-14 h-8" />
          </span>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 110%;
          object-fit: cover;
          z-index: -1;
        }
        .text-outline-white {
          -webkit-text-stroke: 2px white;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
