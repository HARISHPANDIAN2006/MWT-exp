import React, { useEffect, useState } from "react";
import OfflineToggleButton from "../Components/OfflineToggleButton";

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
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">JustDial Clone</h1>
        <input
          type="text"
          placeholder="Search for services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded text-black w-1/2"
        />
      </header>

      {/* Categories */}
      <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Restaurants", "Hospitals", "Salons", "Hotels"].map((cat) => (
          <div
            key={cat}
            className="bg-white shadow-md p-4 rounded-lg text-center cursor-pointer hover:bg-blue-50"
          >
            {cat}
          </div>
        ))}
      </section>

      {/* Business Listings */}
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
