// import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
// import bhuLogo from "@/public/bhu-logo.png"; // <-- Replace with actual logo path

export default function Footer() {
  return (
    <footer className="bg-[#0A400C] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* BHU Logo and Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* <Image src={bhuLogo} alt="BHU Logo" width={80} height={80} className="mb-2" /> */}
          <p className="text-lg font-semibold">Banaras Hindu University</p>
          <p className="text-sm text-gray-300">Department of Agriculture</p>
        </div>

        {/* Project Supervision Info */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Supervised By</h3>
          <p className="text-sm text-gray-200">
            Prof. Sachchida Nand Chaurasia, Department of Computer Science <br />
            Banaras Hindu University
          </p>
          {/* <p className="mt-2 text-gray-400 text-xs">This project is part of an academic initiative for enhancing agricultural diagnosis using AI tools.</p> */}
        </div>

        {/* Contact & Links */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-300 mb-2">
            Email: <a href="mailto:help@cropscan.ai" className="underline">help@cropscan.ai</a>
          </p>
          <div className="flex justify-center md:justify-end space-x-4 text-white text-xl">
            <a href="#"><FaLinkedin className="hover:text-[#B1AB86]" /></a>
            <a href="#"><FaGithub className="hover:text-[#B1AB86]" /></a>
            <a href="mailto:help@cropscan.ai"><FaEnvelope className="hover:text-[#B1AB86]" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} CropScan AI — A project by BHU Agriculture Department. All rights reserved.
      </div>
    </footer>
  );
}
