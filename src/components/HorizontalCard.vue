<template>
<div class="card mt-0">
  <img :src=product.img class="card-img-top" style="width: 120px; margin-left: 1em"/>
  <div class="card-body" style="min-width: 242px">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">
      {{product.desc}}
    </p>
    <div class="d-flex justify-content-around align-items-center">
        <span class="font-weight-bold"><del>{{(product.price*1.1).toFixed(0)}}€</del></span>
        <span class="font-weight-bold">{{product.price}}€</span>
        <button class="btn btn-vue" @click="add2Cart(product)">Buy</button>
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    props: ['product'],
    
    setup(props, context){
        const store = useStore()
        const add2Cart = (product) => {
            store.dispatch('add2Cart', product)
        }

        const productData = props.product

        return { add2Cart, productData }
    }
}
</script>

<style scoped>
.card {
  flex-direction: row;
  align-items: center;
}
.card-title {
  font-weight: bold;
}
.card img {
  width: 30%;
  border-top-right-radius: 0;
  border-bottom-left-radius: calc(0.25rem - 1px);
}
@media only screen and (max-width: 768px) {
  a {
    display: none;
  }
  .card-body {
    padding: 0.5em 1.2em;
  }
  .card-body .card-text {
    margin: 0;
  }
  .card img {
    width: 50%;
  }
}
@media only screen and (max-width: 1200px) {
  .card img {
    width: 40%;
  }
}
</style>