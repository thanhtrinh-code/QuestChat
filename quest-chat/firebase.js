// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArTao4AG-Z_SIQfdn0Z27MDqq_7ftVsTQ", // NEXT_PUBLIC_APIKEY
  authDomain: "quest-chat-17136.firebaseapp.com", // NEXT_PUBLIC_AUTHDOMAIN
  projectId: "quest-chat-17136", // NEXT_PUBLIC_PROJECTID
  storageBucket: "quest-chat-17136.appspot.com", // NEXT_PUBLIC_STORAGEBUCKET
  messagingSenderId: "962500242585", // NEXT_PUBLIC_MESSAGINGSENDERID
  appId: "1:962500242585:web:286cd0ea8037b9efcfdc08", // NEXT_PUBLIC_APPID
  measurementId: "G-FWNPJJL2D3" // NEXT_PUBLIC_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the db instance
export {db};
