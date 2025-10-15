import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import b2b from "./assets/b2b.png"
import repairs from "./assets/repairs.png"

const BusinessShowcase = () => {
  // Image slider data
  const slides = [
    {
      id: 1,
      title: "Get Loan Against Property",
      subtitle: "At a competitive interest rate starting from",
      rate: "9.00%",
      company: "from Jio Finance Limited",
      image:
        "https://cdn.pixabay.com/photo/2016/03/31/19/56/woman-1299083_960_720.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jio_logo.png",
    },
    {
      id: 2,
      title: "Grow Your Business",
      subtitle: "Apply for Instant Business Loans at",
      rate: "7.5%",
      company: "No Collateral Needed",
      image:
        "https://cdn.pixabay.com/photo/2016/03/31/19/56/woman-1299083_960_720.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jio_logo.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(null); // ✅ Added

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Move manually
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const services = [
    {
      title: "B2B",
      subtitle: "Quick Quotes",
      color: "bg-[#EFDEC7]",
      img: b2b,
    },
    {
      title: "REPAIRS & SERVICES",
      subtitle: "Get Nearest Vendor",
      color: "bg-[#B3B3B3]",
      img: repairs,
    },
    {
      title: "REAL ESTATE",
      subtitle: "Finest Agents",
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
      img: "./assets/realestate.png",
    },
    {
      title: "DOCTORS",
      subtitle: "Book Now",
      color: "bg-gradient-to-r from-green-500 to-green-700",
      img: "./assets/doctors.png",
    },
    {
      title: "EDUCATION",
      subtitle: "Find Tutors",
      color: "bg-gradient-to-r from-pink-500 to-pink-700",
      img: "./assets/education.png",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-8 p-6 overflow-x-auto no-scrollbar">
      {/* Image Slider */}
      <div className="relative w-[460px] h-[290px] bg-orange-50 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
        {/* Content */}
        <div className="absolute inset-0 px-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={slides[current].logo}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="font-bold text-lg text-gray-800">
              {slides[current].title}
            </h2>
          </div>
          <p className="text-gray-700 text-sm">{slides[current].subtitle}</p>
          <p className="text-orange-600 text-lg font-bold">
            {slides[current].rate}
          </p>
          <p className="text-gray-600 text-sm mb-4">{slides[current].company}</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 w-fit">
            Apply Now →
          </button>
        </div>

        {/* Right Image */}
        <img
          src={slides[current].image}
          alt="slide"
          className="absolute right-0 bottom-0 h-full object-contain"
        />

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Expanding Service Cards */}
      <div className="flex gap-4 justify-center p-5">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className={`relative flex flex-col justify-between text-white rounded-xl cursor-pointer transition-all duration-300 overflow-hidden
            ${active === index ? "w-56" : "w-40"} h-72 ${service.color}`}
          >
            <div className="p-4">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm">{service.subtitle}</p>
            </div>
            <img
              src={service.img}
              alt={service.title}
              className="object-cover w-full h-40 mt-auto"
            />
            <div className="absolute bottom-4 right-4 text-xl">›</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessShowcase;
