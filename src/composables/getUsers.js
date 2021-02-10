import { projectFirestore } from '../firebase/config'

const data = []

const getUsers = () => {
    projectFirestore.collection('usersCollection').onSnapshot( snapshot => {

        snapshot.forEach( snapChild => {
            data.push({
                ...snapChild.data()
            })
        })
    })
    return data
}

export default getUsers