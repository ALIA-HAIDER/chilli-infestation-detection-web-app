import { create } from "zustand";
import { api } from "../lib/api";

interface PlantState {
  image: File | null;
  imageUrl: string ;
  location: string;
  loading: boolean;
  disease: string | null;
  solution: string | null;
  setLocation: (location: string) => void;
  submitPlantData: (image: File | null, location: string) => Promise<void>;
}

export const usePlantStore = create<PlantState>((set) => ({
  image: null,
  location: "",
  loading: false,
    disease: null,
    solution: null,
    imageUrl: "",

  setLocation: (location) => set({ location }),

  submitPlantData: async (image, location) => {
    set({ loading: true });
    try {
      if (!image) {
        console.error("No image provided for submission.");
        set({ loading: false });
        return;
      }

      console.log("Submitting plant data with image:", image.name);
      console.log("Submitting plant data with location:", location);

      // Create FormData for file upload
      const formData = new FormData();
      formData.append('image', image);
      formData.append('location', location);
      console.log("FormData created:", formData.get('image'), formData.get('location'));

      const response = await api.post("/upload_plant", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Upload successful:", response.data);
      
      // Store the response data
      set({ 
        image,
        disease: response.data.prediction || null,
        solution: response.data.Solution || null,
        imageUrl: response.data.url || "",
        loading: false,
      });

    } catch (error) {
      console.error("Error submitting plant data:", error);
      set({ loading: false });
      throw error;
    }
  },
}));
