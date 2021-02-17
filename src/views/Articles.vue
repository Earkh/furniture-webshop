<template>
    {{array}}
    <div id="articlesContainer">
        <div class="row">
            <div id="articlesHeader" class="col d-flex justify-content-center align-items-center" :class="$route.params.slug">
                <div class="layer">
                </div>
                    <span style="z-index: 2;">{{$route.params.slug}}</span>
            </div>
        </div>
        <div id="sales" class="row d-flex flex-column justify-content-center p-1">
            Promotions
            <div id="slider" class="d-flex justify-content-center align-items-center">
                <!-- <carousel :items-to-show="1" :wrapAround="true" :transition="200">
                    <slide class="d-flex justify-content-center" v-for="product in products" :key="product.id">
                        <div class="card" style="width: 18rem;">
                            <img :src="product.img"  alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title h4">{{product.name}}</h5>
                                <p class="card-text">{{product.desc}}</p>
                                <p class="card-text d-flex justify-content-between align-items-center h5 font-weight-bold">{{product.price}}€ <a href="#" class="btn btn-vue">Buy</a></p>
                                
                            </div>
                        </div>     
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel> -->
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-3 offset-lg-1 col-lg-10 w-100" id="articlesCards">
            <div v-for="product of products" :key="product.id">
                <Card 
                    v-if="product.category == $route.params.slug"
                    
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Card from '../components/Card'
import 'vue3-carousel/dist/carousel.css';

export default {
    name: 'Articles',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Card
    },
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        
        const products =  computed(() => store.state.products)
        return { products }
    }
};
</script>

<style scoped>
    #articlesContainer{
        width: 100%;
        height: 92vh;
    }
    #articlesHeader{
        background-color: rgba(0, 0, 0, 0.4);
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 25vh;
        font-size: xx-large;
    }
    .bedroom{
        background-image: url('../assets/bedroom1.jpg');
    }
    .kitchen{
        background-image: url('../assets/kitchen1.jpg');
    }
    .living{
        background-image: url('../assets/living1.jpg');
    }
    .office{
        background-image: url('../assets/office1.jpg');
    }
    .layer{
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    #sales{
        background: #efe583;
    }
    #slider{
        background: gainsboro;
        width: 100%;
        height: 25vh;
    }
    .btn-vue{
        color: #fff !important;
    }
</style>