// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD9vuCDJOSgIM0UZUkAChGjkIjTfVVHw8",
  authDomain: "phero-tech.firebaseapp.com",
  projectId: "phero-tech",
  storageBucket: "phero-tech.appspot.com",
  messagingSenderId: "72787736977",
  appId: "1:72787736977:web:1f8ef8080d17626bf48230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;