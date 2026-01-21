// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3fgh4Z6ZUz0-Zp8rb7JatkKPC1mI5viA",
  authDomain: "scholarnote-37e01.firebaseapp.com",
  projectId: "scholarnote-37e01",
  storageBucket: "scholarnote-37e01.firebasestorage.app",
  messagingSenderId: "867813476478",
  appId: "1:867813476478:web:5bf28c6dab26e41c7cb02f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}