import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBBvTL1ocoJoHCOFxBl64c-N75uApZkO9o",
    authDomain: "my-social-book-70353.firebaseapp.com",
    projectId: "my-social-book-70353",
    storageBucket: "my-social-book-70353.appspot.com",
    messagingSenderId: "925899669845",
    appId: "1:925899669845:web:2722a78667a4069eab2fdc"
};


// Initialize Firebase
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
// const db = app.firestore();
// const storage = firebase.storage();

// export { db, storage };
export default app;
