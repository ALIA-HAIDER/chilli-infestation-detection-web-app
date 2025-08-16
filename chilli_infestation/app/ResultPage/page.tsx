"use client";
import { FaRedo, FaSave } from "react-icons/fa";
import Image from "next/image";
import { usePlantStore } from "@/store/usePlantStore";

export default function ResultPage() {
  const { disease, solution, imageUrl } = usePlantStore();
 

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdfdfd] to-[#e8ead0] px-4 py-16 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8 p-6 sm:p-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-[#0A400C]">
            Detected: {disease}
          </h1>
          <p className="text-gray-600 text-sm">(91% confidence)</p>
        </div>

        {/* Image Preview */}
        <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-md border">
          <Image
            src={imageUrl}
            alt="Detected Leaf"
            width={500}
            height={300}
            className="w-full h-64 object-contain bg-gray-100"
          />
        </div>

        {/* Disease Info */}
        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="text-lg font-semibold text-[#0A400C] mb-1">
              About the Disease
            </h2>
            <p className="text-sm leading-relaxed">
              Leaf curl disease is caused by viruses that affect chilli crops,
              leading to curling, yellowing, and stunted growth. It reduces
              yield drastically and spreads rapidly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0A400C] mb-1">
              Symptoms
            </h2>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Curled and wrinkled leaves</li>
              <li>Yellowing between veins</li>
              <li>Stunted growth and fewer fruits</li>
              <li>Distorted leaf shape</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0A400C] mb-1">
              Immediate Treatment
            </h2>
            <p className="text-sm leading-relaxed">
              Remove and destroy infected plants. Apply recommended insecticides
              to control whiteflies (common vectors). Neem oil spray may help
              prevent further spread.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0A400C] mb-1">
              Prevention Tips
            </h2>
            <p>{solution}</p>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Use disease-resistant seeds</li>
              <li>Install yellow sticky traps to catch whiteflies</li>
              <li>Practice crop rotation</li>
              <li>Regular field inspections</li>
            </ul>
          </section>
        </div>

        {/* Buttons at the bottom */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button
            className="flex items-center gap-2 bg-[#0A400C] hover:bg-[#0A600C] text-white px-6 py-3 rounded-lg shadow-lg transition"
            onClick={() => (window.location.href = "/scan")}
          >
            <FaRedo />
            <span>Scan Again</span>
          </button>
          <button className="flex items-center gap-2 bg-[#b9b56e] hover:bg-[#a9a65e] text-black px-6 py-3 rounded-lg shadow-lg transition">
            <FaSave />
            <span>Save Result</span>
          </button>
        </div>
      </div>
    </main>
  );
}
