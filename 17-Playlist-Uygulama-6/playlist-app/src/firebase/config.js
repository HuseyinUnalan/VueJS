import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB_OLwq8R-gZontp_-gvyDXWB89pjcnqXU",
    authDomain: "playlist-vue-3f9ae.firebaseapp.com",
    projectId: "playlist-vue-3f9ae",
    storageBucket: "playlist-vue-3f9ae.appspot.com",
    messagingSenderId: "963999378972",
    appId: "1:963999378972:web:5b447211a8b6abd5f979d9"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()


const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };