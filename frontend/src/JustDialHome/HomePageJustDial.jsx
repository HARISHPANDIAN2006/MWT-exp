export default function HomePageJustDial() {
  const categories = [
    { name: "Restaurants", icon: "🍽️" },
    { name: "Hotels", icon: "🏨" },
    { name: "Beauty Spa", icon: "💆‍♀️" },
    { name: "Home Decor", icon: "🛋️" },
    { name: "Wedding Planning", icon: "💍" },
    { name: "Education", icon: "🎓" },
    { name: "Rent & Hire", icon: "🔑" },
    { name: "Hospitals", icon: "🏥" },
    { name: "Contractors", icon: "👷" },
    { name: "Pet Shops", icon: "🐾" },
    { name: "PG/Hostels", icon: "🛏️" },
    { name: "Estate Agent", icon: "🏘️" },
    { name: "Dentists", icon: "🦷" },
    { name: "Gym", icon: "🏋️‍♂️" },
    { name: "Loans", icon: "💰" },
    { name: "Event Organisers", icon: "🎉" },
    { name: "Driving Schools", icon: "🚗" },
    { name: "Packers & Movers", icon: "📦" },
    { name: "Courier Service", icon: "🚚" },
    { name: "Popular Categories", icon: "📋" },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center">

      {/* Categories */}
      <section className="max-w-full mt-8 bg-white p-6 rounded-xl shadow mx-5">
        <div className="grid grid-cols-10 gap-7">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-3 border-2 rounded-2xl hover:shadow-lg cursor-pointer"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="text-md font-medium text-gray-700 text-center">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
