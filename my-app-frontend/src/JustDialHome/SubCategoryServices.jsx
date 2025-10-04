import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubCategoryServices = () => {
  const { subName } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:5024/api/Busisubcategory/${encodeURIComponent(subName)}`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch services");
      return res.json();
    })
    .then((data) => setServices(data))
    .catch((err) => console.error(err));
}, [subName]);


  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Services for {subName}
      </h2>

      <div className="space-y-6">
        {services.map((svc) => (
          <div
            key={svc._id}
            className="p-6 border rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-6">
              <img
                src={svc.image}
                alt={svc.name}
                className="w-40 h-28 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold">{svc.name}</h3>
                <p className="text-gray-600">{svc.address}</p>
                <p className="mt-1">⭐ {svc.rating} ({svc.reviews} reviews)</p>
                {svc.verified && (
                  <span className="text-green-600 font-semibold">Verified</span>
                )}
                <div className="mt-2 flex gap-4">
                  <a
                    href={`tel:${svc.phone}`}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${svc.whatsapp}`}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {services.length === 0 && (
          <p className="text-center text-gray-500">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default SubCategoryServices;
