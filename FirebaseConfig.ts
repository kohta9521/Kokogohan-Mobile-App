import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA-a0UV5mE9z2zvz-TrmfGSW_ZTV6PolE8",
    authDomain: "kokogohan-app.firebaseapp.com",
    projectId: "kokogohan-app",
    storageBucket: "kokogohan-app.appspot.com",
    messagingSenderId: "588351562490",
    appId: "1:588351562490:web:e32cd0aaa9e803eb2adf43",
    measurementId: "G-6TYVL2W43Z"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);