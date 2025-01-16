// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCwsbU2Dnz2Y-7LPhfllZyW2ctqD1-E80",
  authDomain: "auth1st-99634.firebaseapp.com",
  projectId: "auth1st-99634",
  storageBucket: "auth1st-99634.firebasestorage.app",
  messagingSenderId: "165968792513",
  appId: "1:165968792513:web:e0e9ca2b1401b18d35bd40",
  measurementId: "G-2MJ2M6S2JG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export default app;