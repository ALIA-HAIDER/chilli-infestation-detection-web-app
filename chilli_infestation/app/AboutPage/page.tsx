"use client";
import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f6f0] to-[#e8ead0] px-6 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0A400C] to-[#0A600C] bg-clip-text text-transparent m-4">
            About the Project
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An interdisciplinary AI initiative by Banaras Hindu University to
            combat chilli crop losses using deep learning and real-world field
            datasets.
          </p>
        </div>

        {/* Section: Context */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#0A400C] to-[#0A600C] rounded-full mr-4"></div>
            <h2 className="text-3xl font-semibold text-[#0A400C]">
              Context and Motivation
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              India, the world&rsquo;s  largest producer of chilli, harvested{" "}
              <span className="font-semibold text-[#0A400C]">
                27.82 lakh tonnes
              </span>{" "}
              in 2024–25. However, pests like{" "}
              <strong>Thrips parvispinus</strong> and{" "}
              <strong>Polyphagotarsonemus latus</strong> pose serious threats,
              with yield losses reaching{" "}
              <span className="font-semibold">90–100%</span> in
              eastern Uttar Pradesh.
            </p>
            <p className="text-lg">
              This project supports vulnerable farming communities, particularly
              small and marginal farmers, by offering fast and scalable disease
              detection tools.
            </p>
          </div>
        </section>

        {/* Section: Tech Intervention */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#0A400C] to-[#0A600C] rounded-full mr-4"></div>
            <h2 className="text-3xl font-semibold text-[#0A400C]">
              Technological Intervention
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                AI Models Used
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                  <span className="text-gray-700">ResNet Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                  <span className="text-gray-700">EfficientNet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                  <span className="text-gray-700">DenseNet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                  <span className="text-gray-700">ViT-B/16</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                  <span className="text-gray-700">Swin Transformer</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Key Features
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                  <span className="text-gray-700">Real BHU farm datasets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                  <span className="text-gray-700">F1 Score evaluation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                  <span className="text-gray-700">ROC Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                  <span className="text-gray-700">Confusion Matrix</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Field Impact */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#0A400C] to-[#0A600C] rounded-full mr-4"></div>
            <h2 className="text-3xl font-semibold text-[#0A400C]">
              Field Significance
            </h2>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-[#0A400C]">
            <p className="text-lg text-gray-700 leading-relaxed">
              The AI tool enables farmers to detect diseases via mobile images,
              limit pesticide overuse, and apply treatments more
              efficiently—bridging the AI-lab-to-field gap.
            </p>
          </div>
        </section>

        {/* Contributors */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-[#0A400C] to-[#0A600C] rounded-full mr-4"></div>
            <h2 className="text-3xl font-semibold text-[#0A400C]">
              Contributors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-[#0A400C] mb-4">
                  Research Leads
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                    <span className="text-gray-700">
                      Prof. [Name], Computer Science, BHU
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                    <span className="text-gray-700">
                      Prof. [Name], Agriculture, BHU
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-[#0A400C] mb-4">
                  AI Model Designers
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                    <span className="text-gray-700">
                      [Your Name], Deep Learning Lead
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                    <span className="text-gray-700">
                      [Collaborator Name], Dataset & Training
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-[#0A400C] mb-4">
                  Development Team
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                    <span className="text-gray-700">
                      [Intern] Frontend Developer
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                    <span className="text-gray-700">
                      [Developer Name], Backend Integration
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                    <span className="text-gray-700">
                      [Intern Name], Annotation & Tuning
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#0A600C] rounded-full"></div>
                    <span className="text-gray-700">
                      [Intern Name], Model Monitoring
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-[#0A400C]">
                <h3 className="font-semibold text-xl text-[#0A400C] mb-4">
                  Acknowledgements
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Thanks to the farmers of Varanasi and Mirzapur for their
                  support during dataset collection and field validation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#0A400C] to-[#0A600C] rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Help Your Crops?</h2>
          <p className="text-lg mb-6 opacity-90">
            Upload images of your chilli plants and get instant disease
            detection results.
          </p>
          <Link href="/scan">
            <button className="bg-white text-[#0A400C] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Try Disease Detection
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
