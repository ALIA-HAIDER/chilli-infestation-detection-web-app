import Image from "next/image";
import Link from "next/link";
import plantScan from "@/public/tryitnowimg.png"; // Replace with your actual image

export default function TryItNow() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image - visible only on md+ screens */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src={plantScan}
            alt="Crop Scan"
            className="w-full h-auto rounded-lg "
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A400C] mb-4">
            Try It Now — Instant Crop Scan
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Just take a photo of your plant and find out if it&apos;ss healthy or at risk.
            <br />
            No waiting, no guesswork — quick results at your fingertips.
          </p>
          <p className="text-[#0A400C] font-semibold mb-4">
            Join the Action —
          </p>
          <Link href="/scan">
            <button className="bg-[#B1AB86] text-[#0A400C] px-6 py-3 rounded-md font-bold hover:bg-[#a59f78] transition">
              Scan Your Plant
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
