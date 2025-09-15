import React from "react";
import { Search, Mic } from "lucide-react";

const BusinessHeaderSection = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-600">Serv</span>
            <span className="text-orange-500">izio</span>
          </h1>
        </div>

        {/* Middle Section - Search */}
        <div className="flex flex-col flex-1 mx-8">
          <p className="text-sm font-semibold">
            Search across{" "}
            <span className="text-blue-600">4.9 Crore+</span> Businesses
          </p>
          <div className="flex mt-2">
            {/* Location Input */}
            <input
              type="text"
              placeholder="Mumbai"
              className="border rounded-l-md px-4 py-2 w-40 focus:outline-none"
            />
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for Spa & Salons"
              className="border-t border-b px-4 py-2 flex-1 focus:outline-none"
            />
            {/* Mic + Search Button */}
            <button className="bg-white border-y border-r px-3 flex items-center">
              <Mic className="text-blue-600 w-5 h-5" />
            </button>
            <button className="bg-orange-500 text-white px-3 rounded-r-md flex items-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="flex items-center gap-5 text-sm">
          <a href="#" className="hover:text-blue-600">
            EN
          </a>
          <a href="#" className="hover:text-blue-600">
            We are Hiring
          </a>
          <a href="#" className="hover:text-blue-600">
            Investor Relations
          </a>
          <a href="#" className="hover:text-blue-600">
            Leads
          </a>
          <a href="#" className="hover:text-blue-600">
            Advertise
          </a>
          <a
            href="#"
            className="hover:text-blue-600 border px-2 py-1 rounded-md text-xs font-semibold"
          >
            Free Listing
          </a>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md font-medium">
            Login / Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default BusinessHeaderSection;
