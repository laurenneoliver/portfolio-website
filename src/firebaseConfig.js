// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SDGJ28lyrjf6lFXHWO-g16AYJbULZ5o",
  authDomain: "laurenneportfolio.firebaseapp.com",
  projectId: "laurenneportfolio",
  storageBucket: "laurenneportfolio.firebasestorage.app",
  messagingSenderId: "542634058463",
  appId: "1:542634058463:web:3a353d233a7351174dff6a",
  measurementId: "G-CLY125N4RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
export default app;