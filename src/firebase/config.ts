import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4NVfs7CcrPGpCw65g8NasE_qFu8KUse0",
  authDomain: "portfolio-a4434.firebaseapp.com",
  projectId: "portfolio-a4434",
  storageBucket: "portfolio-a4434.firebasestorage.app",
  messagingSenderId: "907871113255",
  appId: "1:907871113255:web:d5af0f5998348f5f7dbe02",
  measurementId: "G-6W3RQEM5ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app; 