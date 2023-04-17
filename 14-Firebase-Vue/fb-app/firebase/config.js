// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXCrd3Fttzq_-hlCXYNitcChkRN6zdJgQ",
    authDomain: "vue3-795bc.firebaseapp.com",
    projectId: "vue3-795bc",
    storageBucket: "vue3-795bc.appspot.com",
    messagingSenderId: "577716138615",
    appId: "1:577716138615:web:bee4a54b74f6a3ec95cc72"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export { fb };