// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
// import Image from "next/image";
// import logo1 from "@/public/logo1.png";
// import logo2 from "@/public/logo2.png";
// import logo3 from "@/public/logo3.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDownload = () => {
    // Placeholder for app download functionality
    toast("App download will be available soon!");
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logos */}
          <div className="flex items-center space-x-2">
            {/* <Image src={logo1} alt="Logo1" className="h-8 w-auto" />
            <Image src={logo2} alt="Logo2" className="h-8 w-auto" />
            <Image src={logo3} alt="Logo3" className="h-8 w-auto" /> */}
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex items-center font-bold space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#0A600C]">Home</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-[#0A600C]">How it Works</Link>
            <Link href="/scan" className="text-gray-700 hover:text-[#0A600C]">Scan Now</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#0A600C]">About</Link>
          </div>

          {/* Right: Download Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleDownload}
              className="bg-[#0A400C] font-bold text-white px-4 py-2 rounded-md hover:bg-[#0A600C] transition"
            >
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-[#0A600C]">Home</Link>
          <Link href="#how-it-works" className="block text-gray-700 hover:text-[#0A600C]">How it Works</Link>
          <Link href="/scan" className="block text-gray-700 hover:text-[#0A600C]">Scan Now</Link>
          <Link href="/about" className="block text-gray-700 hover:text-[#0A600C]">About</Link>
          <button 
            onClick={handleDownload}
            className="w-full bg-[#0A600C] text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download App
          </button>
        </div>
      )}
    </nav>
  );
}
