import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (colletion) => {
    const error = ref(null)
    const addDoc = async(doc) => {
        error.value = null

        try {
            await projectFirestore.collection(colletion).add(doc)
        } catch (error) {
            console.log(err.message)
            error.value = 'could not send the message';
        }
    }
    return { error, addDoc }
};

export default useCollection;