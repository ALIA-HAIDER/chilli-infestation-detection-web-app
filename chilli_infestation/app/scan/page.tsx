"use client";
import { useState, useEffect } from "react";
import { FaCamera, FaFolderOpen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePlantStore } from "@/store/usePlantStore";
import Loading from "@/app/components/Loading";
import toast from "react-hot-toast";
import CameraModal from "@/app/components/CameraModal";



export default function ScanNowPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [loct, setloct] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitStep, setSubmitStep] = useState<'' | 'location' | 'analysis'>('');
  

  const { setLocation, submitPlantData, loading } = usePlantStore();
  // This local state is no longer needed as we will pass the location directly
  // const [location, setLocationState] = useState("");

  const getloct = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const msg = "Geolocation is not supported by your browser";
        setError(msg);
        reject(new Error(msg));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setloct({ lat, lng });
          setError(null);

          // Reverse geocoding via our API route to avoid CORS
          try {
            const res = await fetch(`/api/geocode?lat=${lat}&lon=${lng}`);
            if (!res.ok) {
              throw new Error("Failed to fetch address from server");
            }
            const data = await res.json();
            const fetchedAddress = data.display_name || "Address not found";
            setAddress(fetchedAddress);
            resolve(fetchedAddress);
          } catch (err) {
            console.error(err);
            const errorMsg = "Failed to fetch address";
            setAddress(errorMsg);
            reject(new Error(errorMsg));
          }
        },
        (err) => {
          console.error(err);
          setError(err.message);
          reject(new Error(err.message));
        }
      );
    });
  };

  const router = useRouter();
  // Cleanup preview when component unmounts or image changes
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleImageUpload = (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    if (preview) URL.revokeObjectURL(preview);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // New handler for when an image is captured from the modal
  const handleCapture = (file: File) => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setIsCameraOpen(false); // Close the modal automatically after capture
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleImageUpload(e.dataTransfer.files);
  };

  const handleSubmit = async () => {
    if (!image) return toast.error("Please upload an image first.");
    
    console.log("Scanning image:", image);
    
    try {
      setSubmitStep('location');
      const userLocation = await getloct();
      
      setSubmitStep('analysis');
      console.log("User location set to:", userLocation);
      
      setLocation(userLocation);
      await submitPlantData(image, userLocation);
      toast.success("Analysis complete! Redirecting...");
      router.push("/ResultPage");
    } catch (error: any) {
      console.error("Submission process failed:", error);
      toast.error(error.message || "Failed to get location or analyze image.");
    } finally {
      setSubmitStep('');
    }
  };

  // Updated camera handler to open the modal
  const handleCameraCapture = () => {
    // Check for browser support before opening the modal
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast.error("Camera not supported on this browser.");
      return;
    }
    setIsCameraOpen(true);
  };

  return (
    <>
      {loading && <Loading message="Analyzing your chilli plant for diseases..." />}
      {isCameraOpen && (
        <CameraModal
          onClose={() => setIsCameraOpen(false)}
          onCapture={handleCapture}
        />
      )}
      
      <main className="min-h-screen bg-gradient-to-br from-[#fdfdfd] to-[#e8ead0] px-4 py-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl space-y-8 p-6 sm:p-8 rounded-lg">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0A400C] to-[#0A600C] bg-clip-text text-transparent">
              Chilli Disease Detection
            </h1>
            <p className="text-base text-gray-600 max-w-md mx-auto">
              Upload an image of your chilli plant and get instant AI-powered
              analysis for diseases and pest infestations.
            </p>
          </div>

          {/* Upload Box */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`w-full min-h-[200px] flex items-center justify-center rounded-lg border-2 border-dashed transition-all duration-300 p-4 ${
              isDragging
                ? "border-[#0A600C] bg-green-100 scale-105 shadow-lg"
                : "border-gray-400 hover:border-[#0A600C] hover:bg-green-50 bg-gray-100"
            }`}
          >
            {preview ? (
              <div className="relative w-full h-80 rounded-md overflow-hidden border shadow bg-white">
                {preview && (
                  <Image
                    src={preview}
                    alt="Chilli Leaf Preview"
                    width={500}
                    height={300}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                )}
                <button
                  onClick={() => {
                    if (loading || !!submitStep) return;
                    URL.revokeObjectURL(preview!);
                    setImage(null);
                    setPreview(null);
                  }}
                  disabled={loading || !!submitStep}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ×
                </button>
              </div>
            ) : (
              <label
                htmlFor="file-upload"
                className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
              >
                <p
                  className={`text-xl font-medium mb-2 ${
                    isDragging ? "text-[#0A600C]" : "text-[#0A400C]"
                  }`}
                >
                  {isDragging
                    ? "Drop your image here!"
                    : "Upload Chilli Leaf Image"}
                </p>
                <p className="text-sm text-gray-600">
                  {isDragging
                    ? "Release to upload"
                    : "Drag & drop or click to browse image"}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Only 1 image • JPG, PNG, WebP supported
                </p>
              </label>
            )}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files)}
              capture="environment"
              className="hidden"
              disabled={loading || !!submitStep}
            />
          </div>

          {/* Error Message is now handled by toast notifications */}

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <label className={`flex items-center gap-2 bg-[#dcdcaa] text-black font-medium px-6 py-3 rounded-lg shadow transition ${loading || !!submitStep ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[#c7c77e]'}`}>
              <FaFolderOpen />
              <span>Browse</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files)}
                className="hidden"
                disabled={loading || !!submitStep}
              />
            </label>

            <button 
              onClick={handleCameraCapture}
              disabled={loading || !!submitStep}
              className="flex items-center gap-2 bg-gray-600 text-white font-medium px-6 py-3 rounded-lg cursor-pointer shadow hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaCamera />
              <span>Camera</span>
            </button>
          </div>

          {/* Submit */}
          <div className="text-center space-y-2">
            {image && (
              <div className="text-sm text-gray-700 bg-white px-4 py-2 rounded shadow-sm inline-block">
                Ready to analyze your image
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={!image || loading || !!submitStep}
              className={`px-8 py-4 rounded-lg font-semibold transition shadow-lg ${
                (!image || loading || !!submitStep)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#0A400C] to-[#0A600C] text-white hover:from-[#0A600C] hover:to-[#0A800C] hover:shadow-xl"
              }`}
            >
              {submitStep === 'location' 
                ? "Getting Location..."
                : submitStep === 'analysis' || loading
                  ? "Analyzing..."
                  : image 
                    ? "Analyze for Diseases" 
                    : "Upload Image to Continue"
              }
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
                          