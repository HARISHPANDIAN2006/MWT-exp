import React, { useEffect, useState } from "react";
import TipsSection from "./TipsSection";
import FooterSection from "../HomeSections/FooterSection";
import RemainingSection from "../HomeSections/RemainingSection";
import { useParams, useNavigate } from "react-router-dom";

const SubcategoryInfo = () => {
  const { subId } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  console.log("Subcategory ID from URL:", subId);

  useEffect(() => {
    fetch(`http://localhost:5000/api/subcategory/users/${subId}`)
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
        <div className="mt-16 px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Website Development
          </h2>
          <p className="text-gray-600 mb-6">
            Create, build, and develop your website with skilled website developers
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-4">
            {/* WordPress */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg"
                alt="WordPress"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">WordPress</span>
            </div>

            {/* Custom Websites */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://img.icons8.com/external-outline-juicy-fish/60/000000/external-coding-coding-and-development-outline-outline-juicy-fish.png"
                alt="Custom Websites"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">Custom Websites</span>
            </div>

            {/* Shopify */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png"
                alt="Shopify"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">Shopify</span>
            </div>

            {/* Wix */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://cdn.worldvectorlogo.com/logos/wix-com.svg"
                alt="Wix"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">Wix</span>
            </div>

            {/* Webflow */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://cdn.worldvectorlogo.com/logos/webflow-2.svg"
                alt="Webflow"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">Webflow</span>
            </div>

            {/* Squarespace */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-squarespace-285371.png"
                alt="Squarespace"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">Squarespace</span>
            </div>

            {/* WooCommerce */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:shadow-md transition">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-woocommerce-3521528-2945026.png"
                alt="WooCommerce"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-800">WooCommerce</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <select className="px-4 py-2 border rounded-lg text-gray-700">
              <option>Service options</option>
            </select>
            <select className="px-4 py-2 border rounded-lg text-gray-700">
              <option>Seller details</option>
            </select>
            <select className="px-4 py-2 border rounded-lg text-gray-700">
              <option>Budget</option>
            </select>
            <select className="px-4 py-2 border rounded-lg text-gray-700">
              <option>Delivery time</option>
            </select>

            {/* Toggles */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700">Pro services</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700">Instant response</span>
              <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full">
                New
              </span>
            </div>
          </div>
        </div>

        {/* Users Section */}
        <section className="px-20 my-12">
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
                  {/* Card Content */}
                  <div className="flex flex-col items-center p-6">
                    {/* Avatar */}
                    <img
                      src={user.image || "https://via.placeholder.com/150"}
                      alt={user.name}
                      className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-indigo-100"
                    />

                    {/* Name + Username */}
                    <h3 className="mt-4 font-bold text-lg text-gray-900">
                      {user.name}
                    </h3>

                    {/* Location + Availability */}
                    <div className="mt-3 text-sm text-gray-700 space-y-1">
                      <p><span className="font-medium">Location:</span> {user.location}</p>
                      <p><span className="font-medium">Availability:</span> {user.availability}</p>
                    </div>

                    {/* Rating, Price, Experience */}
                    <div className="flex justify-between items-center w-full mt-4 text-sm">
                      <span className="text-yellow-500 font-medium">⭐ {user.rating}</span>
                      <span className="font-semibold text-indigo-600">₹{user.price}</span>
                      <span className="text-gray-600">{user.experience} yrs exp</span>
                    </div>

                    {/* IDs (optional: show for debugging/admin only) */}
                    <div className="mt-4 text-xs text-gray-400 text-center break-words">
                      <p><b>UserId:</b> {user._id}</p>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => navigate(`/userprofile/${user._id}`)}
                      className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm shadow hover:bg-indigo-700 transition"
                    >
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
        {/* Explore More Services */}
        <section className="my-10 px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Explore More Website Development Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Website Design",
              "SEO",
              "Website Maintenance",
              "Website Migration",
              "Magento",
              "SiteBuilder",
              "Drupal",
              "Joomla",
              "Opencart",
              "BigCommerce",
              "Dropshipping website development",
              "Education website development",
              "Portfolio Website Development",
              "Blog website development",
              "E-commerce Website Development",
              "Job Board Website Development",
              "Landing Page Development",
              "Business website development",
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* Hire Freelancers */}
        <section className="my-8 px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Hire freelancers related to Website Development
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Elementor Pro experts",
              "WooCommerce experts",
              "Shopify developers",
              "Website designers",
              "Website developers",
              "Wordpress customization experts",
              "WordPress performance experts",
              "WordPress security experts",
              "Facebook ads experts",
              "Copywriters",
              "Sales copywriters",
              "Business website developers",
              "Website consultants",
              "Wix website designers",
              "Wix SEO experts",
              "Wordpress experts",
              "Wix code experts",
            ].map((expert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition"
              >
                {expert}
              </span>
            ))}
          </div>
        </section>
        <TipsSection />

        <div className="mt-0 bg-gray-50 py-4 px-20 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Website Development FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            {/* FAQ 1 */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What are website development services on Fiverr?
              </h3>
              <p className="mt-2 text-sm">
                Website development services on Fiverr include everything you need to create
                or revamp your online presence. Whether you're building a new site or updating
                an existing one, freelancers can handle it all—from simple blogs to complex
                eCommerce stores. They work with platforms like WordPress, Shopify, and Wix,
                ensuring your website is tailored to your needs.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What does a website developer do?
              </h3>
              <p className="mt-2 text-sm">
                Website developers cover backend and frontend needs—building your website’s
                architecture, designing UI/UX, customizing branding, and maintaining performance.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What are the stages of a website development project?
              </h3>
              <p className="mt-2 text-sm">
                The process starts with defining brand goals and design needs. From there, you
                can browse Fiverr freelancers, discuss your project, and select the right
                developer for your requirements.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What are the most popular website development platforms?
              </h3>
              <p className="mt-2 text-sm">
                Popular platforms include WordPress, Wix, Squarespace, and Shopify. Each has
                unique strengths—from WordPress’s flexibility to Shopify’s eCommerce features.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                How much does it cost to develop a website?
              </h3>
              <p className="mt-2 text-sm">
                Costs depend on size and features. A simple site can cost between $175 and $1000.
                To save money, use pre-built templates or hire a freelancer from a lower-cost region.
              </p>
            </div>

            {/* FAQ 6 */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What types of websites can I develop on Fiverr?
              </h3>
              <p className="mt-2 text-sm">
                Fiverr supports all types of websites—business sites, blogs, eCommerce, portfolios,
                landing pages, and more.
              </p>
            </div>
          </div>
        </div>

      </div>
      <RemainingSection />
      <FooterSection />
    </>
  );
};

export default SubcategoryInfo;
