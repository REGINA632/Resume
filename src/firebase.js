// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjWJOyTy2F-ZD5Vp93y4wMzJcu9q3lzk",
  authDomain: "resume-83e25.firebaseapp.com",
  projectId: "resume-83e25",
  storageBucket: "resume-83e25.appspot.com",
  messagingSenderId: "1086379701457",
  appId: "1:1086379701457:web:47f7dde1768be28128c1f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
