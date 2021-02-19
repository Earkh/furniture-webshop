<template>
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
            <div id="slider"  class="d-flex justify-content-center align-items-center">
                
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators" style="margin-bottom: -30px">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>                                                                                                
                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>

                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <HorizontalCard :product="products[1]" v-if="products[1]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[2]" v-if="products[2]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[9]" v-if="products[9]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[12]" v-if="products[12]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[16]" v-if="products[16]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[20]" v-if="products[20]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[24]" v-if="products[24]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[28]" v-if="products[28]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[32]" v-if="products[32]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>
                        <div class="carousel-item">
                            <HorizontalCard :product="products[36]" v-if="products[36]"></HorizontalCard>
                            <div v-else>Loading</div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style="margin-left: -100px">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style="margin-right: -100px">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

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
import Card from '../components/Card'
import HorizontalCard from '../components/HorizontalCard'

export default {
    name: 'Articles',
    components: {
        Card,
        HorizontalCard
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