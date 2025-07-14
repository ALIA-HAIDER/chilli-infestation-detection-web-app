import React from "react";

export default function IntroPart() {
  return (
    <section className="w-full bg-[#819067] px-4 py-16 rounded-b-4xl text-center">
      {/* Heading */}
      <div className="max-w-5xl text-black mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Smart Crop Protection for Every Farmer
        </h2>
        <p className="mt-4  text-lg md:text-xl">
          Early detection of chili diseases using AI.
          <br />
          Just click a photo — get instant advice, treatment tips & protect your
          harvest.
        </p>
      </div>

      {/* Features */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-[#B1AB86] text-[#0A400C] h-fit  px-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          Works on Mobile & Web
        </div>
        <div className="bg-[#B1AB86] text-[#0A400C] h-fit  px-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          Instant Disease Scan
        </div>
        <div className="bg-[#B1AB86] text-[#0A400C] h-fit  px-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          Backed by Agricultural Research
        </div>
        <div className="bg-[#B1AB86] text-[#0A400C] h-fit  px-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          Built for Indian Farmers
        </div>
      </div>
    </section>
  );
}
