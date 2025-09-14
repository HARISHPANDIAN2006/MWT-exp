import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SampleImg from "./assets/image.png";
import FooterSection from "../HomeSections/FooterSection";
import FAQInfo from "./FAQInfo";
import TopList from "./TopList";

const ServiceInfo = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/services/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data))
            .catch((err) => console.error("Error fetching service:", err));
    }, [id]);

    if (!service) {
        return <p className="text-gray-500 p-6">Loading service...</p>;
    }

    return (
        <>
            <div className="bg-white">
                {/* Back Button */}
                <div className="fixed z-50 mx-5 my-5">
                    <button
                        onClick={() => navigate("/")}
                        className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                    >
                        ← Back to Home
                    </button>
                </div>
                {/* Banner Section */}
                <div className="bg-green-900 text-white py-16 px-10 text-center relative">
                    <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                    <p className="max-w-2xl mx-auto text-lg">{service.description}</p>
                </div>

                <TopList/>
                
                <section className="mx-20 my-10 bg-green-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow">

                    {/* Left Section */}
                    <div className="flex-1 space-y-4 ml-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Big development project? <span className="text-green-600">We’ll handle it</span>
                        </h2>
                        <p className="text-gray-700">
                            From freelancer sourcing to execution, work with a certified project manager who:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                ✅ Consistently manages large and small projects
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Was carefully selected and certified by our platform
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Has proven expertise in your project’s domain
                            </li>
                        </ul>
                        <div className="flex items-center gap-4 pt-4">
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition">
                                Book a free consultation
                            </button>
                            <span className="text-gray-600 flex items-center gap-1">
                                🛡️ Money-back guarantee
                            </span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="flex gap-4">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl shadow p-4 text-center w-30 h-30">
                                <img
                                    src={SampleImg}
                                    alt="Eugene"
                                    className="w-40 h-40 rounded-full mt-5 mx-auto"
                                />
                                <p className="mt-8 font-bold text-xl">Eugene Chern</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-xl shadow p-4 text-center w-30 h-30">
                                <img
                                    src={SampleImg}
                                    alt="Carolina"
                                    className="w-40 h-40 rounded-full mx-auto mt-5"
                                />
                                <p className="mt-8 font-bold text-xl">Carolina Cruz</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-xl shadow p-4 text-center w-30 h-30">
                                <img
                                    src={SampleImg}
                                    alt="Carolina"
                                    className="w-40 h-40 rounded-full mx-auto mt-5"
                                />
                                <p className="mt-8 font-bold text-xl">Viktor Musienko</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <hr />
                <hr />

                {/* Popular Subcategories */}
                <section className="px-10 mb-16 mt-12">
                    <h2 className="text-2xl font-bold mb-10">
                        Available Services under {service.title}
                    </h2>
                    <div className="grid grid-cols-4 gap-y-12">
                        {service.subcategories && service.subcategories.length > 0 ? (
                            service.subcategories.map((sub, index) => (
                                <div
                                    key={index}
                                    onClick={() => navigate(`/subcategory/${sub._id}`)}
                                    className="bg-white border rounded-lg shadow-md w-80 p-4 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition"
                                >
                                    <img
                                        src={sub.image || "https://picsum.photos/200"}
                                        alt={sub.title}
                                        className="w-20 h-20 mb-3 rounded-full object-cover"
                                    />
                                    <h3 className="font-bold text-lg">{sub.title}</h3>
                                    <p className="text-gray-500 text-sm font-semibold mt-2">{sub.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No subcategories available</p>
                        )}
                    </div>
                </section>
            </div>
            <FAQInfo/>
            <FooterSection />
        </>
    );
};

export default ServiceInfo;
