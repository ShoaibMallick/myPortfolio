import React, { useState } from "react";
import projectData from "../data/project";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Project() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;
  const cardWidth = 300; // adjust based on actual card width incl. gap

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? projectData.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 > projectData.length - visibleCount ? 0 : prev + 1
    );
  };

  return (
    <div className="py-12 bg-gradient-to-br from-orange-50 via-white to-amber-100 min-h-[80vh]">
  <h1 className="text-4xl text-center font-extrabold mt-10 text-amber-950 mb-8 drop-shadow animate-fadeInUp">
    Projects
  </h1>
  <div className="relative flex items-center justify-center animate-fadeInUp">
    {/* Left arrow */}
    <button
      type="button"
      className="absolute left-2 md:left-10 z-10 bg-white/90 hover:bg-amber-200 border border-amber-200 shadow-xl transition-all duration-300 rounded-full p-2 scale-110 hover:scale-125 focus:scale-125 active:scale-95 animate-pulse"
      onClick={handlePrev}
      aria-label="Previous project"
    >
      <FaChevronLeft className="h-6 w-6 text-amber-800" />
    </button>

    {/* Slider container */}
    <div className="overflow-hidden w-full max-w-4xl">
      <div
        className="flex gap-8 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${startIndex * (cardWidth + 32)}px)`, // Make sure your gap matches the value (gap-8 ≈ 32px)
        }}
      >
        {projectData.map((item, i) => (
          <div
            key={item.id}
            className="min-w-[320px] max-w-sm rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(216,146,72,0.12)] hover:shadow-[0_12px_40px_rgba(246,186,36,0.18)] transition-all duration-500 bg-white border border-amber-200 group transform hover:-translate-y-2 hover:scale-[1.03] animate-fadeInUp"
            style={{ animationDelay: `${i * 70}ms` }} // Staggered fade-in
          >
            <img className="w-full h-48 object-cover" src={item.img} alt={item.Title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-amber-950">{item.Title}</div>
              <p className="text-gray-700 text-base line-clamp-3">{item.Description}</p>
            </div>
            <div className="flex justify-end pb-6 pr-8">
              <button
                type="button"
                className="relative overflow-hidden group px-6 py-2 text-white bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 hover:from-amber-700 hover:to-yellow-400 font-semibold rounded-lg text-sm shadow-md transition-all ease-in-out duration-300 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/80 before:to-white/10 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-700 before:pointer-events-none"
              >
                <span className="relative z-10">Read More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right arrow */}
    <button
      type="button"
      className="absolute right-2 md:right-10 z-10 bg-white/90 hover:bg-amber-200 border border-amber-200 shadow-xl transition-all duration-300 rounded-full p-2 scale-110 hover:scale-125 focus:scale-125 active:scale-95 animate-pulse"
      onClick={handleNext}
      aria-label="Next project"
    >
      <FaChevronRight className="h-6 w-6 text-amber-800" />
    </button>
  </div>
</div>

  );
}
