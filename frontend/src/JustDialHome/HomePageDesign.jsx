import React from 'react';
// Assuming you have SVG icons or you'll replace these with actual image imports or icon components

const BillsAndRecharge = () => {
    // Array to hold the data for the Bills & Recharge icons
    const billServices = [
        { name: 'Mobile', icon: '📱' /* Replace with actual icon component or image */ },
        { name: 'Electricity', icon: '💡' },
        { name: 'DTH', icon: '📡' },
        { name: 'Water', icon: '💧' },
        { name: 'Gas', icon: '⛽' },
        { name: 'Insurance', icon: '☂️' },
    ];

    return (
        <section className="font-sans w-full py-8 px-4 md:px-8 bg-gray-50">
        <div className="bg-white border-b border-gray-200 w-full">
            <div className="flex flex-col items-start mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mr-2">Bills & Recharge</h2>
                <span className="text-sm font-medium text-gray-500">Bharat Connect</span> {/* This mimics the small logo/text */}
                <p className="text-gray-600 mb-4">Pay your bills & recharge instantly with Justdial</p>
                <a href="#" className="text-blue-600 font-medium hover:underline mb-8 block">Explore More</a>
            </div>

            {/* Grid for Bills & Recharge services */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-8">
                {billServices.map((service) => (
                    <div key={service.name} className="flex flex-col items-center cursor-pointer">
                        {/* Icon Container - mimicks the rounded square background */}
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-200">
                            {/* Replace the emoji with your actual SVG/Icon component */}
                            <span className="text-3xl md:text-4xl">{service.icon}</span>
                        </div>
                        <p className="mt-2 text-sm md:text-base text-gray-700 font-medium">{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

// ---

const TravelBookings = () => {
    // Array to hold the data for the Travel Bookings icons
    const travelServices = [
        { name: 'Flight', icon: '✈️', poweredBy: 'Powered By Easemytrip.com' },
        { name: 'Bus', icon: '🚌', poweredBy: 'Affordable Rides' },
        { name: 'Train', icon: '🚆', poweredBy: '' },
        { name: 'Hotel', icon: '🏨', poweredBy: 'Budget-friendly Stay' },
        { name: 'Car Rentals', icon: '🚗', poweredBy: 'Drive Easy Anywhere' },
    ];

    return (
        <div className="p-4 md:p-8 bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Travel Bookings</h2>
            <p className="text-gray-600 mb-4">Instant ticket bookings for your best travel experience</p>
            <a href="#" className="text-blue-600 font-medium hover:underline mb-8 block">Explore More</a>

            {/* Grid for Travel Bookings services */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 lg:gap-8">
                {travelServices.map((service) => (
                    <div key={service.name} className="flex flex-col items-center cursor-pointer">
                        {/* Icon Container - mimicks the rounded square background */}
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-200">
                            {/* Replace the emoji with your actual SVG/Icon component */}
                            <span className="text-3xl md:text-4xl">{service.icon}</span>
                        </div>
                        <p className="mt-2 text-sm md:text-base text-gray-700 font-medium">{service.name}</p>
                        {service.poweredBy && (
                            <p className="text-xs text-green-600 text-center mt-1">{service.poweredBy}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// ---

const HomePageDesign = () => {
    return (
        // The main container that holds both sections, mimicking the overall page structure
        <section className="font-sans max-w-6xl mx-auto py-8">
            <div className="bg-white rounded-xl shadow-lg p-0"> {/* Outer card-like container */}
                <BillsAndRecharge />
                {/* The horizontal line is naturally handled by the border-b in BillsAndRecharge's container div */}
                <TravelBookings />
            </div>
        </section>
    );
};

export default HomePageDesign;