// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhyBnY1RwnGykHpDfDGvKYxfRgIqHa0G4",
  authDomain: "egzas-cbc6a.firebaseapp.com",
  projectId: "egzas-cbc6a",
  storageBucket: "egzas-cbc6a.appspot.com",
  messagingSenderId: "526291933798",
  appId: "1:526291933798:web:bbb9ded2e4e11c59ff2ba7",
  measurementId: "G-J4BWNDNRF0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);