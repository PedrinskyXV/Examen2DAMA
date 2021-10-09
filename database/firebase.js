// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtC7tk6TFujUZTLU1sY2lYm3AgvHoyULg",
  authDomain: "menu-e699c.firebaseapp.com",
  projectId: "menu-e699c",
  storageBucket: "menu-e699c.appspot.com",
  messagingSenderId: "413654846875",
  appId: "1:413654846875:web:bcd33d8e36a90a29f8e53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;