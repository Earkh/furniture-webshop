<template>
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 p-2 mt-5">
            <h2 class="d-2 d-flex justify-content-center align-items-center">Shopping Cart</h2>
            <hr>
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
                <tbody id="items">
                    <Item
                        v-for="item in items" :key="item.id"
                        :item="item"
                    />
                </tbody>
                <tfoot>
                    <tr id="cartFooter" v-if="Object.keys(items).length === 0">
                        <th scope="row" colspan="5"  >
                            Your shopping cart is empty!
                            <router-link to="/"><button class="btn btn-danger">Keep shopping</button></router-link>
                        </th>
                    </tr>
                    <CartFooter v-else/>
                </tfoot>
            </table>
        </div>
        <div class="col-sm-4 p-2 mt-5">
            <h2 class="d-2 d-flex flex-column justify-content-center align-items-center">Payment Info</h2>
            <hr>
            <hr class="mb-5">
            <p>Shipping address: {{userData.address}}</p>
            <p>Shipping info: {{userData.name}}</p>
            <p>Shipping cost: <span></span></p>
            <p class="small mt-1"><em>Orders over 300€ will have free shipping costs</em></p>
            <p></p>
            <p>VAT 7%: <span class="h6 font-weight-bold">{{ (totalPrice * 0.07).toFixed(2) }}€</span></p>
            <p>TOTAL: <span class="h6 font-weight-bold">{{ (totalPrice + totalPrice * 0.07).toFixed(2) }}€</span></p>
            <button class="btn btn-vue mt-4" @click="makeOrder">BUY NOW</button>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 p-2 mt-5">

            
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Item from '../components/Item'
import CartFooter from '../components/CartFooter'
import getUser from '../composables/getUser'
import { auth, projectFirestore } from '../firebase/config'
import placeOrder from '../composables/makeOrder'

export default {
    setup(props, context){
        const { error, order } = placeOrder()
        const store = useStore()
        const items = computed(() => store.state.cart)
        const totalAmount = computed(() => store.getters.totalAmount)
        const totalPrice = computed(() => store.getters.totalPrice)
        const emptyCart = () => {store.commit('emptyCart')}
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
        const makeOrder = async () => {
            await order(items.value, uid)
            if (!error.value) {
                context.emit('makeOrder')
                store.commit('emptyCart')
            }
        }
        
        return { items, totalAmount, totalPrice, emptyCart, Item, CartFooter, user, userData, makeOrder }
    }
}
</script>