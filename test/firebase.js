// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFz9qR47dktHwbkQRup3BxVZQ0zgctuQY",
    authDomain: "boxrp-app.firebaseapp.com",
    projectId: "boxrp-app",
    storageBucket: "boxrp-app.appspot.com",
    messagingSenderId: "132921553254",
    appId: "1:132921553254:web:6a14d7c953f18f404d58a7",
};

const uiConfig = {
    signInSuccessUrl: '/app/dashboard/1',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
        //   firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'https://drive.google.com/file/d/1c3oT2E6s_Jgv_bUos75sTI1WfnArBBFr/view',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
        window.location.assign('https://drive.google.com/file/d/1Pfdk6uuPe-_9fHPAvCtLaHoRq650FHDw/view');
    }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Connect the emulator
connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
connectFirestoreEmulator(db, '127.0.0.1', 8080);

export { app, auth, uiConfig, db };
