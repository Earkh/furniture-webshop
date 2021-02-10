import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
// const data = []
// const getUserInfo = (uid) => {
//     projectFirestore.collection('usersCollection').where("uid", "==", uid).get().then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             console.log(doc.id, " => ", doc.data());
//             data.push(doc.data());
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
//     console.log(data)
//     return data
// }

// export default getUserInfo

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