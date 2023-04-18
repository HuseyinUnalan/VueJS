// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5RVIvs4JUD9oZ-eYG_wvwwEZEP7edzQ8",
    authDomain: "blog-vue3-789b8.firebaseapp.com",
    projectId: "blog-vue3-789b8",
    storageBucket: "blog-vue3-789b8.appspot.com",
    messagingSenderId: "297088390147",
    appId: "1:297088390147:web:ea863caaaac7d0642a6a36"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export { fb };