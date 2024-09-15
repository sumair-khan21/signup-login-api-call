// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZfxlJ3TcVlC44-az654A1ExlO45eQ-l4",
  authDomain: "react-firebase-3417f.firebaseapp.com",
  projectId: "react-firebase-3417f",
  storageBucket: "react-firebase-3417f.appspot.com",
  messagingSenderId: "358070268836",
  appId: "1:358070268836:web:5e0221d7b5bc4f20d84731",
  measurementId: "G-R6W67RS2VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();
export { db , auth }