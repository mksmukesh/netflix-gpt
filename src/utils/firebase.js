// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsVK5S7iBRHNgGGs6m8cr-kuqIMIMFDgI",
  authDomain: "netflixgpt-a2486.firebaseapp.com",
  projectId: "netflixgpt-a2486",
  storageBucket: "netflixgpt-a2486.appspot.com",
  messagingSenderId: "747891835237",
  appId: "1:747891835237:web:e0583bd7b6fee359eda18c",
  measurementId: "G-MBJB0ZRNKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);