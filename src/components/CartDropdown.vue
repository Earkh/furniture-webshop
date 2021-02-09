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
                <router-link to="/cart"><button class="btn btn-vue">Checkout</button></router-link>
            </div>
        </div>
    </div>
    <div class="dropdownContainer p-2 d-flex justify-content-center"  v-else>
        Your Cart is empty
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import DropdownProduct from './DropdownProduct'

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
    .dropdownContainer{
        max-height: 50vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>