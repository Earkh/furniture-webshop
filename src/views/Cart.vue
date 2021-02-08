<template>

</template>
TODO Create Cart View
<script>
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()
        const items = computed(() => store.state.cart)
        const totalAmount = computed(() => store.getters.totalAmount)
        const totalPrice = computed(() => store.getters.totalPrice)
        const emptyCart = () => {store.commit('emptyCart')}
        const incrementQuantity = id => {store.commit('increment', id)}
        const decrementQuantity = id => {store.commit('decrement', id)}

        return { items, totalAmount, totalPrice, emptyCart, incrementQuantity, decrementQuantity }
    }
}
</script>

<style>

</style>