import React, { useEffect, useState } from "react";
import OfflineToggleButton from "../Components/OfflineToggleButton";
import BusinessHeaderSection from "../JustDialHome/BusinessHeaderSection";
import BusinessServicesSection from "../JustDialHome/BusinessServiceSection";
import BusinessCategorySection from "../JustDialHome/BusinessCategorySection";
import BusinessCategories from "../JustDialHome/BusinessCatgories";
import BusinessFooterSection from "../JustDialHome/BusinessFooterSection";

const JustDialPages = () => {
  const [search, setSearch] = useState("");
  const [businesses, setBusinesses] = useState([]);

  // Fetch businesses from backend
  useEffect(() => {
    fetch("http://localhost:5024/api/businesses")
      .then(res => res.json())
      .then(data => setBusinesses(data))
      .catch(err => console.error("Error fetching businesses:", err));
  }, []);

  const filtered = businesses.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <OfflineToggleButton/>
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <BusinessHeaderSection />

      {/* Categories */}
      <BusinessServicesSection />

      {/* Business Listings */}
      <BusinessCategorySection />
      <BusinessCategories />
      

      <BusinessFooterSection />
    </div>
    </>
  );
};

export default JustDialPages;
