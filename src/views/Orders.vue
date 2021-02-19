<template>
    <table class="table w-100">
        <thead>
            <tr>
                <th scope="col" style="min-width: 25%">#</th>
                <th scope="col" style="min-width: 25%">Item</th>
                <th scope="col" style="min-width: 25%">Qty</th>
                <th scope="col" style="min-width: 25%">Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="items" v-for="order in userOrders.order" :key="order.id">
            <td><img :src=order.img style="width: 100px; height: 100px"></td>
            <td>{{order.name}}</td>
            <td>{{order.qty}}</td>
            <td><span class="font-weight-bold">{{order.price}}€</span></td>
        </tbody>
        <tfoot>
        </tfoot>
    </table>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { auth, projectFirestore } from '../firebase/config'
import Item from '../components/Item'

export default {
    setup() {
        const {user} = getUser()
        const uid = auth.currentUser.uid
        const userOrders = ref([])
        const orderInfo = projectFirestore.collection('orders').doc()

        projectFirestore.collection("orders").where("user", "==", uid)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                userOrders.value=doc.data();
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

        return {user, uid,  userOrders, orderInfo, Item}
    }
}
</script>

<style scoped>
    td{
        height: 100%;
        display: inline-flexbox;
        justify-content: center;
        align-content: center;
        vertical-align: middle;
    }
</style>