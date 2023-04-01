// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_SGUBOzrwKIC-z4h6Gx-bigqY30esdn4",
  authDomain: "interview-questions-js.firebaseapp.com",
  projectId: "interview-questions-js",
  storageBucket: "interview-questions-js.appspot.com",
  messagingSenderId: "1097099320152",
  appId: "1:1097099320152:web:2a9fe8169845babbe9a32d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
