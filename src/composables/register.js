import { ref } from 'vue'
<<<<<<< HEAD
import { auth } from '../firebase/config'
import { projectFirestore } from '../firebase/config'
=======
import { auth, projectFirestore } from '../firebase/config'
>>>>>>> a0c33714a0986d180e35b7d288fb05e40fdb67d4

const error = ref(null)
const firestore = projectFirestore

<<<<<<< HEAD
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
=======
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
>>>>>>> a0c33714a0986d180e35b7d288fb05e40fdb67d4
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const doRegister = () => {
    return { error, register }
}

export default doRegister