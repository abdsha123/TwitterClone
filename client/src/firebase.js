// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFEq55Zoq0o1FIx0Bx_8B7ZtTyLEBzclI",
  authDomain: "twitter-387006.firebaseapp.com",
  projectId: "twitter-387006",
  storageBucket: "twitter-387006.appspot.com",
  messagingSenderId: "37217742950",
  appId: "1:37217742950:web:c8b40632f05dee79d37da7",
  measurementId: "G-H7T80L3MQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;