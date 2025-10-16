import React, { useState, useEffect } from "react";

// --- Sample data for static sections ---
const dealsAndOffers = [
  "Kotak Mahindra Banks", "INOX Cinemas", "Canara Banks", "ICICI Banks", "HDFC Banks",
  "Sony", "Apple Store", "Croma", "McDonalds", "Beverly Hills Polo Club",
  "Max Stores", "Levi’s", "Reliance Digital", "Sweet Truth Cake Shops"
];

// --- Category Tabs ---
const categoryTabs = [
  "Accommodation", "Astrology", "Automobiles & Two Wheelers",
  "Beauty, Fitness & Sports", "Business & Legal",
  "Education", "Events & Weddings", "Food & Restaurants"
];

// --- Main Component ---
const ExploreSections = () => {
  const [activeCategory, setActiveCategory] = useState("Accommodation");
  const [popularSearches, setPopularSearches] = useState([]);

  // Simulate fetching dynamic data
  useEffect(() => {
    // Example dynamic category data (can replace with API call)
    const categoryData = {
      "Accommodation": [
        "AC Lodging Services", "Beach Resorts", "Bungalows On Hire", "Farm House", "Guest House",
        "Hostels For Men", "Hotels", "Resorts", "3 Star Hotels", "4 Star Hotels", "Water Park Resorts"
      ],
      "Astrology": [
        "Astrologers", "Numerologists", "Palmists", "Tarot Readers", "Vastu Consultants",
        "Gemstone Dealers", "Horoscope Matching Services"
      ],
      "Automobiles & Two Wheelers": [
        "Car Dealers", "Used Car Dealers", "Bike Showrooms", "Car Rental Services", "Tyre Dealers"
      ],
      "Beauty, Fitness & Sports": [
        "Gyms", "Yoga Classes", "Beauty Parlours", "Spa Services", "Sports Equipment Dealers"
      ],
      "Business & Legal": [
        "Chartered Accountants", "Lawyers", "GST Consultants", "Company Registration Services"
      ],
      "Education": [
        "Schools", "Colleges", "Coaching Centers", "Computer Training Institutes"
      ],
      "Events & Weddings": [
        "Wedding Planners", "Banquet Halls", "Caterers", "Photographers"
      ],
      "Food & Restaurants": [
        "Bakeries", "Cafes", "Fine Dining", "Fast Food", "Ice Cream Parlours"
      ]
    };

    setPopularSearches(categoryData[activeCategory] || []);
  }, [activeCategory]);

  return (
    <section className="px-12 bg-gray-50 text-gray-800">
      
      {/* --- Popular Categories --- */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-4">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                activeCategory === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Category Links */}
        <div className="text-sm leading-relaxed flex flex-wrap gap-x-2">
          {popularSearches.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item}
              {index < popularSearches.length - 1 && " |"}
            </a>
          ))}
        </div>
      </div>

      {/* --- Trending Searches --- */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Trending Searches</h2>
        <div className="text-sm flex flex-wrap gap-x-2 leading-relaxed">
          {[
            "English Medium Schools", "Packers And Movers", "Wedding Photographers",
            "Income Tax Consultants", "Pet Food Dealers", "Tutorials For UGC NET Exam",
            "Courier Services For USA", "Solar Panel Dealers", "Ayurvedic Doctors"
          ].sort().map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item}
              {index < 8 && " |"}
            </a>
          ))}
        </div>
      </div>

      {/* --- Deals and Offers --- */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Deals and Offers</h2>
        <div className="text-sm flex flex-wrap gap-x-2 leading-relaxed">
          {dealsAndOffers.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item}
              {index < dealsAndOffers.length - 1 && " |"}
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ExploreSections;
