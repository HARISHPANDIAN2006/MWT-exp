import React, { useEffect, useState } from "react";
import OfflineToggleButton from "../Components/OfflineToggleButton";
import BusinessHeaderSection from "../JustDialHome/BusinessHeaderSection";
import BusinessShowCase from "../JustDialHome/BusinessServiceSection";
import BusinessFooterSection from "../JustDialHome/BusinessFooterSection";
import HomePageJustDial from "../JustDialHome/HomePageJustDial";
import BusinessCategory from "../JustDialHome/BusinessCategory";
import HomePageDesign from "../JustDialHome/HomePageDesign";

const JustDialPages = () => {

  return (
    <>
    <OfflineToggleButton/>
    <div className="min-h-screen bg-gray-100">

      <BusinessHeaderSection />

      <BusinessShowCase />

      <HomePageJustDial/>

      <BusinessCategory />

      <HomePageDesign/>

      <BusinessFooterSection />
      
    </div>
    </>
  );
};

export default JustDialPages;
