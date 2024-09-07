// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "x-next-99cd3.firebaseapp.com",
  projectId: "x-next-99cd3",
  storageBucket: "x-next-99cd3.appspot.com",
  messagingSenderId: "534551334579",
  appId: "1:534551334579:web:b8e3bbff17f942e819aac6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
