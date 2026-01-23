// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPJzqBpn6F0mU7gtMEs89OxOOVc9Hj6oM",
  authDomain: "scholarnote-114c8.firebaseapp.com",
  projectId: "scholarnote-114c8",
  storageBucket: "scholarnote-114c8.firebasestorage.app",
  messagingSenderId: "242592879151",
  appId: "1:242592879151:web:6ead5545e629ea2e466cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db}