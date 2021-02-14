import { ref } from 'vue'
import { auth, projectFirestore } from '../firebase/config'

const error = ref(null)
const firestore = projectFirestore

const register = async (email, password, name, phone, address) => {
    error.value = null

    try {
        // const res = await auth.createUserWithEmailAndPassword(email, password)
        // if (!res) {
        //     throw new Error('Couldn\'t complete the register')
        // }
        // // await res.user.updateProfile({name, address})
        // // error.value = null
        
        // return res
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