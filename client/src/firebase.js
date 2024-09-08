// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6a5d6.firebaseapp.com",
  projectId: "mern-auth-6a5d6",
  storageBucket: "mern-auth-6a5d6.appspot.com",
  messagingSenderId: "251247270743",
  appId: "1:251247270743:web:9f8ea6b120af1554dafc12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);