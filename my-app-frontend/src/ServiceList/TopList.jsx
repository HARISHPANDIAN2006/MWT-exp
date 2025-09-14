import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopList() {
  const scrollRef = useRef(null);

  const categories = [
    { name: "Python Developers", icon: "🐍" },
    { name: "HTML & CSS Developers", icon: "</>" },
    { name: "JavaScript Developers", icon: "JS" },
    { name: "WordPress Developers", icon: "🌐" },
    { name: "Shopify Developers", icon: "🛒" },
    { name: "React Developers", icon: "⚛️" },
    { name: "PHP Developers", icon: "🐘" },
    { name: "Mobile App Developers", icon: "📱" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mt-10 px-20">
      <h2 className="text-2xl font-semibold mb-12">
        Most Popular in Programming & Tech
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="mx-8 mt-5 absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="mx-8 mt-5 absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-10 -mt-5"
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 min-w-[220px] px-4 py-3 border rounded-xl shadow-sm bg-white cursor-pointer hover:shadow-md transition"
          >
            <span className="text-lg">{cat.icon}</span>
            <p className="font-medium">{cat.name}</p>
            <span className="ml-auto text-gray-500">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
