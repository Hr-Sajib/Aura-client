// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBztpMo2ESCB1mm1NJthZHtLadw8WFWMCY",
  authDomain: "aura-art-gallary.firebaseapp.com",
  projectId: "aura-art-gallary",
  storageBucket: "aura-art-gallary.appspot.com",
  messagingSenderId: "554184432415",
  appId: "1:554184432415:web:7c28911973c45755cf2e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;