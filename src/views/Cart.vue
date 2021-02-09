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
            <h2 class="d-2 d-flex justify-content-center align-items-center">Payment Info</h2>
            <hr>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 p-2 mt-5">
            
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Item from '../components/Item'
import CartFooter from '../components/CartFooter'

export default {
    setup(){
        const store = useStore()
        const items = computed(() => store.state.cart)
        const totalAmount = computed(() => store.getters.totalAmount)
        const totalPrice = computed(() => store.getters.totalPrice)
        const emptyCart = () => {store.commit('emptyCart')}
        

        return { items, totalAmount, totalPrice, emptyCart, Item, CartFooter }
    }
}
</script>