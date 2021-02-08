<template>
    <div class="dropdownContainer"  v-if="Object.keys(items).length != 0">
        <div class="row d-flex flex-column">
            <DropdownProduct 
                v-for="item in items" :key="item.id"
                :item="item"
            />
        </div>
        <div class="row p-2 d-flex align-items-center">
            <div class="col-6">
                Total: <span class="h5 font-weight-bold">{{ totalPrice }}€</span>
            </div>
            <div class="col-6">
                <button class="btn btn-vue">Checkout</button>
                <!-- TODO Add Router Link to Cart View -->
            </div>
        </div>
    </div>
    <div class="dropdownContainer p-2 d-flex justify-content-center"  v-else>
        Your Cart is empty
    </div>
</template>

<script>
import DropdownProduct from './DropdownProduct'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    components: {
        DropdownProduct
    },
    setup(){
        const store = useStore()
        const items = computed(() => store.state.cart)
        const totalPrice  = computed(() => store.getters.totalPrice)


        return { items, totalPrice }
    }
}
</script>

<style scoped>
    .btn-vue{
        width: 90%;
        display: flex;
        justify-content: center;
    }
</style>