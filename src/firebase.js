// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getFirestore } from "../node_modules/firebase/firestore";
import { getAuth } from "../node_modules/firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcbs1iayxf1utwRgXYNU4piLo2BYfqmCo",
  authDomain: "polarized-53105.firebaseapp.com",
  projectId: "polarized-53105",
  storageBucket: "polarized-53105.appspot.com",
  messagingSenderId: "96455357011",
  appId: "1:96455357011:web:8423b7ebd4691c509a0ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth};
export default db;