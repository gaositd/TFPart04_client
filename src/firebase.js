// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy4ClpFbF7dsEMVOa3aRelt_ZFlOtMMHI",
  authDomain: "learning-management-syst-8d484.firebaseapp.com",
  projectId: "learning-management-syst-8d484",
  storageBucket: "learning-management-syst-8d484.appspot.com",
  messagingSenderId: "634104153891",
  appId: "1:634104153891:web:40eabc261d5ec737cc6e96"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase)
export const provider = new GoogleAuthProvider();