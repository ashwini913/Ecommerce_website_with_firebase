import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgwQC9AjnVl8YLfCso2c0q27Dg6YqRFG8",
  authDomain: "mock-309313.firebaseapp.com",
  projectId: "mock-309313",
  storageBucket: "mock-309313.appspot.com",
  messagingSenderId: "582124324505",
  appId: "1:582124324505:web:447b1ce8ee38d9d5249a08",
  measurementId: "G-C7LMJX1G49",
};
//initailizing firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
