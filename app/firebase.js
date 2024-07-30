// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlGThhTWLW4X9hZDS6p7CxcM7bnP0JTs",
  authDomain: "expense-tracker-6b653.firebaseapp.com",
  projectId: "expense-tracker-6b653",
  storageBucket: "expense-tracker-6b653.appspot.com",
  messagingSenderId: "621293379664",
  appId: "1:621293379664:web:7316b0e4c331e612b07155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);