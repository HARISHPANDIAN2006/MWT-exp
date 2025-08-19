import React from "react";
import sampleImg from "./assets/image.png"; // 👈 replace with your image path

const ImageGallery = () => {
  return (
    <section className="py-5 px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Made on Fiverr
      </h2>

      <div className="space-x-4 bg-white flex">

        {/* Row 1 */}
        <div className="flex flex-col gap-4">
          <GalleryItem
            img={sampleImg}
            height="h-40"
            title="Creative Logo"
            desc="Designed for branding excellence"
          />
          <GalleryItem
            img={sampleImg}
            height="h-60"
            title="Modern Poster"
            desc="A bold and striking visual"
          />
          <GalleryItem
            img={sampleImg}
            height="h-32"
            title="Business Card"
            desc="Minimal and elegant design"
          />
          <GalleryItem
            img={sampleImg}
            height="h-48"
            title="Flyer Template"
            desc="Perfect for promotions"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-4">
          <GalleryItem
            img={sampleImg}
            height="h-72"
            title="Web Banner"
            desc="Engaging digital presence"
          />
          <GalleryItem
            img={sampleImg}
            height="h-40"
            title="Ad Design"
            desc="Eye-catching marketing ad"
          />
          <GalleryItem
            img={sampleImg}
            height="h-72"
            title="Event Poster"
            desc="Ideal for public events"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-4">
          <GalleryItem
            img={sampleImg}
            height="h-40"
            title="Profile Cover"
            desc="Stylish and sleek"
          />
          <GalleryItem
            img={sampleImg}
            height="h-52"
            title="Infographic"
            desc="Data made visual"
          />
          <GalleryItem
            img={sampleImg}
            height="h-48"
            title="Portfolio Card"
            desc="Showcase your work"
          />
          <GalleryItem
            img={sampleImg}
            height="h-40"
            title="Resume Layout"
            desc="Clean and professional"
          />
        </div>

        {/* Row 4 */}
        <div className="flex flex-col gap-4">
          <GalleryItem
            img={sampleImg}
            height="h-60"
            title="YouTube Thumbnail"
            desc="Boost your click rate"
          />
          <GalleryItem
            img={sampleImg}
            height="h-28"
            title="Social Post"
            desc="Get noticed online"
          />
          <GalleryItem
            img={sampleImg}
            height="h-[382px]"
            title="Magazine Cover"
            desc="High-impact editorial design"
          />
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable GalleryItem Component
const GalleryItem = ({ img, height, title, desc }) => (
  <div className={`relative group ${height} rounded-lg overflow-hidden`}>
    <img src={img} alt={title} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 text-white flex flex-col justify-center items-center text-center px-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  </div>
);

export default ImageGallery;
