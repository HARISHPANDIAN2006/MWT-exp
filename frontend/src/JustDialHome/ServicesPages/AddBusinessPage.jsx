import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddBusinessPage = () => {
    const { userId } =useParams()
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        // Step 3: Business Details
        name: "",
        providerId:userId,
        rating: 0,
        numRatings: 0,
        status: "Not Verified",
        claimed: false,
        isOpen: true,
        operatingHours: "9:00 AM - 11:00 PM",
        description: "",
        establishedYear: "",
        facilities: [],
        capacity: { minGuests: "", maxGuests: "" },
        priceRange: "",
        availableFor: [],
        website: "",
        email: "",
        contact: "",
        occasions: [],
        serviceType: "", // dynamic per service

        // Step 4: Location
        address: "",
        area: "",
        city: "",
        pincode: "",
        landmark: "",
        mapLink: "",

        // Step 5: Contact
        phone: "",
        whatsapp: "",
        ownerName: "",
        verified: false,
        gstin: "",

        // Step 6: Highlights
        highlights: [],

        // Step 7: Media
        images: [],
        videoTour: "",
        totalPhotos: "",
        photoCategories: [],

        // Step 8: Services / Additional
        services: [],
        exploreCategories: [],
        faq: [],
        relatedListings: [],
    });

    const api = import.meta.env.VITE_SERVER_URL || "http://localhost:5024";

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${api}/business`);
                const data = await res.json();
                setCategories(data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };
        fetchCategories();
    }, []);

    // Handlers
    const handleSelectCategory = (cat) => {
        setSelectedCategory(cat);
        setSelectedSubcategory(null);
    };

    const handleSelectSubcategory = (sub) => {
        setSelectedSubcategory(sub);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleArrayInput = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value.split(",").map((v) => v.trim()),
        }));
    };

    const handleNext = () => {
        if (step === 1 && !selectedCategory) {
            alert("Please select a main category!");
            return;
        }
        if (step === 2 && !selectedSubcategory) {
            alert("Please select a subcategory!");
            return;
        }
        setStep(step + 1);
    };

    const handlePrev = () => setStep(step - 1);

    const handleSubmit = () => {
        const submission = {
            mainCategoryId: selectedCategory._id.$oid || selectedCategory._id,
            subCategoryId: selectedSubcategory._id.$oid || selectedSubcategory._id,
            ...formData,
        };
        console.log("Form Submission:", submission);
        alert("Form submitted! Check console for data.");
        // send submission to backend API
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10">
            <h1 className="text-2xl font-bold mb-6">Add New Business</h1>

            {/* Stepper */}
            <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s, i) => (
                    <div
                        key={i}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border ${step === s ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
                            }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>

            {/* Step 1: Main Category */}
            {step === 1 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Select Main Category</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {categories.map((cat) => {
                            if (!cat._id) return null;
                            const catId = cat._id.$oid || cat._id;
                            return (
                                <div
                                    key={catId}
                                    className={`border rounded-lg p-4 cursor-pointer transition-shadow ${selectedCategory === cat
                                            ? "border-blue-500 shadow-lg"
                                            : "border-gray-200 hover:shadow-md"
                                        }`}
                                    onClick={() => handleSelectCategory(cat)}
                                >
                                    <img
                                        src={cat.homeImage}
                                        alt={cat.mainCategory}
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                    <h3 className="font-semibold">{cat.mainCategory}</h3>
                                    <p className="text-sm text-gray-600">{cat.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Subcategory
                        </button>
                    </div>
                </>
            )}

            {/* Step 2: Subcategory */}
            {step === 2 && selectedCategory && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Select Subcategory</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {selectedCategory.subCategories?.map((sub) => {
                            if (!sub._id) return null;
                            const subId = sub._id.$oid || sub._id;
                            return (
                                <div
                                    key={subId}
                                    className={`border rounded-lg p-4 cursor-pointer transition-shadow ${selectedSubcategory === sub
                                            ? "border-blue-500 shadow-lg"
                                            : "border-gray-200 hover:shadow-md"
                                        }`}
                                    onClick={() => handleSelectSubcategory(sub)}
                                >
                                    <img
                                        src={sub.image}
                                        alt={sub.title}
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                    <h4 className="font-medium">{sub.title}</h4>
                                    <p className="text-sm text-gray-600">{sub.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Business Info
                        </button>
                    </div>
                </>
            )}

            {/* Step 3: Business Info */}
            {step === 3 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Business Details</h2>
                    <div className="grid gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Business Name"
                            className="border p-2 rounded"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="rating"
                            placeholder="Rating"
                            className="border p-2 rounded"
                            value={formData.rating}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="numRatings"
                            placeholder="Number of Ratings"
                            className="border p-2 rounded"
                            value={formData.numRatings}
                            onChange={handleInputChange}
                        />
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                        >
                            <option>Verified</option>
                            <option>Not Verified</option>
                        </select>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="claimed"
                                    checked={formData.claimed}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Claimed
                            </label>
                            <label className="ml-4">
                                <input
                                    type="checkbox"
                                    name="isOpen"
                                    checked={formData.isOpen}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Is Open
                            </label>
                        </div>
                        <input
                            type="text"
                            name="operatingHours"
                            placeholder="Operating Hours"
                            className="border p-2 rounded"
                            value={formData.operatingHours}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            className="border p-2 rounded"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="establishedYear"
                            placeholder="Established Year"
                            className="border p-2 rounded"
                            value={formData.establishedYear}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Facilities (comma separated)"
                            onChange={(e) => handleArrayInput("facilities", e.target.value)}
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Available For (comma separated)"
                            onChange={(e) => handleArrayInput("availableFor", e.target.value)}
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            className="border p-2 rounded"
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border p-2 rounded"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="contact"
                            placeholder="Contact Number"
                            className="border p-2 rounded"
                            value={formData.contact}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Occasions (comma separated)"
                            onChange={(e) => handleArrayInput("occasions", e.target.value)}
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Service Type / Category Type"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                        />
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Location
                        </button>
                    </div>
                </>
            )}

            {/* Step 4: Location Details */}
            {step === 4 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Location Details</h2>
                    <div className="grid gap-3">
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="border p-2 rounded"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="area"
                            placeholder="Area"
                            className="border p-2 rounded"
                            value={formData.area}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className="border p-2 rounded"
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            className="border p-2 rounded"
                            value={formData.pincode}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="landmark"
                            placeholder="Landmark"
                            className="border p-2 rounded"
                            value={formData.landmark}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="mapLink"
                            placeholder="Google Maps Link"
                            className="border p-2 rounded"
                            value={formData.mapLink}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Contact Details
                        </button>
                    </div>
                </>
            )}

            {/* Step 5: Contact Details */}
            {step === 5 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Contact Details</h2>
                    <div className="grid gap-3">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="border p-2 rounded"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="whatsapp"
                            placeholder="WhatsApp"
                            className="border p-2 rounded"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border p-2 rounded"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="ownerName"
                            placeholder="Owner Name"
                            className="border p-2 rounded"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                        />
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="verified"
                                checked={formData.verified}
                                onChange={handleInputChange}
                            />
                            Verified
                        </label>
                        <input
                            type="text"
                            name="gstin"
                            placeholder="GSTIN"
                            className="border p-2 rounded"
                            value={formData.gstin}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Highlights
                        </button>
                    </div>
                </>
            )}

            {/* Step 6: Highlights */}
            {step === 6 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Highlights / Features</h2>
                    <input
                        type="text"
                        placeholder="Highlights (comma separated)"
                        className="border p-2 rounded w-full mb-3"
                        onChange={(e) => handleArrayInput("highlights", e.target.value)}
                    />
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Media
                        </button>
                    </div>
                </>
            )}

            {/* Step 7: Media Upload */}
            {step === 7 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Media Upload</h2>
                    <div className="grid gap-3">
                        <input
                            type="text"
                            name="videoTour"
                            placeholder="Video Tour URL"
                            className="border p-2 rounded"
                            value={formData.videoTour}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Main Images URLs (comma separated)"
                            className="border p-2 rounded"
                            onChange={(e) => handleArrayInput("images", e.target.value)}
                        />
                        <input
                            type="number"
                            name="totalPhotos"
                            placeholder="Total Number of Photos"
                            className="border p-2 rounded"
                            value={formData.totalPhotos}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Photo Categories (format: Dining:5,Exterior:3)"
                            className="border p-2 rounded"
                            onChange={(e) => {
                                const categories = e.target.value.split(",").map((c) => {
                                    const [name, count] = c.split(":");
                                    return { name: name.trim(), count: Number(count.trim()) };
                                });
                                setFormData((prev) => ({ ...prev, photoCategories: categories }));
                            }}
                        />
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={() => setStep(step + 1)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Next → Additional Details
                        </button>
                    </div>
                </>
            )}

            {/* Step 8: Services / FAQs / Related Listings */}
            {step === 8 && (
                <>
                    <h2 className="text-lg font-semibold mb-3">Additional Details</h2>
                    <div className="grid gap-3">
                        <input
                            type="text"
                            placeholder="Services Offered (comma separated)"
                            className="border p-2 rounded"
                            onChange={(e) => handleArrayInput("services", e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Explore Categories (comma separated)"
                            className="border p-2 rounded"
                            onChange={(e) => handleArrayInput("exploreCategories", e.target.value)}
                        />
                        <textarea
                            placeholder="FAQs (format: Q1?::A1,Q2?::A2)"
                            className="border p-2 rounded"
                            onChange={(e) => {
                                const faqs = e.target.value.split(",").map((q) => {
                                    const [question, answer] = q.split("::");
                                    return { q: question.trim(), a: answer.trim() };
                                });
                                setFormData((prev) => ({ ...prev, faq: faqs }));
                            }}
                        />
                        <textarea
                            placeholder="Related Listings (format: Name:Rating:Distance:Location)"
                            className="border p-2 rounded"
                            onChange={(e) => {
                                const related = e.target.value.split(",").map((r) => {
                                    const [name, rating, distance, location] = r.split(":");
                                    return {
                                        name: name.trim(),
                                        rating: Number(rating.trim()),
                                        distance: distance.trim(),
                                        location: location.trim(),
                                    };
                                });
                                setFormData((prev) => ({ ...prev, relatedListings: related }));
                            }}
                        />
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Submit Business
                        </button>
                    </div>
                </>
            )}

        </div>
    );
};

export default AddBusinessPage;
