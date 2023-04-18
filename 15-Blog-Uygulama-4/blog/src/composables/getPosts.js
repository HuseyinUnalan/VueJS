import { async } from "@firebase/util";
import { ref } from "vue";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore/lite";
import { fb } from "../firebase/config";

const getPosts = async() => {
    const db = getFirestore();
    const fbRef = collection(db, 'posts');
    const fbDocs = await getDocs(fbRef);
    const data = fbDocs.docs.map((doc) => doc.data())

    return data;
};

export default getPosts;