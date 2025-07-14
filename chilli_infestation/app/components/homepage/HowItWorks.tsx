import Image from "next/image";
import step1 from "@/public/Step1.png";
import step2 from "@/public/Step2.png";
import step3 from "@/public/Step3.png";
import step4 from "@/public/Step4.png";

const steps = [
  {
    title: "Step 1: Take a Photo",
    description: "Capture a clear image of your chili plant showing leaves or fruits.",
    image: step1,
  },
  {
    title: "Step 2: Upload / Scan",
    description: "Upload the photo in the app or click Scan Now on the web.",
    image: step2,
  },
  {
    title: "Step 3: Get Instant Results",
    description: "Our AI analyzes the image and shows possible diseases or pests.",
    image: step3,
  },
  {
    title: "Step 4: Follow Recommendations",
    description: "Get treatment tips, preventive care, and expert advice.",
    image: step4,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full px-4 py-20 bg-white text-center scroll-mt-16">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black">How It Works</h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          Simple steps to secure your crops using our AI-powered solution.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 max-w-6xl mx-auto`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={step.image}
                alt={step.title}
                className="w-full h-auto "
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-gray-700 text-base md:text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
