import React, { useState } from "react";

import b2bImg from "./assets/image.png";
import repaisImg from "./assets/repairs.jpg";
const services = [
  {
    title: "B2B",
    subtitle: "Quick Quotes",
    color: "bg-[#EFDEC7]",
    img: b2bImg,
  },
  {
    title: "REPAIRS & SERVICES",
    subtitle: "Get Nearest Vendor",
    color: "bg-[#B3B3B3]",
    img: repaisImg,
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

const BusinessServicesSection = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex gap-4 justify-center p-6">
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
  );
};

export default BusinessServicesSection;
