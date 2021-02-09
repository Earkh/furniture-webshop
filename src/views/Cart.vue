<template>
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 p-2 mt-5">
            <h2 class="d-2 d-flex justify-content-center align-items-center">Shopping Cart</h2>
            <hr>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody id="items">
                    <Item
                        v-for="item in items" :key="item.id"
                        :item="item"
                    />
                </tbody>
                <tfoot>
                <tr id="cartFooter">
                    <!-- <Footer v-else/> -->
                </tr>
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

export default {
    setup(){
        const store = useStore()
        const items = computed(() => store.state.cart)
        const totalAmount = computed(() => store.getters.totalAmount)
        const totalPrice = computed(() => store.getters.totalPrice)
        const emptyCart = () => {store.commit('emptyCart')}
        const incrementQuantity = id => {store.commit('increment', id)}
        const decrementQuantity = id => {store.commit('decrement', id)}

        return { items, totalAmount, totalPrice, emptyCart, incrementQuantity, decrementQuantity, Item }
    }
}
</script>