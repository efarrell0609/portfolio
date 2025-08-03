# Elijah Farrell's Portfolio

A modern, responsive portfolio built with React and TypeScript featuring dynamic theming (light/dark mode and color picker), smooth animations, and a live comment section powered by Firebase Firestore. Built with Vite for fast development and optimized performance.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Mode**: Theme toggle with custom color picker
- **Interactive Elements**: Smooth animations and effects
- **Live Comments**: Real-time comment system via Firebase
- **Contact Form**: EmailJS integration for seamless communication
- **Modern UI**: Clean, professional design with accessibility features

## Tech Stack

- **React 18, TypeScript, Vite**
- **Tailwind CSS**
- **Firebase Firestore (comments)**
- **EmailJS (contact form)**
- **Font Awesome Icons**
- **React Three Fiber & Drei (3D graphics)**
- **Framer Motion (animations)**
- **React Router (navigation)**

## Setup

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set up Firebase** (see `setup/firebase-setup.md`)
4. **Set up EmailJS** (see `setup/emailjs-setup.md`)
5. **Configure environment variables** in `.env`:
   - **EmailJS**: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
   - **Firebase**: `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`, `VITE_FIREBASE_MEASUREMENT_ID`
6. **Run development server**: `npm run dev`

## Contact

- **Email**: elijah5003@gmail.com
- **GitHub**: elijah-farrell
- **Location**: Watertown, NY

## 3D Models

This portfolio features two 3D models with different licenses:

- **Laptop with Code**: Based on "laptop with code" by zam205 licensed under CC-BY-4.0
- **Phone Booth**: Based on "Phone Booth" by Mountrise licensed under CC-BY-4.0

Please refer to the respective license files in the `public/` directories for full licensing information.
