// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCVlO7KPpcc2g84epHRMF4kX6Hxg3m-JA",
  authDomain: "mk-social-commerce.firebaseapp.com",
  projectId: "mk-social-commerce",
  storageBucket: "mk-social-commerce.appspot.com",
  messagingSenderId: "464351684780",
  appId: "1:464351684780:web:52b0d5e52f161725329709",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
