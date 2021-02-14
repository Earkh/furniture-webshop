<template>
        <div class="register h-100 d-flex justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Profile
                    </div>
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form   class="form-control">
                            <h6 class="card-title mb-2">Name</h6>
                            <input type="text" id="name" name="name" class="form-control mb-2" v-model=userData.name readonly>
                            <h6 class="card-title mb-2">Address</h6>
                            <input type="text" id="address" name="Address" class="form-control mb-2" v-model=userData.address readonly>
                            <h6 class="card-title mb-2">Phone</h6>
                            <input type="text" id="phone" name="Phone" class="form-control mb-2" v-model=userData.phone readonly>
                            <h6 class="card-title mb-2">Email</h6>
                            <input type="email" id="email" name="email" class="form-control mb-2" v-model=user.email readonly>
                            <br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { auth, projectFirestore } from '../firebase/config'

export default {
    setup() {
        const {user} = getUser()
        const uid = auth.currentUser.uid
        const userData = ref([])
        const userInfo = projectFirestore.collection('users').doc(uid).get().then(function(doc){
            if (doc.exists) {
                userData.value=doc.data()
            } else {
                console.log("No such document!")
            }
        })
        return {user, uid,  userData, userInfo}
    }
}
</script>

<style>

</style>