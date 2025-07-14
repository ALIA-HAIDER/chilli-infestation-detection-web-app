"use client";
import Image from "next/image";
import Link from "next/link";
import bgImg from "@/public/headerimg.png"; // replace with your actual image

export default function Header() {
  const handleDownload = () => {
    // Placeholder for app download functionality
    // You can replace this with actual download logic when your app is ready
    alert("App download will be available soon!");
  };

  return (
    <header className="relative w-full h-screen">
      {/* Background image */}
      <Image
        src={bgImg}
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Empowering Farmers, Protecting Crops
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 max-w-2xl">
          Scan and protect your crops with advanced chili disease detection.
        </p>
        <div className="flex flex-col font-bold sm:flex-row gap-4">
          <button 
            onClick={handleDownload}
            className="bg-[#B1AB86] text-[#0A400C] px-6 py-3 rounded-md hover:bg-[#a49f7a] transition"
          >
            Download Now
          </button>
          <Link href="/scan">
            <button className="bg-[#0A400C]/20 text-white px-6 py-3 rounded-md border border-[#0A400C]/40 hover:bg-[#B1AB86]/30 shadow-md backdrop-blur-sm transition">
              Scan Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
