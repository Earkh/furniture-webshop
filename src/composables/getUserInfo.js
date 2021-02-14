
import { projectFirestore } from '../firebase/config'

const userData = []

const userInfo = async (uid) => {

    try {
        await projectFirestore.collection('users').doc(uid).get().then(function(doc){
            if (doc.exists) {
                userData.push(doc.data())
            } else {
                console.log("No such document!")
            }
        })
       
        return userData
    } catch(err) {
        console.log(err.value)
    }
}

const getUserInfo = () => {
    return { userInfo }
}

export default getUserInfo