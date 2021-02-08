<template>
    <div class="card m-1" style="width: 18rem;">
        <img :src=product.img  alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title h4">{{product.name}}</h5>
            <p class="card-text">{{product.desc}}</p>
            <p class="card-text d-flex justify-content-between align-items-center h5 font-weight-bold">{{product.price}}€ 
                <button class="btn btn-vue" @click="add2Cart(product)">Buy</button>
            </p>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    props: ['product'],
    setup(){
        const store = useStore()
        const add2Cart = (product) => {
            store.dispatch('add2Cart', product)
        }

        return { add2Cart }
    }
}
</script>

<style>

</style>