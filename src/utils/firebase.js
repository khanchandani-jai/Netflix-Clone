// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp4DmERcbLo4OEHNRTHNdB3CCSbyWG7Kk",
  authDomain: "netflix-clone-fec6d.firebaseapp.com",
  projectId: "netflix-clone-fec6d",
  storageBucket: "netflix-clone-fec6d.appspot.com",
  messagingSenderId: "1004039689951",
  appId: "1:1004039689951:web:5bd98c33abf13e7e887b6a",
  measurementId: "G-G4P0L21WLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
