<template>
    <div class="users">
        <h1>Users</h1>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in Users" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import { projectFirestore } from '../firebase/config'


export default {
    // data() {
    //     return {
    //         Users: []
    //     }
    // },
    // created() {
    //     res.onSnapshot((snapshotChange) => {
    //         this.Users = [];
    //         snapshotChange.forEach((doc) => {
    //             this.Users.push({
    //                 id: doc.id,
    //                 name: doc.data().name,
    //                 email: doc.data().email,
    //             })
    //         });
    //     })
    // }
}
</script>

<style>

</style>