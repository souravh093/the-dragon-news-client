// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcVTQBoVf4PvVo3kEGyV90I2OHvcZyk2Q",
  authDomain: "the-news-dragon-a8694.firebaseapp.com",
  projectId: "the-news-dragon-a8694",
  storageBucket: "the-news-dragon-a8694.appspot.com",
  messagingSenderId: "214665735019",
  appId: "1:214665735019:web:5f051f027f54922b6fba2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;