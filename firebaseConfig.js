// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArWHkoAD7lxGrTg2q0_YLaL2dAv5BVoFI",
  authDomain: "bubbim-6cf6e.firebaseapp.com",
  projectId: "bubbim-6cf6e",
  storageBucket: "bubbim-6cf6e.appspot.com",
  messagingSenderId: "868912672543",
  appId: "1:868912672543:web:e89d0f10e691ad30c28a2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFireStore(app);
