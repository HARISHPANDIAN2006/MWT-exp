import React from "react";
import { Search, Mic, MapPin } from "lucide-react";

const BusinessHeaderSection = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-around mx-5 py-5">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-600">Serv</span>
            <span className="text-orange-500">izio</span>
          </h1>
        </div>

        {/* Middle Section - Search */}
        <div className="flex flex-col ml-8">
          <p className="text-lg font-semibold">
            Search across{" "}
            <span className="text-blue-600">4.9 Crore+</span> Businesses
          </p>
          <div className="flex mt-2 items-center">
            {/* Location Input */}
            <label htmlFor="location"><MapPin size={28} className="text-orange-400 mr-3" /></label>
            <div className="w-3/4">
              
              <input
                type="text"
                placeholder="Mumbai" id="location"
                className="border rounded-l-md py-1 pl-5 w-1/3 focus:outline-none text-xl"
              />
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for Spa & Salons"
                className=" border-x-black border-y-black border-1 py-1 pl-5 flex-1 focus:outline-none text-xl"
              />
            </div>
            {/* Mic + Search Button */}
            <button className="bg-white border-y border-l px-3 py-2 flex items-center">
              <Mic className="text-blue-600 w-6 h-6" />
            </button>
            <button className="bg-orange-500 text-white px-3 py-2 rounded-r-md flex items-center">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>


        <div className="flex text-md text-gray-700 justify-center gap-5 items-center">
          <select id="language" name="language">
            <option value="java" selected>English</option>
            <option value="python">Hindi</option>
            <option value="c">Tamil</option>
          </select>
          <a href="#">We are Hiring</a>
          <a href="#">Advertise</a>
          <a href="#" className="text-red-600 font-semibold">Free Listing</a>

        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
          Login / Sign Up
        </button>

      </div>
    </header>
  );
};

export default BusinessHeaderSection;
