import { ref } from 'vue'
import { auth } from '../firebase/config'
import { projectFirestore } from '../firebase/config'

const error = ref(null)
const firestore = projectFirestore

const register = async (email, password, name, address) => {
    error.value = null

    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        .then(registeredUser => {
            firestore.collection("usersCollection")
            .add({
              uid: registeredUser.user.uid,
              name: name,
              address: address
            })
        }).catch(function(error){
            console.log(error)
        })
        error.value = null

        return res
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const doRegister = () => {
    return { error, register }
}

export default doRegister