import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BusinessHeaderSection from "./BusinessHeaderSection";

const AllCategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categories = location.state?.categories || [];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sort alphabetically
  const sortedCategories = [...categories].sort((a, b) =>
    a.mainCategory.localeCompare(b.mainCategory)
  );

  useEffect(() => {
    // Trigger fade-in animation on mount
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  setTimeout(() => setLoading(false), 2000);

  const openModal = (category) => {
    setSelectedCategory(category);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.body.style.overflow = "auto";
  };

  const handleSubcategoryClick = (sub) => {
    navigate(`/Businesssubcategory/${sub._id.$oid || sub._id}`);
    closeModal();
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Rotating Circles */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-4 border-blue-400 border-t-transparent rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-6 border-4 border-blue-200 border-t-transparent rounded-full animate-spin animation-delay-300"></div>
        </div>

        {/* Pulsating Text */}
        <div className="text-2xl font-extrabold text-black animate-pulse flex items-center">
          Loading Business Categories ...
        </div>

        {/* Bouncing Dots */}
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce animation-delay-150"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-300"></div>
        </div>
      </div>
    );

  return (
    <>
      <BusinessHeaderSection />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-8 px-6 sm:px-12">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          ← Back
        </motion.button>
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-md">
          Explore Business Categories
        </h1>

        {/* Category Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 transition-all duration-700 ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {sortedCategories.map((cat, index) => (
            <div
              key={cat._id}
              className="group relative overflow-hidden shadow-lg border border-gray-200 bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(cat)}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                src={cat.homeImage}
                alt={cat.mainCategory}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h2 className="text-lg font-semibold text-center py-3 bg-gray-100 text-gray-800 z-10 relative">
                {cat.mainCategory}
              </h2>
            </div>
          ))}
        </div>

        {/* Modal (Popup) */}
        {selectedCategory && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md z-50 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="relative bg-white shadow-3xl max-w-7xl w-11/12 md:w-3/4 rounded-2xl overflow-hidden animate-scaleIn flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 sticky top-0 z-10 shadow-2xl">
                <h2 className="text-3xl font-bold text-black">
                  {selectedCategory.mainCategory}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-4xl font-extrabold text-black hover:text-red-500 transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto px-6 py-6 relative">
                {/* Loading shimmer overlay */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center bg-white z-20"
                >
                  <div className="loader"></div>
                </motion.div>

                {/* Description */}
                <p className="text-black text-center mb-6 px-6 italic text-lg">
                  {selectedCategory.description}
                </p>

                {/* Subcategory Grid */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {selectedCategory.subCategories?.map((sub) => (
                    <motion.div
                      key={sub._id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-200 cursor-pointer rounded-lg transition-all duration-500"
                      onClick={() => handleSubcategoryClick(sub)}
                    >
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-36 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {sub.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {sub.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Loader animation style */}
            <style jsx>{`
      .loader {
        border: 5px solid #e5e7eb;
        border-top: 5px solid #4f46e5;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
          </div>
        )}



        {/* Animations */}
        <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.35s ease forwards;
        }
      `}</style>
      </div>
    </>
  );
};

export default AllCategoriesPage;
