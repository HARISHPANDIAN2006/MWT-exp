import React, { useEffect, useState } from "react";
import axios from "axios";

const BusinessCategory = () => {
  const [categories, setCategories] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:5024/api/business") // ✅ Your backend endpoint
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
        >
          {/* Main Category */}
          <h2 className="text-lg font-semibold mb-2">{category.mainCategory}</h2>

          {/* Subcategories */}
          <div className="flex gap-4 flex-wrap flex-1 justify-center items-center">
            {category.subCategories.map((sub, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-36 hover:scale-105 transition-transform"
              >
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="rounded-lg w-36 h-24 object-cover mb-2"
                />
                <p className="text-sm font-medium text-gray-700 text-center">
                  {sub.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessCategory;
