import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterSection from "../HomeSections/FooterSection";

const SubcategoryInfo = () => {
  const { subId } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/subcategories/${subId}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, [subId]);

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Back Button */}
        <div className="fixed z-50 mx-5 my-5">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            ← Back
          </button>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-16 px-10 text-center shadow-md">
          <h1 className="text-4xl font-bold mb-3 tracking-wide">
            Find Your Perfect Expert
          </h1>
          <p className="text-lg opacity-90">
            Skilled professionals ready to deliver quality work
          </p>
        </div>

        {/* Users Section */}
        <section className="px-12 my-12">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Available Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 border border-gray-100"
                >
                  {/* Avatar */}
                  <div className="flex flex-col items-center p-6">
                    <img
                      src={user.image || "https://via.placeholder.com/150"}
                      alt={user.name}
                      className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-indigo-100"
                    />
                    <h3 className="mt-4 font-bold text-lg text-gray-900">
                      {user.name}
                    </h3>
                    <p className="text-gray-500 text-sm text-center mt-1">
                      {user.description || "Experienced professional ready to help"}
                    </p>

                    {/* Rating + Price */}
                    <div className="flex justify-between items-center w-full mt-4">
                      <span className="text-yellow-500 font-medium">
                        ⭐ {user.rating || "4.9"}
                      </span>
                      <span className="font-semibold text-indigo-600">
                        From ₹{user.price || "5000"}
                      </span>
                    </div>

                    {/* Action Button */}
                    <button className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm shadow hover:bg-indigo-700 transition">
                      View Profile
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No users available for this subcategory
              </p>
            )}
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default SubcategoryInfo;
