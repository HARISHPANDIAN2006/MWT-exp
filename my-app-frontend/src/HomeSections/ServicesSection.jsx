import React, { useState, useEffect } from "react";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services") // your backend endpoint
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <section className="px-10 mt-12 pt-12 bg-white">
      <div className="flex gap-6">
        {services.length > 0 ? (
          services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between"
            >
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <img
                src={service.image || "https://picsum.photos/400/250"} // fallback image
                className="rounded-xl"
                alt={service.title}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
