// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4O5JF91OiycNhq3CCx6kxs9-VYBeDUlQ",
  authDomain: "katflox-gpt.firebaseapp.com",
  projectId: "katflox-gpt",
  storageBucket: "katflox-gpt.appspot.com",
  messagingSenderId: "462919924250",
  appId: "1:462919924250:web:b043e1b33e102e006e2fa3",
  measurementId: "G-BQHMBHEE81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();