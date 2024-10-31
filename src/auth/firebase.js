// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDprYVsWoeTpG7ABKi7brKBg7BxCPC-iyE",
  authDomain: "movie-app-82b85.firebaseapp.com",
  projectId: "movie-app-82b85",
  storageBucket: "movie-app-82b85.appspot.com",
  messagingSenderId: "666022921515",
  appId: "1:666022921515:web:f88030ee78ef0eb6d2b16e",
  measurementId: "G-MQ7LEVCX8M",
};

// Initialize Firebase
const app_fire = initializeApp(firebaseConfig);
const Auth = getAuth(app_fire);

export default Auth;
