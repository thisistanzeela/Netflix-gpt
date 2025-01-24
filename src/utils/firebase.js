// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDavhnw52yVUsTh5g4wzP02TbbLcKG9nRQ",
  authDomain: "netflixgpt-9d7a6.firebaseapp.com",
  projectId: "netflixgpt-9d7a6",
  storageBucket: "netflixgpt-9d7a6.firebasestorage.app",
  messagingSenderId: "794137200246",
  appId: "1:794137200246:web:80ad35f72d1154756f0157",
  measurementId: "G-08WVXHWH2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();