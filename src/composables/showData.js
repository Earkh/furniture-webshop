import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getUserInfo = (uid) => {
    const userInfo = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('usersCollection').doc(uid).get()

            userInfo.value = { ...res.data(), id: res.id}
            console.log(userInfo)
        } catch (err) {
            error.value = err.message
        }
    }
    return { userInfo, error, load }
}

export default getUserInfo