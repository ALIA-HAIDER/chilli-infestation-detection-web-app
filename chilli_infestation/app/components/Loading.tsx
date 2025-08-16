"use client";

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Analyzing your plant..." }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
        {/* Animated Plant Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0A400C] to-[#0A600C] animate-spin">
              <div className="absolute inset-2 rounded-full bg-white"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-[#0A400C] mb-2">
          AI Analysis in Progress
        </h2>
        <p className="text-gray-600 mb-4">{message}</p>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-[#0A400C] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#0A400C] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#0A400C] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Additional Info */}
        <p className="text-xs text-gray-500 mt-4">
          This may take a few seconds...
        </p>
      </div>
    </div>
  );
}
