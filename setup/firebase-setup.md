# Firebase Setup Guide

Set up Firebase Firestore for the comment system in your React portfolio.

## 🚀 Setup Steps

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name and create

### 2. Add Web App
1. Click "Add app" → "Web"
2. Register app and copy config

### 3. Enable Firestore
1. Go to "Firestore Database"
2. Click "Create database"
3. Start in test mode

### 4. Update Code
Replace the Firebase config in `src/firebase/config.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 5. Install Firebase SDK
```bash
npm install firebase
```

### 6. Test
1. Start development server: `npm run dev`
2. Open your website
3. Leave a comment
4. Check Firebase Console to see the comment

## 🔒 Security Rules
Go to Firestore → Rules and set:
```javascript
match /comments/{commentId} {
  allow read, write: if true;
}
```

## 📊 Free Tier Limits
- 1GB storage
- 50K reads/day
- 20K writes/day

## 🛠️ Usage in Components

```typescript
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/config';

// Add comment
const addComment = async (comment: CommentData) => {
  await addDoc(collection(db, 'comments'), comment);
};

// Get comments
const getComments = async () => {
  const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
```

---

**Your Firebase setup is complete! 🎉** 