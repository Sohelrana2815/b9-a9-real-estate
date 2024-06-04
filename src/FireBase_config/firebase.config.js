// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4VXvK_nCOv8XO5zU7YWSeu_RKlCBamw",
  authDomain: "b9-a9-real-estate-cbc91.firebaseapp.com",
  projectId: "b9-a9-real-estate-cbc91",
  storageBucket: "b9-a9-real-estate-cbc91.appspot.com",
  messagingSenderId: "42336562114",
  appId: "1:42336562114:web:87144a71402b7d01b5045b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
