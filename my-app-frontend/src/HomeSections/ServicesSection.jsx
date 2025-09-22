import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5024/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <section className="px-10 mt-12 pt-12 bg-white">
      <div className="flex gap-4 items-center">
        {services.length > 0 ? (
          services.map((service, index) => (
            <Link key={index} to={`/services/${service._id}`}>
              <div className="bg-white text-black rounded-2xl shadow-lg border-black border-2 w-50 p-3 hover:scale-105 transition flex flex-col items-center justify-between cursor-pointer">
                <h3 className="font-bold text-md mb-3">{service.title}</h3>
                <img
                  src={service.homeImage || "https://picsum.photos/400/250"}
                  className="rounded-xl"
                  alt={service.title}
                />
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
