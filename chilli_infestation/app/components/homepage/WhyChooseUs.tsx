export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A400C] mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12">
          Trusted by farmers, built with experts, and powered by AI—our tool makes crop disease detection easy, fast, and reliable.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-[#F9F9F5] p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#0A400C] mb-2">
              AI-Powered Precision
            </h3>
            <p className="text-gray-700">
              Our smart detection system uses cutting-edge AI trained on thousands of crop disease images—so you get accurate, instant results just by uploading a photo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9F9F5] p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#0A400C] mb-2">
              Made for Indian Farmers
            </h3>
            <p className="text-gray-700">
              From chili to tomato, our tool is built for real field conditions, local crops, and rural connectivity—so every farmer gets relevant, practical solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9F9F5] p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#0A400C] mb-2">
              Backed by Agricultural Experts
            </h3>
            <p className="text-gray-700">
              Developed in collaboration with top researchers from BHU, our diagnosis engine is guided by real agronomic knowledge, not guesswork.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F9F9F5] p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#0A400C] mb-2">
              Fast, Free & Farmer-Friendly
            </h3>
            <p className="text-gray-700">
              No complicated steps, no cost. Scan your crops instantly and get the help you need without any barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
