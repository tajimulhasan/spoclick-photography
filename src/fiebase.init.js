// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw54DJ5noJF_LnTk54CVhPhMLRPOG5Byw",
  authDomain: "spoclick-photography.firebaseapp.com",
  projectId: "spoclick-photography",
  storageBucket: "spoclick-photography.appspot.com",
  messagingSenderId: "1075737343187",
  appId: "1:1075737343187:web:eef7b9388e06b2b1dd9026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
