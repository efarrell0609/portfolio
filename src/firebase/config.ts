import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Debug: Log Firebase config (remove in production)
console.log('🔍 Firebase Config Debug:', {
  apiKey: firebaseConfig.apiKey ? '✅ SET' : '❌ MISSING',
  authDomain: firebaseConfig.authDomain ? '✅ SET' : '❌ MISSING',
  projectId: firebaseConfig.projectId ? '✅ SET' : '❌ MISSING',
  storageBucket: firebaseConfig.storageBucket ? '✅ SET' : '❌ MISSING',
  messagingSenderId: firebaseConfig.messagingSenderId ? '✅ SET' : '❌ MISSING',
  appId: firebaseConfig.appId ? '✅ SET' : '❌ MISSING',
  measurementId: firebaseConfig.measurementId ? '✅ SET' : '❌ MISSING'
});

// Log actual values for debugging (be careful with sensitive data)
console.log('🔍 Firebase Project ID:', firebaseConfig.projectId);
console.log('🔍 Environment Mode:', import.meta.env.MODE);
console.log('🔍 All VITE_ env vars:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));

// Validate required fields
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('❌ Firebase configuration is missing required fields!');
  console.error('Missing:', {
    apiKey: !firebaseConfig.apiKey,
    projectId: !firebaseConfig.projectId
  });
  
  // Show what we do have
  console.error('Available config:', {
    apiKey: firebaseConfig.apiKey ? 'SET' : 'MISSING',
    projectId: firebaseConfig.projectId || 'UNDEFINED'
  });
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app; 