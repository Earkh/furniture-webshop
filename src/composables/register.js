import { ref } from 'vue'
import { auth, projectFirestore } from '../firebase/config'

const error = ref(null)

const register = async (email, password, name, phone, address) => {
    error.value = null

    try {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return projectFirestore.collection('users').doc(cred.user.uid).set({
                name: name,
                phone: phone,
                address: address
            })
        })
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const doRegister = () => {
    return { error, register }
}

export default doRegister