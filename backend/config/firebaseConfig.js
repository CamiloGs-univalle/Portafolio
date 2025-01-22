// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-dznT4r-UI3y-Nb9Rmb9ojHNbTVZfR0",
  authDomain: "portafolio-gs.firebaseapp.com",
  projectId: "portafolio-gs",
  storageBucket: "portafolio-gs.firebasestorage.app",
  messagingSenderId: "615634808172",
  appId: "1:615634808172:web:67967f3428286194d21749",
  measurementId: "G-CTEY8CX1H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);