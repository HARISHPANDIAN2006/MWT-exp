import React from "react";

const categories = [
  { title: "Restaurants", emoji: "🍴" },
  { title: "Hotels", emoji: "🏨" },
  { title: "Beauty Spa", emoji: "💆‍♀️" },
  { title: "Home Decor", emoji: "🛋️" },
  { title: "Wedding Planning", emoji: "💍" },
  { title: "Education", emoji: "🎓" },
  { title: "Rent & Hire", emoji: "🔑" },
  { title: "Hospitals", emoji: "🏥" },
  { title: "Contractors", emoji: "👷" },
  { title: "Pet Shops", emoji: "🐶" },
  { title: "PG/Hostels", emoji: "🛏️" },
  { title: "Estate Agent", emoji: "🏠" },
  { title: "Dentists", emoji: "🦷" },
  { title: "Gym", emoji: "🏋️" },
  { title: "Loans", emoji: "💰" },
  { title: "Event Organisers", emoji: "🎉" },
  { title: "Driving Schools", emoji: "🚗" },
  { title: "Packers & Movers", emoji: "📦" },
  { title: "Courier Service", emoji: "📮" },
  { title: "Popular Categories", emoji: "📂" },
];

const BusinessCategorySection = () => {
  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 text-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Square box */}
            <div className="w-20 h-20 flex items-center justify-center border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer bg-white">
              <span className="text-3xl">{category.emoji}</span>
            </div>
            {/* Text below with space */}
            <p className="mt-3 text-sm font-medium">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCategorySection;
