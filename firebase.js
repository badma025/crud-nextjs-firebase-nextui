// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEujoRKu6OGlIOJK58Tgp-nkn4e8JnLDo",
  authDomain: "nextjs-crud-6b716.firebaseapp.com",
  projectId: "nextjs-crud-6b716",
  storageBucket: "nextjs-crud-6b716.appspot.com",
  messagingSenderId: "262677714208",
  appId: "1:262677714208:web:4580d76ae755126596b345",
  measurementId: "G-4N1VQQG1PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
