# Elijah Farrell's Portfolio

A modern, responsive portfolio built with React and TypeScript featuring dynamic theming (light/dark mode and color picker), smooth animations, and a live comment section powered by Firebase Firestore. Built with Vite for fast development and optimized performance.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Mode**: Theme toggle with custom color picker
- **Interactive Elements**: Smooth animations and typewriter effects
- **Live Comments**: Real-time comment system via Firebase
- **Contact Form**: EmailJS integration for seamless communication
- **Modern UI**: Clean, professional design with accessibility features

## Tech Stack

- **React 18, TypeScript, Vite**
- **Tailwind CSS**
- **Firebase Firestore (comments)**
- **EmailJS (contact form)**
- **Font Awesome Icons**

## Setup

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Copy environment file**: `cp .env.example .env`
4. **Configure environment variables** in `.env`:
   - **EmailJS**: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
   - **Firebase**: `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`, `VITE_FIREBASE_MEASUREMENT_ID`
5. **Set up Firebase** (see `setup/firebase-setup.md`)
6. **Run development server**: `npm run dev`

## Contact

- **Email**: elijah5003@gmail.com
- **GitHub**: elijah-farrell
- **Location**: Watertown, NY