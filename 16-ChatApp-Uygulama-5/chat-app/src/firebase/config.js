import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5RVIvs4JUD9oZ-eYG_wvwwEZEP7edzQ8",
    authDomain: "blog-vue3-789b8.firebaseapp.com",
    projectId: "blog-vue3-789b8",
    storageBucket: "blog-vue3-789b8.appspot.com",
    messagingSenderId: "297088390147",
    appId: "1:297088390147:web:e9f7d17848731f912a6a36"
};


firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };