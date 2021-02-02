import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const register = async (email, password) => {
    error.value = null

    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Couldn\'t complete the register')
        }
        // await res.user.updateProfile({name, address})
        // error.value = null
        
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