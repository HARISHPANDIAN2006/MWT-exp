import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BusinessShowcase = () => {
  // Image slider data
  const slides = [
    {
      id: 1,
      title: "Get Loan Against Property",
      subtitle: "At a competitive interest rate starting from",
      rate: "9.00%",
      company: "from Jio Finance Limited",
      image: "https://cdn.pixabay.com/photo/2016/03/31/19/56/woman-1299083_960_720.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jio_logo.png"
    },
    {
      id: 2,
      title: "Grow Your Business",
      subtitle: "Apply for Instant Business Loans at",
      rate: "7.5%",
      company: "No Collateral Needed",
      image: "https://cdn.pixabay.com/photo/2016/03/31/19/56/woman-1299083_960_720.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jio_logo.png"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Move manually
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const cards = [
    {
      title: "B2B",
      desc: "Quick Quotes",
      bg: "bg-blue-600",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    {
      title: "REPAIRS & SERVICE",
      desc: "Get Nearest Vendor",
      bg: "bg-indigo-700",
      img: "https://cdn.pixabay.com/photo/2017/03/28/12/13/man-2188418_960_720.jpg"
    },
    {
      title: "REAL ESTATE",
      desc: "Finest Agents",
      bg: "bg-blue-500",
      img: "https://cdn.pixabay.com/photo/2017/06/13/22/42/architecture-2404020_960_720.jpg"
    },
    {
      title: "DOCTORS",
      desc: "Book Now",
      bg: "bg-green-600",
      img: "https://cdn.pixabay.com/photo/2016/11/29/01/10/adult-1868750_960_720.jpg"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-8 p-6 overflow-x-auto no-scrollbar">
      {/* Image Slider */}
      <div className="relative w-[460px] h-[220px] bg-orange-50 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
        {/* Content */}
        <div className="absolute inset-0 px-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <img src={slides[current].logo} alt="logo" className="w-10 h-10 rounded-full" />
            <h2 className="font-bold text-lg text-gray-800">{slides[current].title}</h2>
          </div>
          <p className="text-gray-700 text-sm">{slides[current].subtitle}</p>
          <p className="text-orange-600 text-lg font-bold">{slides[current].rate}</p>
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

      {/* Other Cards */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-[200px] h-[220px] ${card.bg} text-white rounded-2xl flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex-shrink-0`}
        >
          <img src={card.img} alt={card.title} className="w-20 h-20 rounded-full mb-3 object-cover" />
          <h3 className="font-bold text-lg text-center">{card.title}</h3>
          <p className="text-sm text-center">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BusinessShowcase;
