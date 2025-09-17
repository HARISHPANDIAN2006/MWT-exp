import React, { useEffect, useState } from "react";
import OfflineToggleButton from "../Components/OfflineToggleButton";
import BusinessHeaderSection from "../JustDialHome/BusinessHeaderSection";
import BusinessServicesSection from "../JustDialHome/BusinessServiceSection";
import BusinessCategorySection from "../JustDialHome/BusinessCategorySection";
import BusinessCategories from "../JustDialHome/BusinessCatgories";

const JustDialPages = () => {
  const [search, setSearch] = useState("");
  const [businesses, setBusinesses] = useState([]);

  // Fetch businesses from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/businesses")
      .then(res => res.json())
      .then(data => setBusinesses(data))
      .catch(err => console.error("Error fetching businesses:", err));
  }, []);

  const filtered = businesses.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <OfflineToggleButton/>
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <BusinessHeaderSection />

      {/* Categories */}
      <BusinessServicesSection />

      {/* Business Listings */}
      <BusinessCategorySection />
      <BusinessCategories />
      <section className="p-6">
        <h2 className="text-lg font-bold mb-4">Available Businesses</h2>
        {filtered.map((biz, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-4 rounded-lg mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{biz.name}</h3>
              <p className="text-gray-600">{biz.category}</p>
              <p className="text-sm">{biz.address}</p>
              <p className="text-yellow-600">⭐ {biz.rating}</p>
            </div>
            <a href={`tel:${biz.phone}`} className="bg-green-500 text-white px-4 py-2 rounded">
              📞 Call Now
            </a>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 JustDial Clone | Full-Stack App
      </footer>
    </div>
    </>
  );
};

export default JustDialPages;
