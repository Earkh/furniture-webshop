<template>
    <th scope="row" colspan="2" class="justy-self-start">Total items: </th>
    <td>
        {{ totalAmount }}
    </td>
    <td class="font-weight-bold"><span>{{ totalPrice }}</span>€</td>
    <td>
        <button class="btn btn-danger btn-sm" id="emptyCart" @click="emptyCart">
            Empty Cart
        </button>
    </td>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()
        const totalAmount = computed(() => store.getters.totalAmount)
        const totalPrice = computed(() => store.getters.totalPrice)
        const emptyCart = () => {store.commit('emptyCart')}

        return {totalAmount, totalPrice, emptyCart}
    }
}

</script>

<style scoped>
    th{
        height: 100%;
        display: inline-flexbox;
        justify-content: center;
        align-content: center;
        vertical-align: middle;
    }
</style>