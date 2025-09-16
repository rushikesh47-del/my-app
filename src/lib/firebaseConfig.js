import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";  // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyAZj5HsZRYMFyXbLml-YxL_nPXusGbbdMA",
  authDomain: "jack1-45290.firebaseapp.com",
  databaseURL: "https://jack1-45290-default-rtdb.firebaseio.com",
  projectId: "jack1-45290",
  storageBucket: "jack1-45290.firebasestorage.app",
  messagingSenderId: "1002253932020",
  appId: "1:1002253932020:web:704a1742b9fddadc9d95a1",
  measurementId: "G-2EJ69H0FC7",
};

const app = initializeApp(firebaseConfig);

// ✅ Auth
const auth = getAuth(app);

// ✅ Realtime Database
const db = getDatabase(app);

export { auth, db };
