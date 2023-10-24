// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFz9qR47dktHwbkQRup3BxVZQ0zgctuQY",
  authDomain: "boxrp-app.firebaseapp.com",
  projectId: "boxrp-app",
  storageBucket: "boxrp-app.appspot.com",
  messagingSenderId: "132921553254",
  appId: "1:132921553254:web:6a14d7c953f18f404d58a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }