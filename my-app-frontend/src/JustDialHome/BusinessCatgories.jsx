import React, { useEffect, useState } from "react";

const BusinessCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      {categories.map((cat) => (
        <div key={cat._id} className="mb-8">
          {/* Main Category */}
          <h2 className="text-2xl font-bold mb-4">{cat.mainCategory}</h2>

          {/* Sub Categories */}
          <div className="grid grid-cols-3 gap-6">
            {cat.subCategories.map((sub, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-4 hover:scale-105 transition"
              >
                <img
                  src={sub.path}
                  alt={sub.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-3 text-center">
                  {sub.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessCategories;
