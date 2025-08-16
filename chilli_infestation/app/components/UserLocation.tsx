"use client";
import { useState } from "react";

export default function UserLocation() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to get geolocation
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng });
        setError(null);

        // Reverse geocoding via our API route to avoid CORS
        try {
          const res = await fetch(
            `/api/geocode?lat=${lat}&lon=${lng}`
          );
          if (!res.ok) {
            throw new Error('Failed to fetch address from server');
          }
          const data = await res.json();
          setAddress(data.display_name || "Address not found");
        } catch (err) {
          console.error(err);
          setAddress("Failed to fetch address");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <button
        onClick={getLocation}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Getting Location..." : "Get My Location"}
      </button>

      {location && (
        <p className="mt-4">
          📍 Latitude: {location.lat.toFixed(6)}, Longitude: {location.lng.toFixed(6)}
        </p>
      )}

      {address && (
        <p className="mt-2 text-gray-700 font-medium">
          🏠 Address: {address}
        </p>
      )}

      {error && (
        <p className="mt-2 text-red-500">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
