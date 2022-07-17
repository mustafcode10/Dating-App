// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPGp1fNv4whjGwXVJt0f_RK0l1BZwcnqU",
  authDomain: "dating-app-a9df2.firebaseapp.com",
  projectId: "dating-app-a9df2",
  storageBucket: "dating-app-a9df2.appspot.com",
  messagingSenderId: "1036634927114",
  appId: "1:1036634927114:web:82f05b98d3a9e748ff6ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};

