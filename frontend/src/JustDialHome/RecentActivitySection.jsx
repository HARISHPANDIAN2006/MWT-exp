import React from 'react';

// --- Card Components ---

// 1. Review/Activity Card (Left Side)
const ReviewCard = ({ bankName, location, logoUrl, reviewText, reviewerName }) => (
  <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white h-full flex flex-col">
    <h3 className="text-lg font-semibold text-gray-800 leading-snug">{bankName}</h3>
    <p className="text-xs text-gray-500 mb-4">{location}</p>
    
    <div className="flex-grow">
      {/* Logo/Image Area */}
      <div className="w-full h-28 mb-3 overflow-hidden rounded-md">
        <img src={logoUrl} alt={`${bankName} Logo`} className="w-full h-full object-cover" />
      </div>
      
      {/* Reviewer Info */}
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-gray-200">
          {/* Reviewer Profile Image Placeholder */}
          <img src="/path/to/profile_avatar.png" alt={reviewerName} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">{reviewerName}</p>
          <p className="text-xs text-gray-500">Wrote a review</p>
        </div>
      </div>

      {/* Star Rating Placeholder */}
      <div className="text-yellow-500 text-lg mb-2">★★★★★</div> 

      {/* Review Snippet */}
      <p className="text-sm text-gray-600 line-clamp-3">
        {reviewText}
      </p>
    </div>
  </div>
);

// 2. Loan/Service Offer Card (Middle)
const OfferCard = ({ serviceName, location, offerDetails, agentName }) => (
  <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white h-full flex flex-col">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-semibold text-gray-800 leading-snug">{serviceName}</h3>
      <div className="flex items-center bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
        {/* WhatsApp Icon Placeholder */}
        <span className="mr-1">💬</span> WhatsApp
      </div>
    </div>
    <p className="text-xs text-gray-500 mb-4">{location}</p>

    <div className="flex-grow">
      {/* Offer Image Area */}
      <div className="w-full h-28 mb-3 overflow-hidden rounded-md flex items-center justify-center relative">
        <img src="/path/to/loan_products_image.png" alt="Loan Products" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-lg md:text-xl">
          <span className="bg-blue-600 px-2 py-0.5 rounded">Two Wheeler Loan</span>
          <span className="bg-blue-600 px-2 py-0.5 rounded mt-1">Car Loan</span>
          <span className="bg-blue-600 px-2 py-0.5 rounded mt-1">Home Loan</span>
        </div>
      </div>
      
      {/* Agent Info & Review Snippet */}
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-gray-200">
          <img src="/path/to/agent_avatar.png" alt={agentName} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">{agentName}</p>
          <p className="text-xs text-gray-500">Wrote a review</p>
        </div>
      </div>
      
      <div className="text-yellow-500 text-lg mb-2">★★★★★</div> 
      <p className="text-sm text-gray-600 line-clamp-3">
        {offerDetails}
      </p>
    </div>
  </div>
);

// 3. Rating/Feedback Card (Right Side)
const RatingCard = ({ title, rating, numRatings, location, cardImageUrl }) => (
  <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white h-full">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">How would you rate your experience?</h3>
    
    {/* Item 1: Manju Estates */}
    <div className="flex mb-4">
      <div className="w-12 h-16 mr-3 flex-shrink-0">
        <img src={cardImageUrl} alt={title} className="w-full h-full object-cover rounded-sm" />
      </div>
      <div className="flex-grow">
        <p className="text-base font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mb-1">{location}</p>
        <div className="flex items-center mb-1">
          <span className="text-sm font-bold text-green-600 mr-1">{rating}</span>
          <span className="text-yellow-500 text-base">★</span>
          <span className="text-xs text-gray-500 ml-1">({numRatings} Ratings)</span>
        </div>
        <div className="flex space-x-2 text-xl text-gray-300 mb-1">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <button className="text-blue-600 text-xs font-medium hover:underline">Top to rate</button>
      </div>
    </div>
    
    {/* Item 2: Hotel Green Star Hospitality */}
    <div className="flex">
      <div className="w-12 h-16 mr-3 flex-shrink-0">
        <img src="/path/to/hotel_image.png" alt="Hotel Green Star" className="w-full h-full object-cover rounded-sm" />
      </div>
      <div className="flex-grow">
        <p className="text-base font-semibold text-gray-800">Hotel Green Star Hospitality</p>
        <p className="text-xs text-gray-500 mb-1">Malad, West</p>
        <div className="flex items-center mb-1">
          <span className="text-sm font-bold text-green-600 mr-1">4.2</span>
          <span className="text-yellow-500 text-base">★</span>
          <span className="text-xs text-gray-500 ml-1">(539 Ratings)</span>
        </div>
        <div className="flex space-x-2 text-xl text-gray-300 mb-1">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <button className="text-blue-600 text-xs font-medium hover:underline">Top to rate</button>
      </div>
    </div>
  </div>
);

// --- Main Section Component ---

const RecentActivitySection = () => {
  // Temporary Data for 6 items (2 rows of 3 columns)
  const activities = [
    // Row 1, Column 1 (Review Card)
    { 
      type: 'review', bankName: 'Tamilnad Mercantile Bank Ltd', location: 'Pasuvanthandai Road - Kovilpatti', 
      logoUrl: '/path/to/tmb_logo.png', reviewerName: 'v.selvakumar', 
      reviewText: "Tamilnad Mercantile Bank Ltd is a reliable and customer-friendly bank. The reasonable fees make it a great choice for banking services. The bank's commitment to excellence and accessible service is commendable.", 
    },
    // Row 1, Column 2 (Offer Card)
    { 
      type: 'offer', serviceName: 'Raja Home Loans...', location: 'Old Bus Stand Road - Kovilpatti', 
      agentName: 'Sivakumar', 
      offerDetails: "I had an excellent experience with Raja Home Loans Association, a banking and finance service provider. They had financial advisors available to assist me with my needs, and the process was smooth.",
    },
    // Row 1, Column 3 (Rating Card - Placeholder to match structure)
    { 
      type: 'rating', title: 'Manju Estates', location: 'Tardeo', rating: 4.8, numRatings: 1538, cardImageUrl: '/path/to/manju_estates_image.png' 
    },
    // Row 2, Column 1 (Review Card) - Duplicate for structure
    { 
      type: 'review', bankName: 'City Union Bank Ltd', location: 'Main Road - Madurai', 
      logoUrl: '/path/to/cub_logo.png', reviewerName: 'A.Priya', 
      reviewText: "City Union Bank offers excellent fixed deposit rates and their mobile banking is very convenient. I highly recommend them for personal banking services in the area.",
    },
    // Row 2, Column 2 (Offer Card) - Duplicate for structure
    { 
      type: 'offer', serviceName: 'Sai Motors Car Loan', location: 'Bypass Road - Virudhunagar', 
      agentName: 'R.Karthik', 
      offerDetails: "Got my car loan approved very quickly through Sai Motors. The interest rate was competitive, and the staff was very helpful in completing all the paperwork efficiently.",
    },
    // Row 2, Column 3 (Rating Card - Placeholder to match structure)
    { 
      type: 'rating', title: 'Ocean View Rentals', location: 'Bandra, West', rating: 4.5, numRatings: 890, cardImageUrl: '/path/to/ocean_view_image.png' 
    },
  ];

  // The first 6 items are displayed on this page
  const itemsToShow = activities.slice(0, 6); 

  return (
    <section className="p-4 md:p-8 bg-gray-50 font-sans">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>

      {/* 2 Rows of 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map((item, index) => {
          if (item.type === 'review') {
            return <ReviewCard key={index} {...item} />;
          }
          if (item.type === 'offer') {
            return <OfferCard key={index} {...item} />;
          }
          if (item.type === 'rating') {
            // Only the first rating card is fully defined in the image
            // We use the RatingCard component which contains the structure for two items
            // but we only render it for the column 3 spot.
            if (index === 2 || index === 5) {
              return <RatingCard key={index} {...item} />;
            }
          }
          return null;
        })}
      </div>

      {/* --- Load More Section --- */}
      <div className="mt-8 text-center">
        {/* Replace '#' with the actual path to the dedicated "All Recent Activity" page */}
        <a 
          href="/all-recent-activity" 
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Load More Recent Activity
        </a>
      </div>
    </section>
  );
};

export default RecentActivitySection;