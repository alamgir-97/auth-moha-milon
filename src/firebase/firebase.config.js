// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA7ikjlmVM6zmBHZad-lGQzVxf8s9dIUE",
  authDomain: "auth-moha-milon-0.firebaseapp.com",
  projectId: "auth-moha-milon-0",
  storageBucket: "auth-moha-milon-0.appspot.com",
  messagingSenderId: "809684493485",
  appId: "1:809684493485:web:f27ada79fbd851f9505224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;