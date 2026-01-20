import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:
  authDomain:
  projectId:
  storageBucket:
  messagingSenderId:
  appId:
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}