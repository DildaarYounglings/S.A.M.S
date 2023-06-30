// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5NtKImvRQ7FUDkNV80CaSQQNxR_CGm5Q",
  authDomain: "sams-cc74b.firebaseapp.com",
  projectId: "sams-cc74b",
  storageBucket: "sams-cc74b.appspot.com",
  messagingSenderId: "745669493080",
  appId: "1:745669493080:web:09a57945c7dff0d280652d",
  measurementId: "G-5GQBMSN987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app) ;
const storage = getStorage(app);

export{
    db,
    auth,
    storage,    
}