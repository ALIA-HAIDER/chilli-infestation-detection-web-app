# Chilli Infestation Detection Web App

An AI-powered web application designed to help farmers and agricultural experts quickly diagnose diseases and pest infestations in chilli plants from an image. This tool aims to provide rapid, accessible, and reliable analysis to support crop protection and improve yield.

## ✨ Features

-   **AI-Powered Diagnosis:** Upload an image of a chilli plant leaf to get an instant analysis and potential diagnosis.
-   **Multiple Upload Methods:**
    -   Drag & Drop interface.
    -   Traditional file browser.
    -   Direct camera capture, optimized for mobile devices.
-   **Geolocation Tagging:** Automatically captures the user's location (with permission) to provide geographical context for the analysis.
-   **Responsive Design:** A clean and intuitive user interface that works seamlessly on both desktop and mobile browsers.
-   **User Feedback:** Integrated loading states and non-intrusive toast notifications for a smooth user experience.

## 🛠️ Technology Stack

This project is built with a modern, robust, and scalable technology stack.

### Frontend

-   **Framework:** [Next.js](https://nextjs.org/) / [React](https://reactjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
-   **HTTP Client:** [Axios](https://axios-http.com/)
-   **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)

### Backend (AI Service)

-   The frontend is designed to communicate with a separate backend service (e.g., a Python/Flask server) running on `http://127.0.0.1:5000`.
-   This backend is responsible for handling the image processing and running the deep learning models for disease prediction.

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine for development.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.x or later is recommended)
-   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
-   A running instance of the backend AI service on `http://127.0.0.1:5000`.

### Installation & Setup

1.  **Navigate to the project directory:**
    ```bash
    cd /media/alien/strssd/MyProjects_ubantu/chilli-infestation-detection-web-app/chilli_infestation
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

The project follows the standard Next.js `app` directory structure.

```
chilli_infestation/
├── app/
│   ├── (pages)/                # Main application pages (scan, ResultPage, etc.)
│   │   └── page.tsx
│   ├── api/                    # Server-side API routes (e.g., for geocoding proxy)
│   │   └── geocode/
│   │       └── route.ts
│   ├── components/             # Reusable React components (Navbar, Footer, etc.)
│   ├── layout.tsx              # Root layout for the application
│   └── globals.css             # Global styles
├── lib/
│   └── api.ts                  # Axios instance configuration
├── public/                     # Static assets (images, fonts)
├── store/
│   └── usePlantStore.ts        # Zustand store for global state management
└── package.json                # Project dependencies and scripts
```

## ⚙️ API Endpoints

The application uses a combination of internal and external APIs.

-   **/api/geocode**: A local API route that acts as a proxy to the OpenStreetMap Nominatim service to safely handle reverse geocoding without CORS issues.
-   **/upload_plant** (via `http://127.0.0.1:5000`): The external endpoint on the backend server that accepts the plant image and location for AI analysis.
