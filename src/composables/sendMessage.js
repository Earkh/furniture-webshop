import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const error = ref(null)

const message = async (message, name, email) => {
    error.value = null

    try {
        projectFirestore.collection("messages").doc().set({
            user: name,
            mail: email,
            message: message
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}
const sendMessage2DB = () => {
    return { error, message }
}

export default sendMessage2DB