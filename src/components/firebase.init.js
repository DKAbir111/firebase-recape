// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKvsY20dRaEtAl2fXuw_r_8DPx0OSfs08",
    authDomain: "fir-recape-dca04.firebaseapp.com",
    projectId: "fir-recape-dca04",
    storageBucket: "fir-recape-dca04.firebasestorage.app",
    messagingSenderId: "641886972093",
    appId: "1:641886972093:web:65d43ef05a8f084c662fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);