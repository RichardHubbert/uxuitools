// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsXR9aKh9nRBSkZqa7ZlkIjbxj_P6sk7o",
  authDomain: "uxuiportal.firebaseapp.com",
  projectId: "uxuiportal",
  storageBucket: "uxuiportal.firebasestorage.app",
  messagingSenderId: "298929882692",
  appId: "1:298929882692:web:d16dde3e05ddecac1e5e11",
  measurementId: "G-1WJBY5YZ6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);