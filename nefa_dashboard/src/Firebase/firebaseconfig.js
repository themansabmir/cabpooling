// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaMYJ8Q86ryVsB04Sk54BfnklpnnobwEY",
  authDomain: "nefacabs.firebaseapp.com",
  projectId: "nefacabs",
  storageBucket: "nefacabs.appspot.com",
  messagingSenderId: "354934352095",
  appId: "1:354934352095:web:d412203e47b04c8a8fe16a",
  measurementId: "G-8MKW41QP52",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
