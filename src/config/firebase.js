// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKJAsasc7C22zc2_zNcPAPY6TittWlNfw",
  authDomain: "tasklistapp-f9581.firebaseapp.com",
  projectId: "tasklistapp-f9581",
  storageBucket: "tasklistapp-f9581.appspot.com",
  messagingSenderId: "537803695108",
  appId: "1:537803695108:web:722bbf68e1268eb738c151",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
