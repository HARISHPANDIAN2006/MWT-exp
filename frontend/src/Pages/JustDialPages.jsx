import React, { useEffect, useState } from "react";
import OfflineToggleButton from "../Components/OfflineToggleButton";
import BusinessHeaderSection from "../JustDialHome/BusinessHeaderSection";
import BusinessShowCase from "../JustDialHome/BusinessServiceSection";
import BusinessFooterSection from "../JustDialHome/BusinessFooterSection";
import HomePageJustDial from "../JustDialHome/HomePageJustDial";

const JustDialPages = () => {
  const [search, setSearch] = useState("");
  const [businesses, setBusinesses] = useState([]);

  // Fetch businesses from backend
  /*useEffect(() => {
    fetch("http://localhost:5024/api/businesses")
      .then(res => res.json())
      .then(data => setBusinesses(data))
      .catch(err => console.error("Error fetching businesses:", err));
  }, []);

  const filtered = businesses.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );*/

  return (
    <>
    <OfflineToggleButton/>
    <div className="min-h-screen bg-gray-100">

      <BusinessHeaderSection />

      <BusinessShowCase />

      <HomePageJustDial/>

      <BusinessFooterSection />
      
    </div>
    </>
  );
};

export default JustDialPages;
