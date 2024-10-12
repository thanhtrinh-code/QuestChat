// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArTao4AG-Z_SIQfdn0Z27MDqq_7ftVsTQ",
  authDomain: "quest-chat-17136.firebaseapp.com",
  projectId: "quest-chat-17136",
  storageBucket: "quest-chat-17136.appspot.com",
  messagingSenderId: "962500242585",
  appId: "1:962500242585:web:286cd0ea8037b9efcfdc08",
  measurementId: "G-FWNPJJL2D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);