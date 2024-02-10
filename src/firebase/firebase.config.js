// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfBng6fS7RZGwo6DkTFFAi4DvaZfPSoJE",
  authDomain: "react-deagon-news-auth.firebaseapp.com",
  projectId: "react-deagon-news-auth",
  storageBucket: "react-deagon-news-auth.appspot.com",
  messagingSenderId: "1042639573183",
  appId: "1:1042639573183:web:56a99e356de379104f760a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
