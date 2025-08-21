import React from "react";

const ServicesSection = () => {
  return (
    <section className="px-10 mt-12 pt-12 bg-white">
      <div className="flex gap-6">
        {/* Card */}
        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between">
          <h3 className="font-bold text-lg mb-3">Vibe Coding</h3>
          <img
            src="https://picsum.photos/400/250"
            className="rounded-xl"
            alt="Vibe Coding"
          />
        </div>

        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between">
          <h3 className="font-bold text-lg mb-3">Website Development</h3>
          <img
            src="https://picsum.photos/400/250"
            className="rounded-xl"
            alt="Website Dev"
          />
        </div>

        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between">
          <h3 className="font-bold text-lg mb-3">Video Editing</h3>
          <img
            src="https://picsum.photos/400/250"
            className="rounded-xl"
            alt="Video Editing"
          />
        </div>

        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between">
          <h3 className="font-bold text-lg mb-3">Software Development</h3>
          <img
            src="https://picsum.photos/400/250"
            className="rounded-xl"
            alt="Software Dev"
          />
        </div>

        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between">
          <h3 className="font-bold text-lg mb-3">SEO</h3>
          <img
            src="https://picsum.photos/400/250"
            className="rounded-xl"
            alt="SEO"
          />
        </div>

        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg border-black border-2 w-60 p-4 hover:scale-105 transition flex flex-col items-center justify-between">
          <h3 className="font-bold text-lg mb-3">Architecture & Interior Design</h3>
          <img
            src="https://picsum.photos/400/250"
            className="rounded-xl"
            alt="Architecture Design"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
