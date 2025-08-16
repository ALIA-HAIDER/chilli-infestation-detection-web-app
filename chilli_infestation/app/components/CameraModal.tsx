"use client";

import { useEffect, useRef, useState } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

interface CameraModalProps {
  onClose: () => void;
  onCapture: (file: File) => void;
}

export default function CameraModal({ onClose, onCapture }: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    let mediaStream: MediaStream;

    const startCamera = async () => {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // Prefer the rear camera
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        toast.error("Could not access camera. Please check permissions.");
        onClose();
      }
    };

    startCamera();

    // Cleanup function to stop the camera stream when the component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      // Set canvas dimensions to match the video's intrinsic size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      const context = canvas.getContext("2d");
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas image to a Blob, then to a File object
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `capture-${Date.now()}.jpg`, {
            type: "image/jpeg",
          });
          onCapture(file);
        }
      }, "image/jpeg", 0.95); // Use JPEG format with 95% quality
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative bg-black rounded-lg w-full max-w-3xl aspect-video overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
        {/* This canvas is used for capturing the frame but is not visible */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 transition-colors"
          aria-label="Close camera"
        >
          <FaTimes size={24} />
        </button>

        {/* Capture Button */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <button
            onClick={handleCapture}
            className="w-20 h-20 bg-white rounded-full border-4 border-gray-400 hover:border-white transition-all flex items-center justify-center ring-4 ring-black/30"
            aria-label="Capture photo"
          >
            <FaCamera className="text-gray-800" size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
