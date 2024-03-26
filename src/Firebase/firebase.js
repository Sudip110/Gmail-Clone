// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app"
//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPIbVp6rZIOxoHmFAmmliumqOIr6uIY8",
  authDomain: "clone-8b9c5.firebaseapp.com",
  projectId: "clone-8b9c5",
  storageBucket: "clone-8b9c5.appspot.com",
  messagingSenderId: "135623121962",
  appId: "1:135623121962:web:daa2c167658d9ff0d73753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const db = getFirestore(app);

export { db, app};
