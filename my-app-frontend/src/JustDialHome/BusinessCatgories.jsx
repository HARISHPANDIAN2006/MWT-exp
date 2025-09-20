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
      {/* Main Categories Grid */}
      <div className="grid grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="rounded-lg border p-6 shadow-md hover:shadow-xl transition"
          >
            {/* Main Category Title */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              {cat.mainCategory}
            </h2>

            {/* Sub Categories inside each main category */}
            <div className="grid grid-cols-2 gap-6">
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
    </div>
  );
};

export default BusinessCategories;
