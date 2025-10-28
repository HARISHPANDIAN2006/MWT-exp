import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddBusinessPage = () => {
  const { userId } = useParams();
  const api = import.meta.env.VITE_SERVER_URL;

  // -------------------- STATES --------------------
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    providerId: userId,
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
    serviceType: "",
    address: "",
    area: "",
    city: "",
    pincode: "",
    landmark: "",
    mapLink: "",
    phone: "",
    whatsapp: "",
    ownerName: "",
    verified: false,
    gstin: "",
    highlights: [],
    images: [],
    videoTour: "",
    totalPhotos: "",
    photoCategories: [],
    services: [],
    exploreCategories: [],
    faq: [],
    relatedListings: [],
  });

  // -------------------- FETCH CATEGORIES --------------------
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
  }, [api]);

  // -------------------- HANDLERS --------------------
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubcategory(null);
  };

  const handleSelectSubcategory = (sub) => {
    setSelectedSubcategory(sub);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  // -------------------- SUBMIT --------------------
  const handleSubmit = async () => {
    const submission = {
      mainCategoryId: selectedCategory?._id?.$oid || selectedCategory?._id,
      subCategoryId: selectedSubcategory?._id?.$oid || selectedSubcategory?._id,
      name: formData.name,
      providerId: userId,
      rating: formData.rating || 0,
      numRatings: formData.numRatings || 0,
      status: formData.status || "Not Verified",
      claimed: formData.claimed || false,
      isOpen: formData.isOpen ?? true,
      operatingHours: formData.operatingHours || "9:00 AM - 11:00 PM",

      media: {
        mainImages: (formData.images || []).map((url) => ({ url, alt: formData.name })),
        totalPhotos: Number(formData.totalPhotos) || 0,
        photoCategories: formData.photoCategories || [],
        videoTour: formData.videoTour || "",
      },

      overview: {
        description: formData.description,
        establishedYear: Number(formData.establishedYear) || null,
        facilities: formData.facilities || [],
        capacity: {
          minGuests: Number(formData.capacity.minGuests) || 0,
          maxGuests: Number(formData.capacity.maxGuests) || 0,
        },
        priceRange: formData.priceRange,
        availableFor: formData.availableFor || [],
        website: formData.website,
        email: formData.email,
        occasion: formData.occasions || [],
        services: formData.services || [],
        exploreCategories: formData.exploreCategories || [],
        relatedListings: formData.relatedListings || [],
        faq: formData.faq || [],
        contact: formData.contact,
      },

      locationDetails: {
        address: formData.address,
        area: formData.area,
        city: formData.city,
        pincode: formData.pincode,
        landmark: formData.landmark,
        mapLink: formData.mapLink,
      },

      contactDetails: {
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        email: formData.email,
        ownerName: formData.ownerName,
        verified: formData.verified,
        gstin: formData.gstin,
      },

      highlights: formData.highlights || [],
    };

    try {
      const res = await fetch(`${api}/businesslist/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      const result = await res.json();
      console.log("✅ Business added:", result);
      alert("Business successfully added!");
      setFormData({});
      setStep(1);
    } catch (err) {
      console.error("❌ Error submitting business:", err);
      alert("Failed to add business. Check console for details.");
    }
  };

  // -------------------- JSX --------------------
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Add New Business</h1>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
          <div
            key={s}
            className={`w-10 h-10 flex items-center justify-center rounded-full border ${
              step === s
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-gray-200 text-gray-600 border-gray-300"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* STEP 1: Main Category */}
      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold mb-3">Select Main Category</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat) => {
              if (!cat._id) return null;
              const catId = cat._id.$oid || cat._id;
              return (
                <div
                  key={catId}
                  className={`border rounded-lg p-4 cursor-pointer transition-shadow ${
                    selectedCategory === cat
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

      {/* STEP 2: Subcategory */}
      {step === 2 && selectedCategory && (
        <>
          <h2 className="text-xl font-semibold mb-3">Select Subcategory</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {selectedCategory.subCategories?.map((sub) => {
              if (!sub._id) return null;
              const subId = sub._id.$oid || sub._id;
              return (
                <div
                  key={subId}
                  className={`border rounded-lg p-4 cursor-pointer transition-shadow ${
                    selectedSubcategory === sub
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

      {/* STEP 3: Business Info */}
      {step === 3 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Business Information</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Business Name" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="establishedYear" placeholder="Established Year" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="priceRange" placeholder="Price Range" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="website" placeholder="Website" onChange={handleInputChange} className="border p-2 rounded" />
            <textarea name="description" placeholder="Description" onChange={handleInputChange} className="border p-2 rounded sm:col-span-2" />
          </div>

          <div className="mt-6 flex justify-between">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>
            <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next → Location</button>
          </div>
        </>
      )}

      {/* STEP 4: Location */}
      {step === 4 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Location Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="address" placeholder="Address" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="city" placeholder="City" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="area" placeholder="Area" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="pincode" placeholder="Pincode" onChange={handleInputChange} className="border p-2 rounded" />
          </div>

          <div className="mt-6 flex justify-between">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>
            <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next → Contact</button>
          </div>
        </>
      )}

      {/* STEP 5: Contact */}
      {step === 5 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="whatsapp" placeholder="Whatsapp" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="email" placeholder="Email" onChange={handleInputChange} className="border p-2 rounded" />
            <input name="ownerName" placeholder="Owner Name" onChange={handleInputChange} className="border p-2 rounded" />
          </div>

          <div className="mt-6 flex justify-between">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>
            <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next → Highlights</button>
          </div>
        </>
      )}

      {/* STEP 6: Highlights */}
      {step === 6 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Highlights</h2>
          <input
            placeholder="Enter highlights separated by commas"
            onChange={(e) => handleArrayInput("highlights", e.target.value)}
            className="border p-2 rounded w-full"
          />

          <div className="mt-6 flex justify-between">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>
            <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next → Media</button>
          </div>
        </>
      )}

      {/* STEP 7: Media */}
      {step === 7 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Media</h2>
          <input
            placeholder="Image URLs separated by commas"
            onChange={(e) => handleArrayInput("images", e.target.value)}
            className="border p-2 rounded w-full mb-3"
          />
          <input
            placeholder="Video Tour URL"
            name="videoTour"
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />

          <div className="mt-6 flex justify-between">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>
            <button onClick={handleNext} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next → Services</button>
          </div>
        </>
      )}

      {/* STEP 8: Services */}
      {step === 8 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Services & Final Step</h2>
          <input
            placeholder="Enter services separated by commas"
            onChange={(e) => handleArrayInput("services", e.target.value)}
            className="border p-2 rounded w-full"
          />

          <div className="mt-6 flex justify-between">
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              ✅ Submit Business
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddBusinessPage;
