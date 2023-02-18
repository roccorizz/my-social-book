import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBBvTL1ocoJoHCOFxBl64c-N75uApZkO9o",
    authDomain: "my-social-book-70353.firebaseapp.com",
    projectId: "my-social-book-70353",
    storageBucket: "my-social-book-70353.appspot.com",
    messagingSenderId: "925899669845",
    appId: "1:925899669845:web:2722a78667a4069eab2fdc"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);   