import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDtf_wackDy8nKMu_Uu7tEC5LjpfP3jiUY",
    authDomain: "ecommerce-auth-d830a.firebaseapp.com",
    projectId: "ecommerce-auth-d830a",
    storageBucket: "ecommerce-auth-d830a.appspot.com",
    messagingSenderId: "256011592604",
    appId: "1:256011592604:web:2755ab4c0a198abb241e59",
    measurementId: "G-GZCFTZJP5Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const gauth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;