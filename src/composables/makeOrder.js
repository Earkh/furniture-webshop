import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const error = ref(null)

const order = async (items, uid) => {
    error.value = null

    try {
        projectFirestore.collection("orders").doc().set({
            user: uid,
            order: items
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
const placeOrder = () => {
    return { error, order }
}

export default placeOrder