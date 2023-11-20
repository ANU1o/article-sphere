// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5VpvrjCrTO8UQEbakz63vlekO8FGQPQ",
  authDomain: "article-sphere.firebaseapp.com",
  projectId: "article-sphere",
  storageBucket: "article-sphere.appspot.com",
  messagingSenderId: "746474381036",
  appId: "1:746474381036:web:b89dc55cfacbade8cf8fc9",
  measurementId: "G-PHXNP12W8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
